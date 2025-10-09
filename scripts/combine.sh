#!/usr/bin/env bash
set -euo pipefail

# Combined launcher for backend and frontend (dev mode).
# - Starts backend: (cd backend && npm run start)
# - Starts frontend: (cd frontend && npm run dev)
# - Waits for backend health: GET /api/health
# - Opens frontend URL in default browser (if available)

BACKEND_DIR="${BACKEND_DIR:-backend}"
FRONTEND_DIR="${FRONTEND_DIR:-frontend}"
BACKEND_URL="${API_BASE_URL:-http://localhost:4000}"
HEALTH_PATH="${HEALTH_PATH:-/api/health}"
FRONTEND_URL="${FRONTEND_DEV_URL:-http://localhost:5173}"

pids=()

cleanup() {
  echo ""
  echo "Shutting down child processes..."
  for pid in "${pids[@]:-}"; do
    if kill -0 "$pid" >/dev/null 2>&1; then
      kill "$pid" || true
    fi
  done
}
trap cleanup EXIT

start_backend() {
  echo "Starting backend in $BACKEND_DIR ..."
  ( cd "$BACKEND_DIR" && npm run start ) &
  pids+=("$!")
}

start_frontend() {
  echo "Starting frontend in $FRONTEND_DIR ..."
  ( cd "$FRONTEND_DIR" && npm run dev ) &
  pids+=("$!")
}

wait_for_backend() {
  local url="${BACKEND_URL}${HEALTH_PATH}"
  echo "Waiting for backend health at: $url"
  for i in {1..60}; do
    if command -v curl >/dev/null 2>&1; then
      if curl -sf "$url" >/dev/null 2>&1; then
        echo "Backend is healthy."
        return 0
      fi
    else
      # Use wget if curl is not available
      if wget -q -O /dev/null "$url"; then
        echo "Backend is healthy."
        return 0
      fi
    fi
    sleep 1
    echo "Retry $i..."
  done
  echo "Backend health check FAILED after 60s."
  return 1
}

open_frontend() {
  local url="$FRONTEND_URL"
  echo "Opening frontend: $url"
  if command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$url" >/dev/null 2>&1 || true
  elif command -v open >/dev/null 2>&1; then
    open "$url" >/dev/null 2>&1 || true
  else
    echo "Please open $url in your browser."
  fi
}

start_backend
start_frontend
if wait_for_backend; then
  open_frontend
fi

echo "Backend and Frontend are running. Press Ctrl+C to stop."
wait