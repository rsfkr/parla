#!/usr/bin/env python3
"""Generate Parla's app icons from code.

Run: python3 scripts/make-icons.py
Outputs PNGs into icons/. Uses Pillow and a system font, so it is a
maintainer convenience — the generated PNGs are what ships.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "icons"
OUT.mkdir(exist_ok=True)

TOP = (11, 107, 69)      # #0B6B45
BOTTOM = (29, 154, 91)   # #1D9A5B
FONT_CANDIDATES = [
    ("/System/Library/Fonts/SFNS.ttf", "Bold"),
    ("/System/Library/Fonts/Supplemental/Arial Rounded Bold.ttf", None),
    ("/System/Library/Fonts/Supplemental/Arial Bold.ttf", None),
]


def load_font(size):
    for path, variation in FONT_CANDIDATES:
        if not Path(path).exists():
            continue
        font = ImageFont.truetype(path, size)
        if variation:
            try:
                font.set_variation_by_name(variation)
            except Exception:
                pass
        return font
    raise SystemExit("No usable system font found")


def gradient(size):
    img = Image.new("RGB", (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x / size) * 0.35 + (y / size) * 0.65
            px[x, y] = tuple(round(TOP[i] + (BOTTOM[i] - TOP[i]) * t) for i in range(3))
    return img


def glow(img, size):
    """Soft light in the upper left, like the app's hero gradients."""
    layer = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(layer)
    r = int(size * 0.62)
    d.ellipse((-r // 2, -r // 2, r, r), fill=34)
    layer = layer.filter(ImageFilter.GaussianBlur(size // 10))
    white = Image.new("RGB", (size, size), (255, 255, 255))
    return Image.composite(white, img, layer.point(lambda v: int(v * 0.55)))


def glyph(size, target_h):
    """Render a white 'p' scaled to target_h, cropped to its ink box."""
    draw_size = size * 2
    font = load_font(int(draw_size * 0.9))
    layer = Image.new("RGBA", (draw_size, draw_size), (0, 0, 0, 0))
    ImageDraw.Draw(layer).text((draw_size * 0.1, draw_size * 0.1), "p", font=font, fill=(255, 255, 255, 255))

    ink = layer.getbbox()
    if not ink:
        raise SystemExit("Could not render glyph")
    layer = layer.crop(ink)

    w, h = layer.size
    scale = target_h / h
    return layer.resize((max(1, round(w * scale)), round(target_h)), Image.LANCZOS)


def make(size, path, target=0.55):
    img = glow(gradient(size), size).convert("RGBA")
    mark = glyph(size, round(size * target))
    x = (size - mark.width) // 2
    # Optical centring: the descender makes the ink box look low, so lift a touch.
    y = (size - mark.height) // 2 - round(size * 0.015)
    img.alpha_composite(mark, (x, y))
    img.convert("RGB").save(OUT / path, "PNG", optimize=True)
    print(f"  {path} ({size}×{size})")


print("Generating icons in", OUT)
make(192, "icon-192.png")
make(512, "icon-512.png")
make(180, "apple-touch-icon.png", target=0.53)
# Maskable: keep the mark inside the 80% safe zone.
make(512, "icon-maskable-512.png", target=0.42)
print("Done.")
