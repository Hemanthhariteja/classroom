import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { S3Client, PutObjectCommand, HeadObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import mime from 'mime-types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const driver = process.env.STORAGE_DRIVER || 'local';

// Local storage base dir
const localBaseDir = path.resolve(__dirname, '../../storage');

// S3 config
let s3Client = null;
const s3Config = {
  region: process.env.S3_REGION || 'auto',
  endpoint: process.env.S3_ENDPOINT, // e.g., https://nyc3.digitaloceanspaces.com
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE === 'true' || false,
  credentials: process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY ? {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
  } : undefined
};
const s3Bucket = process.env.S3_BUCKET;
const s3PublicBaseUrl = process.env.S3_PUBLIC_BASE_URL; // e.g., https://my-bucket.nyc3.cdn.digitaloceanspaces.com

if (driver === 's3') {
  s3Client = new S3Client(s3Config);
}

async function ensureDirForKey(key) {
  const full = path.join(localBaseDir, key);
  const dir = path.dirname(full);
  await fsp.mkdir(dir, { recursive: true });
}

export const storage = {
  async putObject({ key, body, contentType }) {
    if (driver === 's3') {
      if (!s3Client || !s3Bucket) throw new Error('S3 not configured');
      const cmd = new PutObjectCommand({
        Bucket: s3Bucket,
        Key: key,
        Body: body,
        ContentType: contentType || mime.lookup(key) || 'application/octet-stream',
        ACL: process.env.S3_ACL || 'public-read'
      });
      await s3Client.send(cmd);
      return { key, url: storage.getPublicUrl(key) };
    } else {
      await ensureDirForKey(key);
      const full = path.join(localBaseDir, key);
      await fsp.writeFile(full, body);
      return { key, url: `/storage/${key}` };
    }
  },

  async putFile({ key, filePath, contentType }) {
    const data = await fsp.readFile(filePath);
    return this.putObject({ key, body: data, contentType });
  },

  async getReadStream(key) {
    if (driver === 's3') {
      // For simplicity return null and suggest using getPublicUrl redirect
      return null;
    } else {
      const full = path.join(localBaseDir, key);
      if (!fs.existsSync(full)) return null;
      return fs.createReadStream(full);
    }
  },

  getPublicUrl(key) {
    if (driver === 's3') {
      if (s3PublicBaseUrl) return `${s3PublicBaseUrl.replace(/\/+$/, '')}/${key}`;
      if (s3Config.endpoint && s3Bucket && !s3Config.forcePathStyle) {
        const host = s3Config.endpoint.replace(/^https?:\/\//, '').replace(/\/+$/, '');
        return `https://${s3Bucket}.${host}/${key}`;
      }
      return null; // cannot compute
    } else {
      return `/storage/${key}`;
    }
  }
};