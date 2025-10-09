import mongoose from 'mongoose';

export function isPhone(str) {
  // Very permissive E.164-like - allows spaces, dashes, parentheses
  if (typeof str !== 'string') return false;
  
  // Remove all non-digit characters except + at the beginning
  const cleaned = str.replace(/[^\d+]/g, '');
  
  // Check if it matches basic international format
  return /^\+?[0-9]{7,15}$/.test(cleaned);
}

export function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

export function requiredFields(obj, fields) {
  for (const f of fields) {
    if (obj[f] === undefined || obj[f] === null || obj[f] === '') return false;
  }
  return true;
}