#!/usr/bin/env bash
set -euo pipefail

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Please install ffmpeg."
  exit 1
fi
if ! command -v ffprobe >/dev/null 2>&1; then
  echo "ffprobe not found. Please install ffprobe."
  exit 1
fi

if [ $# -lt 1 ]; then
  echo "Usage: $0 <input.wav> [bitrate_kbps]"
  echo "Example: $0 sample.wav 24"
  exit 1
fi

INPUT="$1"
BITRATE="${2:-24}"
BASENAME="$(basename "$INPUT")"
NAME="${BASENAME%.*}"
OUTPUT="${NAME}.opus"

echo "Transcoding '$INPUT' -> '$OUTPUT' at ${BITRATE}k Opus mono, VBR on, compression 10"

ffmpeg -hide_banner -loglevel error -y \
  -i "$INPUT" \
  -ac 1 -ar 48000 \
  -c:a libopus -b:a "${BITRATE}k" -vbr on -compression_level 10 \
  "$OUTPUT"

# Get size and duration
if stat -c%s "$OUTPUT" >/dev/null 2>&1; then
  BYTES=$(stat -c%s "$OUTPUT")
else
  BYTES=$(stat -f%z "$OUTPUT")
fi

DUR=$(ffprobe -v error -show_entries format=duration -of default=nk=1:nw=1 "$OUTPUT")
KBPS=$(awk "BEGIN {print ($BYTES*8/1000)/$DUR}")

MB=$(awk "BEGIN {print $BYTES/1024/1024}")
echo "Output file: $OUTPUT"
echo "Size: $(printf '%.2f' "$MB") MB"
echo "Duration: $(printf '%.2f' "$DUR") s"
echo "Estimated bitrate: $(printf '%.2f' "$KBPS") kbps"

echo "Tip: Target ~24 kbps for ~10.8 MB/hour. Adjust input with: $0 $INPUT 20"