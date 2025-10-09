# Media Guide: Opus Tuning and FFmpeg

This guide focuses on low-bitrate audio and small slide images to enable reliable learning in constrained networks.

## Audio: Opus settings

- Target: ≤10–11 MB per hour for speech-only lectures.
- Bitrate: 20–24 kbps mono (recommended 24k for safer quality).
- VBR: on
- Compression level: 10
- Sample rate: 48 kHz (Opus internal), input will be resampled if needed.
- Channels: mono (`-ac 1`)

Expected size at 24 kbps:
- 24,000 bit/s = 3,000 byte/s ≈ 10.8 MB/hour.

## Slides: size and quality

- Width: 300–480 px (preserve aspect ratio)
- Format: JPEG
- Quality: 40–60
- Aim: Small but legible text and diagrams.
- Tip: If slides are from PDFs, rasterize pages at 2–3x text height then downscale to target width with a mild sharpen.

## FFmpeg commands

Transcode WAV to Opus:

```bash
ffmpeg -hide_banner -loglevel error -y \
  -i input.wav \
  -ac 1 -ar 48000 \
  -c:a libopus -b:a 24k -vbr on -compression_level 10 \
  output.opus
```

Check duration, bitrate, and stream info:

```bash
ffprobe -hide_banner -v error -show_streams -show_format output.opus
```

Batch convert multiple WAVs to Opus (bash):

```bash
for f in audio_src/*.wav; do
  base=$(basename "$f" .wav)
  ffmpeg -hide_banner -loglevel error -y \
    -i "$f" -ac 1 -ar 48000 \
    -c:a libopus -b:a 24k -vbr on -compression_level 10 \
    "audio/${base}.opus"
done
```

## Measuring package size

- On Linux/macOS:

```bash
du -sh lecturePackage/
```

- Sum audio sizes:

```bash
find lecturePackage/audio -type f -name "*.opus" -print0 | xargs -0 du -ch | tail -n1
```

- Estimate MB/hour from a single file:

```bash
bytes=$(stat -c%s "output.opus" 2>/dev/null || stat -f%z "output.opus")
dur=$(ffprobe -v error -show_entries format=duration -of default=nk=1:nw=1 "output.opus")
kbps=$(awk "BEGIN {print ($bytes*8/1000)/$dur}")
echo "Approx bitrate: $kbps kbps"
```

## Quality reduction tips

- Drop bitrate to 20 kbps if content is pure speech and intelligibility remains acceptable.
- For noisy environments, consider light denoise before encode (e.g., `-af arnndn=m=rnnoise-model.pt` if available).
- Lower slide width to 300 px and quality to 40 where legibility allows.
- Avoid stereo unless necessary; it doubles bitrate.