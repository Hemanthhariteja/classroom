#!/usr/bin/env node
/**
 * Simple seed script that invokes a backend endpoint to seed initial data.
 * Usage:
 *   API_BASE_URL=http://localhost:4000 node scripts/seed-db.js
 *
 * Notes:
 * - Secure/remove this endpoint in production.
 * - If your backend requires auth, set SEED_TOKEN and it will send Authorization header.
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:4000';
const SEED_TOKEN = process.env.SEED_TOKEN || '';

async function main() {
  const url = `${API_BASE_URL}/api/admin/seed`;
  const headers = { 'Content-Type': 'application/json' };
  if (SEED_TOKEN) headers['Authorization'] = `Bearer ${SEED_TOKEN}`;

  const body = {
    classes: [
      { title: 'Intro to AI', startsAt: '2025-10-29T09:00:00Z' },
      { title: 'Data Structures', startsAt: '2025-11-05T09:00:00Z' }
    ],
    users: [
      { phone: '+15551234567', role: 'faculty', name: 'Dr. Smith' },
      { phone: '+15551234568', role: 'student', name: 'Alice' }
    ]
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const text = await res.text();
    console.log(`Seed response [${res.status}]: ${text}`);
    if (!res.ok) process.exit(1);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
}

main();