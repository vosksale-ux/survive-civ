import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1350
BASE = os.path.dirname(os.path.abspath(__file__))

BG_TOP = (18, 32, 18)
BG_BOT = (40, 30, 20)
SURVIVAL_ORANGE = (230, 120, 20)
FOREST_GREEN = (60, 180, 75)
DARK_GREEN = (30, 100, 40)
CAMO_BROWN = (120, 90, 50)
WHITE = (255, 255, 255)
CREAM = (240, 235, 220)
GRAY = (150, 145, 130)
DIM_WHITE = (190, 185, 170)
ACCENT_BG = (35, 50, 30)
DANGER_RED = (200, 50, 40)
WATER_BLUE = (40, 140, 200)

_font_cache = {}
_gradient_cache = None

FONT_DIRS = [
    os.path.join(BASE, "fonts"),
    "C:/Windows/Fonts/montserrat",
    "C:/Windows/Fonts",
]

_FONT_NAMES_BOLD = [
    "Montserrat-ExtraBold.ttf",
    "Montserrat-Bold.ttf",
    "segoeuib.ttf",
    "arialbd.ttf",
]

_FONT_NAMES_REG = [
    "Montserrat-Regular.ttf",
    "Montserrat-Medium.ttf",
    "segoeui.ttf",
    "arial.ttf",
]


def _resolve_font_path(name):
    for d in FONT_DIRS:
        p = os.path.join(d, name)
        if os.path.exists(p):
            return p
    return None


def find_font(size, bold=False):
    key = (size, bold)
    if key in _font_cache:
        return _font_cache[key]
    names = _FONT_NAMES_BOLD if bold else _FONT_NAMES_REG
    for name in names:
        path = _resolve_font_path(name)
        if path:
            try:
                font = ImageFont.truetype(path, size)
                _font_cache[key] = font
                return font
            except Exception:
                continue
    font = ImageFont.load_default()
    _font_cache[key] = font
    return font


def _build_gradient():
    img = Image.new("RGB", (W, H))
    draw = ImageDraw.Draw(img)
    for y in range(H):
        r = int(BG_TOP[0] + (BG_BOT[0] - BG_TOP[0]) * y / H)
        g = int(BG_TOP[1] + (BG_BOT[1] - BG_TOP[1]) * y / H)
        b = int(BG_TOP[2] + (BG_BOT[2] - BG_TOP[2]) * y / H)
        draw.line([(0, y), (W, y)], fill=(r, g, b))
    return img


def gradient_bg():
    global _gradient_cache
    if _gradient_cache is None:
        _gradient_cache = _build_gradient()
    img = _gradient_cache.copy()
    return img, ImageDraw.Draw(img)


def glow_line(draw, y, color, thickness=2):
    for i in range(1, 8):
        f = max(0, 255 - i * 40)
        faded = tuple(min(255, int(v * f / 255)) for v in color)
        draw.line([(60, y - i), (W - 60, y - i)], fill=faded, width=thickness)
        draw.line([(60, y + i), (W - 60, y + i)], fill=faded, width=thickness)
    draw.line([(60, y), (W - 60, y)], fill=color, width=thickness)


def watermark(draw, account="@survival_pro"):
    f = find_font(16)
    bbox = draw.textbbox((0, 0), account, font=f)
    tw = bbox[2] - bbox[0]
    draw.text((W - tw - 30, H - 45), account, fill=(60, 60, 50), font=f)


def centered(draw, text, y, font, color):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, y), text, fill=color, font=font)


def wrapped(draw, text, x, y, max_w, font, color, lh=None):
    if lh is None:
        bbox = draw.textbbox((0, 0), "Ay", font=font)
        lh = bbox[3] - bbox[1] + 10
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = cur + (" " if cur else "") + w
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] > max_w and cur:
            lines.append(cur)
            cur = w
        else:
            cur = test
    if cur:
        lines.append(cur)
    for i, line in enumerate(lines):
        draw.text((x, y + i * lh), line, fill=color, font=font)
    return y + len(lines) * lh


def pill(draw, text, x, y, font, bg_color, text_color, pad_x=20, pad_y=10, radius=14):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x1, y1 = x - pad_x, y - pad_y
    x2, y2 = x + tw + pad_x, y + th + pad_y
    draw.rounded_rectangle([x1, y1, x2, y2], radius=radius, fill=bg_color)
    draw.text((x, y), text, fill=text_color, font=font)
    return x2


def make_cover(title_lines, subtitle, pills=None):
    img, draw = gradient_bg()
    glow_line(draw, 80, SURVIVAL_ORANGE)
    glow_line(draw, H - 80, SURVIVAL_ORANGE)

    y = 200
    for text, color in title_lines:
        centered(draw, text, y, find_font(56, bold=True), color)
        y += 80

    if subtitle:
        centered(draw, subtitle, y + 30, find_font(26), FOREST_GREEN)

    if pills:
        total_w = 0
        pill_fonts = []
        for p_text in pills:
            f = find_font(24, bold=True)
            bbox = f.getbbox(p_text)
            pw = bbox[2] - bbox[0] + 50
            pill_fonts.append((p_text, f, pw))
            total_w += pw + 20
        sx = (W - total_w) // 2
        py = y + 110
        for i, (p_text, f, pw) in enumerate(pill_fonts):
            pc = FOREST_GREEN if i < len(pills) - 1 else SURVIVAL_ORANGE
            pill(draw, p_text, sx + 25, py, f, ACCENT_BG, pc)
            sx += pw + 20

    centered(draw, "ЛИСТАЙ  >>>", H - 200, find_font(36, bold=True), WHITE)
    watermark(draw)
    return img


def make_info_slide(num, name, desc, features, price="", url=""):
    img, draw = gradient_bg()
    glow_line(draw, 90, SURVIVAL_ORANGE)
    glow_line(draw, H - 90, SURVIVAL_ORANGE)

    centered(draw, num, 130, find_font(80, bold=True), SURVIVAL_ORANGE)
    centered(draw, name, 250, find_font(48, bold=True), WHITE)
    glow_line(draw, 330, SURVIVAL_ORANGE, 1)

    if desc:
        wrapped(draw, desc, 70, 370, W - 140, find_font(26), DIM_WHITE)

    pill(draw, "ВАЖНО ЗНАТЬ", 70, 460, find_font(24, bold=True), SURVIVAL_ORANGE, WHITE)

    y = 520
    f_feat = find_font(28)
    f_fb = find_font(28, bold=True)
    for feat in features:
        draw.rounded_rectangle([80, y - 6, W - 80, y + 40], radius=10, fill=ACCENT_BG)
        draw.text((100, y), ">", fill=FOREST_GREEN, font=f_fb)
        draw.text((140, y), feat, fill=CREAM, font=f_feat)
        y += 56

    if price:
        draw.text((70, y + 25), "ПРИОРИТЕТ:", fill=GRAY, font=find_font(26))
        pill(draw, price, 280, y + 22, find_font(30, bold=True), (50, 30, 10), SURVIVAL_ORANGE, pad_x=16, pad_y=8)
    if url:
        draw.text((70, y + 75), url, fill=GRAY, font=find_font(20))
    watermark(draw)
    return img


def make_case_slide(title, before_items, steps, after_items, savings):
    img, draw = gradient_bg()
    glow_line(draw, 90, SURVIVAL_ORANGE)
    glow_line(draw, H - 90, SURVIVAL_ORANGE)

    centered(draw, "КЕЙС", 110, find_font(30, bold=True), FOREST_GREEN)
    centered(draw, title, 170, find_font(42, bold=True), WHITE)
    glow_line(draw, 250, SURVIVAL_ORANGE, 1)

    y = 280
    pill(draw, "БЫЛО", 70, y, find_font(24, bold=True), (100, 20, 20), (255, 100, 100))
    y += 50
    for item in before_items:
        draw.text((90, y), "X", fill=DANGER_RED, font=find_font(24, bold=True))
        draw.text((130, y), item, fill=DIM_WHITE, font=find_font(24))
        y += 38

    y += 15
    pill(draw, "ДЕЙСТВИЯ", 70, y, find_font(24, bold=True), SURVIVAL_ORANGE, WHITE)
    y += 50
    for i, step in enumerate(steps):
        draw.rounded_rectangle([80, y - 4, W - 80, y + 34], radius=10, fill=ACCENT_BG)
        draw.text((100, y), f"{i+1}.", fill=FOREST_GREEN, font=find_font(24, bold=True))
        draw.text((140, y), step, fill=CREAM, font=find_font(24))
        y += 48

    y += 10
    pill(draw, "РЕЗУЛЬТАТ", 70, y, find_font(24, bold=True), DARK_GREEN, FOREST_GREEN)
    y += 50
    for item in after_items:
        draw.text((90, y), "+", fill=FOREST_GREEN, font=find_font(24, bold=True))
        draw.text((130, y), item, fill=CREAM, font=find_font(24))
        y += 38

    centered(draw, savings, y + 25, find_font(36, bold=True), FOREST_GREEN)
    watermark(draw)
    return img


def make_cta(main_text, sub_text, account="@survival_pro"):
    img, draw = gradient_bg()
    glow_line(draw, 80, SURVIVAL_ORANGE)
    glow_line(draw, H - 80, SURVIVAL_ORANGE)

    centered(draw, "🔥", 120, find_font(120, bold=True), WHITE)

    f1 = find_font(52, bold=True)
    centered(draw, main_text, 300, f1, SURVIVAL_ORANGE)
    centered(draw, "чтобы не потерять", 370, f1, SURVIVAL_ORANGE)

    f2 = find_font(42, bold=True)
    centered(draw, sub_text, 510, f2, FOREST_GREEN)

    glow_line(draw, 600, SURVIVAL_ORANGE, 1)

    centered(draw, f"Подпишись: {account}", 660, find_font(34, bold=True), WHITE)
    centered(draw, "Советы выживания каждую неделю", 715, find_font(26), DIM_WHITE)

    centered(draw, "👇", 800, find_font(60, bold=True), WHITE)
    pill(draw, "Гайд по выживанию",
         (W - find_font(28, bold=True).getbbox("Гайд по выживанию")[2]) // 2,
         880, find_font(28, bold=True), ACCENT_BG, FOREST_GREEN, pad_x=20, pad_y=12, radius=16)
    centered(draw, "ссылка в профиле", 960, find_font(24), GRAY)
    watermark(draw, account)
    return img


SLIDE_BUILDERS = {
    "cover": make_cover,
    "tool": make_info_slide,
    "case": make_case_slide,
    "cta": make_cta,
}
