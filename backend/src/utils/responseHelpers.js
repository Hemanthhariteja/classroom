export function okResponse(payload = {}) {
  return { status: 'ok', ...payload };
}

export function errorResponse(message = 'error', extra = {}) {
  return { status: 'error', message, ...extra };
}

export function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}