import os
import sys

from carousel_utils import BASE, SLIDE_BUILDERS
from content import WEEKS


def validate_week(week_data):
    required_keys = {"week", "topic", "carousels", "reels", "stories"}
    missing = required_keys - set(week_data.keys())
    if missing:
        raise ValueError(f"Неделя {week_data.get('week', '?')}: отсутствуют ключи {missing}")

    if len(week_data["stories"]) < 6:
        raise ValueError(f"Неделя {week_data['week']}: нужно минимум 6 дней stories")

    for i, c in enumerate(week_data["carousels"]):
        if "folder" not in c:
            raise ValueError(f"Неделя {week_data['week']}, карусель {i}: нет 'folder'")
        if "slides" not in c:
            raise ValueError(f"Неделя {week_data['week']}, карусель {i}: нет 'slides'")

        for j, (stype, sdata) in enumerate(c["slides"]):
            if stype not in SLIDE_BUILDERS:
                raise ValueError(
                    f"Неделя {week_data['week']}, карусель '{c['folder']}', "
                    f"слайд {j}: неизвестный тип '{stype}'"
                )


def generate_carousel(carousel_data, week_dir):
    folder = carousel_data["folder"]
    cdir = os.path.join(week_dir, folder)
    os.makedirs(cdir, exist_ok=True)

    for i, (stype, sdata) in enumerate(carousel_data["slides"]):
        builder = SLIDE_BUILDERS.get(stype)
        if not builder:
            continue
        fname = f"{i+1:02d}_{stype}.png"
        img = builder(**sdata)
        img.save(os.path.join(cdir, fname), "PNG")

    caption_path = os.path.join(cdir, "caption.txt")
    with open(caption_path, "w", encoding="utf-8") as f:
        f.write(carousel_data["caption"])

    return cdir


def generate_schedule(week_data, week_dir):
    lines = []
    lines.append(f"=== РАСПИСАНИЕ НЕДЕЛИ {week_data['week']}: {week_data['topic'].upper()} ===\n")

    days = ["ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА", "ВОСКРЕСЕНЬЕ"]
    carousels = week_data["carousels"]
    reels = week_data["reels"]
    stories = week_data["stories"]

    lines.append(f"\n{days[0]} -> КАРУСЕЛЬ")
    lines.append(f"  Папка: {carousels[0]['folder']}")
    lines.append(f"  Слайдов: {len(carousels[0]['slides'])}")
    lines.append(f"  Caption: caption.txt внутри папки")
    lines.append(f"  Stories: {len(stories[0])} шт")
    lines.append("")

    lines.append(f"\n{days[1]} -> STORIES")
    for j, s in enumerate(stories[1]):
        lines.append(f"  {j+1}. {s}")
    lines.append("")

    lines.append(f"\n{days[2]} -> КАРУСЕЛЬ")
    lines.append(f"  Папка: {carousels[1]['folder']}")
    lines.append(f"  Слайдов: {len(carousels[1]['slides'])}")
    lines.append(f"  Caption: caption.txt внутри папки")
    lines.append("")

    lines.append(f"\n{days[3]} -> REELS")
    lines.append(f"  Тема: {reels['title']}")
    lines.append(f"  Сценарий: reels_script.txt")
    lines.append("")

    if len(carousels) > 2:
        lines.append(f"\n{days[4]} -> КАРУСЕЛЬ")
        lines.append(f"  Папка: {carousels[2]['folder']}")
        lines.append(f"  Слайдов: {len(carousels[2]['slides'])}")
        lines.append(f"  Caption: caption.txt внутри папки")
        lines.append(f"  Stories: {len(stories[4])} шт")
        lines.append("")

    lines.append(f"\n{days[5]} -> STORIES")
    for j, s in enumerate(stories[5]):
        lines.append(f"  {j+1}. {s}")
    lines.append("")

    lines.append(f"\n{days[6]} -> ВЫХОДНОЙ")

    schedule_path = os.path.join(week_dir, "RASPISANIE.txt")
    with open(schedule_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    reels_path = os.path.join(week_dir, "reels_script.txt")
    with open(reels_path, "w", encoding="utf-8") as f:
        f.write(reels["script"])


def generate_week(week_num):
    if week_num < 1 or week_num > len(WEEKS):
        print(f"Ошибка: неделя {week_num} не найдена. Доступно: 1-{len(WEEKS)}")
        sys.exit(1)

    week_data = WEEKS[week_num - 1]
    validate_week(week_data)

    week_dir = os.path.join(BASE, f"week_{week_num:02d}")
    os.makedirs(week_dir, exist_ok=True)

    print(f"\n{'='*50}")
    print(f"  НЕДЕЛЯ {week_num}: {week_data['topic']}")
    print(f"{'='*50}")

    for c in week_data["carousels"]:
        cdir = generate_carousel(c, week_dir)
        slides = [f for f in os.listdir(cdir) if f.endswith(".png")]
        print(f"  + {c['folder']} ({len(slides)} слайдов + caption.txt)")

    generate_schedule(week_data, week_dir)
    print(f"  + RASPISANIE.txt")
    print(f"  + reels_script.txt")
    print(f"  -> {week_dir}")


if __name__ == "__main__":
    try:
        week_arg = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    except ValueError:
        print("Ошибка: аргумент должен быть числом (1-4)")
        sys.exit(1)

    if week_arg > 0:
        generate_week(week_arg)
    else:
        for w in range(1, len(WEEKS) + 1):
            generate_week(w)

    print(f"\n{'='*50}")
    print(f"  ГОТОВО!")
    print(f"{'='*50}")
    print(f"\n  python generate.py       -> все {len(WEEKS)} недель")
    print(f"  python generate.py 1     -> только неделя 1")
