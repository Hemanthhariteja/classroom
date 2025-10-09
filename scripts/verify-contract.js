#!/usr/bin/env node
/**
 * API Contract Verifier
 *
 * Requires Node.js 18+ (global fetch).
 *
 * Usage:
 *   API_BASE_URL=http://localhost:4000 node scripts/verify-contract.js
 *
 * Exits with non-zero status if any check fails.
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:4000';

function log(ok, msg) {
  console.log(`${ok ? '✅' : '❌'} ${msg}`);
}

function expect(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function hasKeys(obj, keys) {
  return keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));
}

async function getJson(path, opts = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, opts);
  const json = await res.json().catch(() => ({}));
  return { res, json };
}

async function run() {
  const failures = [];

  async function check(name, fn) {
    try {
      await fn();
      log(true, name);
    } catch (e) {
      log(false, `${name} — ${e.message}`);
      failures.push(name);
    }
  }

  // 1) Health
  await check('GET /api/health returns { status: "ok" }', async () => {
    const { res, json } = await getJson('/api/health');
    expect(res.ok, `HTTP ${res.status}`);
    expect(json.status === 'ok', `Expected status=ok got ${JSON.stringify(json)}`);
  });

  // 2) OTP send
  await check('POST /api/auth/send-otp returns { status }', async () => {
    const body = { phone: '+15551234567' };
    const { res, json } = await getJson('/api/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    expect(res.ok, `HTTP ${res.status}`);
    expect(typeof json.status === 'string', 'Missing or invalid status');
  });

  // 3) OTP verify (accept "verified" or presence of token)
  await check('POST /api/auth/verify-otp returns { token } or { status: "verified" }', async () => {
    const body = { phone: '+15551234567', code: '123456' };
    const { res, json } = await getJson('/api/auth/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    expect(res.ok, `HTTP ${res.status}`);
    expect(typeof json.token === 'string' || json.status === 'verified',
      'Expected token or status=verified');
  });

  // 4) Classes list
  await check('GET /api/classes returns array of classes with required fields', async () => {
    const { res, json } = await getJson('/api/classes');
    expect(res.ok, `HTTP ${res.status}`);
    expect(Array.isArray(json), 'Expected an array');
    if (json.length > 0) {
      const c = json[0];
      expect(hasKeys(c, ['id', 'title', 'startsAt', 'status']),
        `Missing keys in class: ${JSON.stringify(c)}`);
    }
  });

  // 5) Media package shape (best-effort check: classId=cls_001)
  await check('POST /api/media/package returns manifest shape', async () => {
    const body = { classId: 'cls_001' };
    const { res, json } = await getJson('/api/media/package', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    expect(res.ok, `HTTP ${res.status}`);
    const required = ['id', 'classId', 'title', 'slides', 'totalDurationSec', 'createdAt', 'version'];
    expect(hasKeys(json, required), `Missing keys in manifest: ${JSON.stringify(json)}`);
    expect(Array.isArray(json.slides), 'slides must be an array');
    if (json.slides.length > 0) {
      const s = json.slides[0];
      expect(hasKeys(s, ['index', 'image', 'audio', 'durationSec']),
        `Slide missing keys: ${JSON.stringify(s)}`);
    }
  });

  // 6) Outbox sync
  await check('POST /api/sync/outbox accepts items and returns counts', async () => {
    const body = {
      clientId: 'verify_contract',
      items: [
        {
          id: 'out_verify_1',
          type: 'quiz.answer',
          classId: 'cls_001',
          payload: { questionId: 'q1', answer: 'B' },
          createdAt: new Date().toISOString()
        }
      ]
    };
    const { res, json } = await getJson('/api/sync/outbox', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    expect(res.ok, `HTTP ${res.status}`);
    expect(typeof json.accepted === 'number' && typeof json.failed === 'number',
      'Expected accepted/failed numbers');
  });

  if (failures.length) {
    console.error(`\nContract verification failed for ${failures.length} check(s).`);
    process.exit(1);
  } else {
    console.log('\nAll checks passed.');
  }
}

run().catch(e => {
  console.error('Verifier crashed:', e);
  process.exit(1);
});