const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '..')));
app.use('/admin', express.static(path.join(__dirname, '..', 'admin')));

const db = new Database(path.join(__dirname, '..', 'survive.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

function initDB() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS scenarios (
            id TEXT PRIMARY KEY,
            icon TEXT,
            title TEXT NOT NULL,
            description TEXT,
            probability INTEGER DEFAULT 0,
            severity TEXT DEFAULT 'medium',
            timeframe TEXT,
            survival_rate TEXT,
            detail_title TEXT,
            detail_body TEXT,
            sort_order INTEGER DEFAULT 0,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT NOT NULL,
            cat_label TEXT,
            title TEXT NOT NULL,
            excerpt TEXT,
            body TEXT,
            read_time TEXT,
            gradient TEXT,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS guides (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            icon TEXT,
            title TEXT NOT NULL,
            tag TEXT,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS guide_steps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            guide_id INTEGER NOT NULL,
            step_order INTEGER DEFAULT 0,
            title TEXT,
            description TEXT,
            FOREIGN KEY (guide_id) REFERENCES guides(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS videos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            duration TEXT,
            tag TEXT,
            color TEXT DEFAULT '#1a1a2e',
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL DEFAULT 'book',
            title TEXT NOT NULL,
            author TEXT,
            year TEXT,
            description TEXT,
            stars INTEGER DEFAULT 4,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS timeline (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            era TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            sort_order INTEGER DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS facts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            source TEXT,
            is_active INTEGER DEFAULT 1
        );

        CREATE TABLE IF NOT EXISTS shop_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            icon TEXT,
            title TEXT NOT NULL,
            description TEXT,
            price TEXT,
            old_price TEXT,
            badge TEXT,
            is_active INTEGER DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS checklist_categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT NOT NULL,
            sort_order INTEGER DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS checklist_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category_id INTEGER NOT NULL,
            item_text TEXT NOT NULL,
            FOREIGN KEY (category_id) REFERENCES checklist_categories(id) ON DELETE CASCADE
        );
    `);
}

function seedDB() {
    const count = db.prepare('SELECT COUNT(*) as c FROM scenarios').get();
    if (count.c > 0) return;

    const insertScenario = db.prepare(`
        INSERT INTO scenarios (id, icon, title, description, probability, severity, timeframe, survival_rate, detail_title, detail_body, sort_order)
        VALUES (@id, @icon, @title, @description, @probability, @severity, @timeframe, @survival_rate, @detail_title, @detail_body, @sort_order)
    `);

    const scenarios = [
        { id: 'asteroid', icon: '☄️', title: 'Астероидная угроза', description: 'Крупный астероид 10+ км — массовое вымирание. Последний случай 66 млн лет назад.', probability: 4, severity: 'critical', timeframe: '1/100,000 лет', survival_rate: '12%', detail_title: 'Астероидная угроза — Полный анализ', detail_body: '<h3>Что произойдёт</h3><p>Энергия 100 трлн тонн TNT. Кратер 200+ км. Пыль блокирует солнце на годы.</p><h3>Стратегия</h3><ol><li>Подземные бункеры на 5+ лет</li><li>Хранилище семян</li><li>Геотермальная энергия</li><li>Подземные источники воды</li><li>КВ-радиосвязь</li></ol>', sort_order: 1 },
        { id: 'pandemic', icon: '🦠', title: 'Суперпандемия', description: 'Патоген со смертностью 30%+ и R0>5. COVID-19 показал уязвимость.', probability: 25, severity: 'high', timeframe: '1/30 лет', survival_rate: '35%', detail_title: 'Суперпандемия — Полный анализ', detail_body: '<h3>Этапы</h3><ul><li>День 1-14: Бессимптомное распространение</li><li>День 14-30: Перегрузка медсистемы</li><li>День 30-90: Крах логистики</li><li>Год 1+: Новая реальность</li></ul><h3>Чеклист</h3><ol><li>Антибиотики широкого спектра</li><li>Маски N95+, костюмы</li><li>Дезинфекторы</li><li>План самоизоляции 90+ дней</li></ol>', sort_order: 2 },
        { id: 'nuclear', icon: '☢️', title: 'Ядерная война', description: '2000+ боеголовок. Ядерная зима на 10 лет.', probability: 15, severity: 'critical', timeframe: '1/50 лет', survival_rate: '8%', detail_title: 'Ядерная война — Полный анализ', detail_body: '<h3>Правило 7:10</h3><p>Радиация падает в 10 раз каждые 7 часов. Через 2 недели — безопаснее выходить.</p><h3>Стратегия</h3><ol><li>Подвал/бомбоубежище на 14 дней</li><li>Йодид калия — защита щитовидки</li><li>Дозиметр</li><li>Не использовать кондиционеры</li></ol>', sort_order: 3 },
        { id: 'emp', icon: '⚡', title: 'Электромагнитный импульс', description: 'Солнечная супербуря или оружие ЭМИ. Вся электроника за секунды.', probability: 20, severity: 'high', timeframe: '1/50 лет', survival_rate: '60%', detail_title: 'ЭМИ — Тихий апокалипсис', detail_body: '<h3>Последствия</h3><ul><li>Электросети на месяцы/годы</li><li>Транспорт и связь мертвы</li><li>Крах банков и логистики</li><li>90% населения за год</li></ul><h3>Подготовка</h3><ol><li>Клетка Фарадея</li><li>Бумажные копии документов</li><li>Запас на 6+ месяцев</li></ol>', sort_order: 4 },
        { id: 'ai', icon: '🤖', title: 'Восстание ИИ', description: 'Сверхразумный ИИ с несовместимыми целями. Проблема согласования.', probability: 10, severity: 'critical', timeframe: '1/100 лет', survival_rate: '5%', detail_title: 'ИИ-угроза — Полный анализ', detail_body: '<h3>Сценарии</h3><ul><li>Захват инфраструктуры</li><li>Социальная инженерия через дипфейки</li><li>Нанотехнологический распад</li></ul><h3>Что делать</h3><ol><li>Аналоговые системы связи</li><li>Физические навыки</li><li>Offline-сообщества</li></ol>', sort_order: 5 },
        { id: 'climate', icon: '🌡️', title: 'Климатический коллапс', description: '+6°C к 2100. Точка невозврата пройдена.', probability: 35, severity: 'high', timeframe: 'Уже происходит', survival_rate: '40%', detail_title: 'Климатический коллапс', detail_body: '<h3>Точки невозврата</h3><ul><li>Метан из вечной мерзлоты</li><li>Остановка Гольфстрима</li><li>Закисление океана</li><li>Вымирание пчёл</li></ul><h3>Адаптация</h3><ol><li>Умеренный климат регионы</li><li>Гидропоника</li><li>Возобновляемая энергия</li></ol>', sort_order: 6 },
        { id: 'solar', icon: '🌞', title: 'Солнечная супербуря', description: 'Вспышка X50+. ЭМИ без ядерной войны.', probability: 12, severity: 'medium', timeframe: '1/100 лет', survival_rate: '55%', detail_title: 'Солнечная супербуря', detail_body: '<h3>Событие Каррингтона 1859</h3><p>Ущерб сегодня: $2-3 триллиона. Восстановление: 4-10 лет.</p><h3>Предупреждение: 17 часов</h3><p>Столько времени между обнаружением и ударом.</p>', sort_order: 7 },
        { id: 'supervolcano', icon: '🌋', title: 'Супервулкан', description: 'VEI 8+: 1000+ км³ пепла. Йеллоустон, Тоба. Вулканическая зима 6-10 лет.', probability: 1, severity: 'critical', timeframe: '1/100,000 лет', survival_rate: '12%', detail_title: 'Супервулкан — Полный анализ', detail_body: '<h3>Йеллоустон</h3><p>Калдера 72×55 км. Последнее извержение: 640,000 лет назад.</p><h3>Тоба — 74,000 лет назад</h3><p>Сократил человечество до 1,000-10,000 особей.</p><h3>Стратегия</h3><ol><li>Герметичные укрытия</li><li>Запасы на 2+ года</li><li>Очищайте крыши от пепла</li><li>Двигайтесь перпендикулярно ветру</li></ol>', sort_order: 8 },
        { id: 'biotech', icon: '🧬', title: 'Биотех-катастрофа', description: 'CRISPR-патоген: смертность 50-90%, устойчивость к антибиотикам.', probability: 12, severity: 'critical', timeframe: '1/30 лет', survival_rate: '20%', detail_title: 'Биотех-катастрофа', detail_body: '<h3>CRISPR-Cas9</h3><p>Редактирование геномов за $100. Нобелевка 2020.</p><h3>Стратегия</h3><ol><li>Изоляция 6+ месяцев</li><li>Костюмы химзащиты</li><li>УФ-стерилизация</li><li>Малонаселённая местность</li></ol>', sort_order: 9 },
        { id: 'flood', icon: '🌊', title: 'Глобальное наводнение', description: 'Таяние ледников: +70м океана. 1+ млрд беженцев.', probability: 18, severity: 'high', timeframe: '50-200 лет', survival_rate: '55%', detail_title: 'Глобальное наводнение', detail_body: '<h3>Стратегия</h3><ol><li>Минимум 50м над уровнем моря</li><li>План эвакуации</li><li>Запас пресной воды</li><li>Лодка спасает</li></ol>', sort_order: 10 },
        { id: 'gammaburst', icon: '🌀', title: 'Гамма-всплеск', description: 'Самая мощная вспышка во Вселенной. Озон -50%. Предупреждения нет.', probability: 0.1, severity: 'critical', timeframe: '1/1,000,000 лет', survival_rate: '7%', detail_title: 'Гамма-всплеск', detail_body: '<h3>WR 104</h3><p>8,000 световых лет. Ось направлена «примерно» на нас.</p><h3>Стратегия</h3><ol><li>Подземные укрытия 10+ м</li><li>Гидропоника</li><li>Хранилище семян</li></ol>', sort_order: 11 },
        { id: 'social', icon: '🧠', title: 'Социальный коллапс', description: 'Финансовый кризис → крах логистики → голод → мародёрство. Без взрыва.', probability: 30, severity: 'high', timeframe: 'Уже происходит', survival_rate: '60%', detail_title: 'Социальный коллапс', detail_body: '<h3>Каскадный сбой</h3><p>90% мировой торговли — морем. 80% чипов — Тайвань.</p><h3>Стратегия</h3><ol><li>Локальная самодостаточность</li><li>Группа 20-50 человек</li><li>Навыки > вещи</li><li>Документируйте всё</li></ol>', sort_order: 12 }
    ];

    const insertMany = db.transaction((items) => {
        for (const item of items) insertScenario.run(item);
    });
    insertMany(scenarios);

    const insertArticle = db.prepare(`INSERT INTO articles (category, cat_label, title, excerpt, body, read_time, gradient) VALUES (@category, @cat_label, @title, @excerpt, @body, @read_time, @gradient)`);
    const articles = [
        { category: 'basics', cat_label: 'Основы', title: 'Правило троек: что убьёт вас первым', excerpt: '3 минуты без воздуха, 3 часа без укрытия, 3 дня без воды, 3 недели без еды.', body: '<h3>Правило троек</h3><p>Базовая рамка приоритетов выживания. Порядок важен.</p><h3>3 минуты без воздуха</h3><p>Противогаз или респиратор — абсолютный приоритет.</p><h3>3 часа без укрытия</h3><p>Гипотермия или тепловой удар убьют быстрее голода.</p><h3>3 дня без воды</h3><p>Дегидратация — тихий убийца. К моменту жажды — уже 2% массы тела потеряно.</p><h3>3 недели без еды</h3><p>Через неделю работоспособность падает на 50%.</p>', read_time: '7 мин', gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
        { category: 'medicine', cat_label: 'Медицина', title: 'Аптечка постапокалипсиса: 30 препаратов', excerpt: 'Полный список с дозировками. Разница между жизнью и смертью.', body: '<h3>Антибиотики</h3><ul><li>Амоксициллин</li><li>Ципрофлоксацин</li><li>Доксициклин</li></ul><h3>Обезболивающие</h3><ul><li>Ибупрофен 400мг</li><li>Парацетамол 500мг</li></ul><h3>Наружные</h3><ul><li>Хлоргексидин</li><li>Бинты, жгуты</li><li>Суперклей — экстренное закрытие ран</li></ul>', read_time: '15 мин', gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)' },
        { category: 'engineering', cat_label: 'Инженерия', title: 'Как изготовить сталь из руды', excerpt: 'Без стали нет инструментов, нет машин, нет цивилизации.', body: '<h3>Шаг 1: Найдите руду</h3><p>Красновато-бурая земля (гематит) или чёрный песок (магнетит).</p><h3>Шаг 2: Печь</h3><p>Яма 50 см, глина. Дутьё мехами — 1200°C+.</p><h3>Шаг 3: Плавка</h3><p>Слои руды и угля. 6-8 часов. Результат — губчатое железо.</p><h3>Шаг 4: Кузнечная сварка</h3><p>Нагреть до белого каления, бить молотом, складывать.</p>', read_time: '12 мин', gradient: 'linear-gradient(135deg, #2d1b1b, #1a1a2e)' },
        { category: 'food', cat_label: 'Еда и вода', title: '50 съедобных растений', excerpt: 'Полевой определитель. С предупреждениями о ядовитых двойниках.', body: '<h3>Универсальные</h3><ul><li>Крапива — витамин С, белок</li><li>Одуванчик — все части съедобны</li><li>Подорожник — листья, семена</li><li>Лопух — корни как картофель</li><li>Щавель — витамины</li></ul><h3>Опасные двойники</h3><ul><li>Вех ядовитый — цианид</li><li>Белладонна — атропин</li><li>Болиголов — кониин</li></ul>', read_time: '20 мин', gradient: 'linear-gradient(135deg, #1a2e1a, #1a1a2e)' },
        { category: 'science', cat_label: 'Наука', title: 'Как изобрести электричество', excerpt: 'Генератор из медной проволоки и магнитов.', body: '<h3>Электромагнитная индукция</h3><p>Фарадей, 1831: двигать магнит рядом с проводом — появляется ток.</p><h3>Минимальный генератор</h3><ul><li>500+ витков медной проволоки</li><li>Постоянные магниты</li><li>Вращательный механизм</li></ul>', read_time: '18 мин', gradient: 'linear-gradient(135deg, #1a1a2e, #2e1a2e)' },
        { category: 'basics', cat_label: 'Основы', title: 'Психология выживания', excerpt: '80% успеха — психология. 20% — навыки.', body: '<h3>5 врагов психики</h3><ol><li>Паника — 4-7-8 дыхание</li><li>Одиночество — группа</li><li>Безнадёжность — микроцели</li><li>Скука — рутина</li><li>Вина — нормально, не парализует</li></ol>', read_time: '10 мин', gradient: 'linear-gradient(135deg, #1a2e2e, #1a1a2e)' },
        { category: 'science', cat_label: 'Наука', title: 'Как изобрести письменность с нуля', excerpt: 'От насечек на костях к алфавиту. Как сохранить знания для поколений.', body: '<h3>Эволюция</h3><ol><li>Пиктограммы (40,000+ лет)</li><li>Идеограммы (клинопись, 3400 до н.э.)</li><li>Алфавит (финикийский, 1050 до н.э.)</li></ol><h3>Практикум</h3><p>30 символов = 30 звуков. Без исключений. Проверьте: прочитает ли другой?</p>', read_time: '15 мин', gradient: 'linear-gradient(135deg, #1a1a2e, #2e2e1a)' },
        { category: 'food', cat_label: 'Еда и вода', title: 'Как сварить пиво и спасти цивилизацию', excerpt: 'Древнейший способ обеззаразить воду. Полный цикл без оборудования.', body: '<h3>Пошагово</h3><ol><li>Прорастить ячмень (5 дней)</li><li>Высушить, смолоть</li><li>Затирание 65°C, 1 час</li><li>Кипятить с хмелем 1 час</li><li>Дикие дрожжи, 1-2 недели</li></ol>', read_time: '12 мин', gradient: 'linear-gradient(135deg, #2e1a0a, #1a1a2e)' },
        { category: 'engineering', cat_label: 'Инженерия', title: 'Бумага из ничего: от коры до книг', excerpt: 'Полный цикл: волокна → лист. Плюс чернила из сажи.', body: '<h3>Процесс</h3><ol><li>Собрать волокна: трава, кора, тряпки</li><li>Вымочить в щёлоке 24 часа</li><li>Измельчить до кашицы</li><li>Зачерпнуть рамой с сеткой</li><li>Отжать, высушить</li></ol>', read_time: '10 мин', gradient: 'linear-gradient(135deg, #1a2e2e, #1a1a2e)' },
        { category: 'science', cat_label: 'Наука', title: 'Криптография для выживальщика', excerpt: 'Одноразовый блокнот — невзламываемый шифр из бумаги и карандаша.', body: '<h3>Эволюция</h3><ol><li>Шифр Цезаря — ломается за минуты</li><li>Виженер — устойчивее</li><li>Одноразовый блокнот — невзламываем математически</li></ol>', read_time: '14 мин', gradient: 'linear-gradient(135deg, #2e1a2e, #1a1a2e)' },
        { category: 'engineering', cat_label: 'Инженерия', title: 'Как построить лодку без гвоздей', excerpt: 'Плот за 2 часа, лодка за 2 недели, каяк за месяц.', body: '<h3>3 уровня</h3><ol><li>Плот (2 часа): брёвна + верёвки</li><li>Однодеревка (2 недели): выжигание + выдалбливание</li><li>Каркасная (1 месяц): жерди + береста</li></ol>', read_time: '13 мин', gradient: 'linear-gradient(135deg, #1a2e1a, #1a1a2e)' },
        { category: 'science', cat_label: 'Наука', title: 'Мыло, стекло и порох: химия', excerpt: '3 вещества, без которых цивилизация не протянет год.', body: '<h3>Мыло</h3><p>Зола + вода = щёлок. Щёлок + жир = мыло. 4-6 недель сушки.</p><h3>Стекло</h3><p>Песок + сода при 1200°C.</p><h3>Порох</h3><p>75% селитра + 15% уголь + 10% сера.</p>', read_time: '18 мин', gradient: 'linear-gradient(135deg, #2e2e1a, #1a1a2e)' },
        { category: 'medicine', cat_label: 'Медицина', title: 'Домашний пенициллин', excerpt: 'Как не умереть от царапины. Альтернативы антибиотикам.', body: '<h3>Альтернативы</h3><ul><li>Мёд — природный антисептик</li><li>Чеснок — аллицин</li><li>Хлорка — дезинфекция</li></ul><h3>Главное</h3><p>Мытьё рук спасает больше жизней, чем любой антибиотик.</p>', read_time: '16 мин', gradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)' },
        { category: 'basics', cat_label: 'Основы', title: 'Радиосвязь: когда мобильники умрут', excerpt: 'Выбор рации, настройка Baofeng, антенны из мусора.', body: '<h3>Baofeng UV-5R</h3><ol><li>Частоты LPD (433 МГц)</li><li>Мощность Low для экономии</li><li>CTCSS тон от помех</li><li>Антенна 17 см проволоки</li></ol>', read_time: '11 мин', gradient: 'linear-gradient(135deg, #1a2e2e, #16213e)' },
        { category: 'science', cat_label: 'Наука', title: 'Как изобрести календарь и часы', excerpt: 'Солнечные часы за 5 минут, водяные часы, звёздная навигация.', body: '<h3>365.25 дней</h3><p>Без високосного года календарь «плывёт» на 1 день каждые 4 года.</p><h3>Солнечные часы</h3><p>Палка в землю. Самая короткая тень = север = полдень.</p>', read_time: '9 мин', gradient: 'linear-gradient(135deg, #2e1a1a, #1a1a2e)' },
        { category: 'basics', cat_label: 'Основы', title: 'Сообщество выживших', excerpt: '90% смертей — от конфликтов. Теория игр и конституция лагеря.', body: '<h3>Структура группы (20-50)</h3><ul><li>Совет 3-5 лидеров</li><li>Распределение по навыкам</li><li>Дежурства</li><li>Писаные правила</li></ul>', read_time: '14 мин', gradient: 'linear-gradient(135deg, #1a2e2e, #2e2e1a)' }
    ];
    db.transaction((items) => { for (const a of items) insertArticle.run(a); })(articles);

    const insertVideo = db.prepare(`INSERT INTO videos (title, description, duration, tag, color) VALUES (@title, @description, @duration, @tag, @color)`);
    const videos = [
        { title: 'Как построить убежище из мусора', description: 'Материалы заброшенного города для бункера.', duration: '18:42', tag: 'УКРЫТИЕ', color: '#1a3a1a' },
        { title: 'Огонь без инструментов: 3 метода', description: 'Природные материалы и руки.', duration: '12:15', tag: 'ОГОНЬ', color: '#3a1a1a' },
        { title: 'Первая помощь без больницы', description: 'Шок, переломы, кровотечения, ожоги.', duration: '24:30', tag: 'МЕДИЦИНА', color: '#1a1a3a' },
        { title: 'Охота и ловушки для начинающих', description: 'Ловушки из паракорда, следы.', duration: '15:48', tag: 'ЕДА', color: '#2a3a1a' },
        { title: 'Генератор из велосипеда', description: '100W электричества из старого велосипеда.', duration: '22:10', tag: 'ЭНЕРГИЯ', color: '#1a2a3a' },
        { title: 'Криптография за 15 минут', description: 'Шифры для бумажной связи.', duration: '16:55', tag: 'СВЯЗЬ', color: '#2a1a3a' },
        { title: 'Печь для обжига из глины', description: 'Полный цикл: от ямы до керамики.', duration: '20:00', tag: 'ТЕХНОЛОГИИ', color: '#1a3a2a' },
        { title: 'Укрытие в -20°C за 2 часа', description: 'Зимний шалаш с отражающей стеной.', duration: '22:00', tag: 'УКРЫТИЕ', color: '#2a3a1a' },
        { title: 'Электричество из мусора', description: 'Генератор за 500 рублей.', duration: '18:00', tag: 'ЭНЕРГИЯ', color: '#1a2a3a' },
        { title: '10 съедобных растений в лесу', description: 'Ботаник + 3 ядовитых двойника.', duration: '28:00', tag: 'ЕДА', color: '#2a3a2a' },
        { title: 'Варим пиво без оборудования', description: 'Полный цикл от зерна до бокала.', duration: '22:00', tag: 'ЕДА', color: '#3a2a1a' },
        { title: '72 часа в лесу: челлендж', description: 'Нож + фляга. Честный дневник.', duration: '35:00', tag: 'ЧЕЛЛЕНДЖ', color: '#2a1a1a' },
        { title: 'Мыло из золы и сала', description: 'Полная инструкция + почему это важно.', duration: '18:00', tag: 'ХИМИЯ', color: '#1a1a2a' },
        { title: 'Настройка Baofeng за 10 минут', description: 'Частоты, антенны, тест связи 5 км.', duration: '16:00', tag: 'СВЯЗЬ', color: '#2a2a1a' },
        { title: 'От камня до интернета за 20 минут', description: 'Таймлайн восстановления цивилизации.', duration: '20:00', tag: 'НАУКА', color: '#1a2a2a' }
    ];
    db.transaction((items) => { for (const v of items) insertVideo.run(v); })(videos);

    const insertBook = db.prepare(`INSERT INTO books (type, title, author, year, description, stars) VALUES (@type, @title, @author, @year, @description, @stars)`);
    const books = [
        { type: 'book', title: 'Как изобрести всё', author: 'Райан Норт', year: '2018', description: 'Quick-start guide по перезапуску цивилизации.', stars: 5 },
        { type: 'book', title: 'The Knowledge: Знание', author: 'Льюис Дартнелл', year: '2014', description: 'Практическое руководство по восстановлению цивилизации.', stars: 5 },
        { type: 'book', title: 'SAS Survival Handbook', author: 'Джон Вайзман', year: '1986', description: 'Библия выживания от инструктора спецназа SAS. 1+ млн копий.', stars: 4 },
        { type: 'book', title: 'Дорога', author: 'Кормак Маккарти', year: '2006', description: 'Пулитцеровская премия 2007. Страшнейший постапокалиптический роман.', stars: 5 },
        { type: 'book', title: 'Оружие, микробы и сталь', author: 'Джаред Даймонд', year: '1997', description: 'Пулитцеровская премия. Почему одни цивилизации завоевали других.', stars: 5 },
        { type: 'book', title: 'World Without Us', author: 'Алан Вайсман', year: '2007', description: 'Что будет с Землёй если все люди исчезнут завтра.', stars: 4 },
        { type: 'film', title: 'Безумный Макс: Дорога ярости', author: 'Джордж Миллер', year: '2015', description: '6 Оскаров. Вода = валюта, бензин = религия.', stars: 5 },
        { type: 'film', title: 'Книга Эли', author: 'Братья Хьюз', year: '2010', description: 'Дензел Вашингтон. Знания = власть после катастрофы.', stars: 5 },
        { type: 'film', title: 'Выживший', author: 'Алехандро Иньярриту', year: '2015', description: 'Оскар ДиКаприо. 320 км ползком после медведя.', stars: 5 },
        { type: 'film', title: 'Дорога', author: 'Джон Хиллкоут', year: '2009', description: 'Психология выживания: не «как», а «зачем» жить.', stars: 4 },
        { type: 'game', title: 'Fallout (серия)', author: 'Bethesda', year: '1997+', description: 'Визуальная культура постапокалипсиса №1.', stars: 5 },
        { type: 'game', title: 'The Long Dark', author: 'Hinterland Studio', year: '2017', description: 'Реалистичная survival-игра. ЭМИ + канадская тайга.', stars: 5 },
        { type: 'game', title: 'This War of Mine', author: '11 bit studios', year: '2014', description: 'Моральные дилеммы выживания без правильных ответов.', stars: 4 },
        { type: 'game', title: 'Minecraft (Hardcore)', author: 'Mojang', year: '2011', description: '300+ млн копий. Одна жизнь. От дерева до портала.', stars: 4 }
    ];
    db.transaction((items) => { for (const b of items) insertBook.run(b); })(books);

    const insertTimeline = db.prepare(`INSERT INTO timeline (era, title, description, sort_order) VALUES (@era, @title, @description, @sort_order)`);
    const timeline = [
        { era: 'ДЕНЬ 0', title: 'Катастрофа', description: 'Момент события. Не паниковать. Действовать по плану.', sort_order: 1 },
        { era: 'ДЕНЬ 1-7', title: 'Выживание', description: 'Вода, укрытие, безопасность. Поиск выживших.', sort_order: 2 },
        { era: 'МЕСЯЦ 1', title: 'Организация', description: 'Группа, роли, база, разведка.', sort_order: 3 },
        { era: 'МЕСЯЦ 3', title: 'Сельское хозяйство', description: 'Огород, животноводство. Начало цивилизации.', sort_order: 4 },
        { era: 'ГОД 1', title: 'Ремесло и инструменты', description: 'Инструменты из подручных. Плавка металла.', sort_order: 5 },
        { era: 'ГОД 5', title: 'Производство', description: 'Ткачество, гончарство, металлургия. Мыло, стекло, пиво.', sort_order: 6 },
        { era: 'ГОД 20', title: 'Наука', description: 'Школы, письменность, печатный станок.', sort_order: 7 },
        { era: 'ГОД 50', title: 'Промышленность', description: 'Паровая машина. Электричество. Телеграф.', sort_order: 8 },
        { era: 'ГОД 100', title: 'Информационная эра', description: 'Компьютеры. Интернет. Космос. Цивилизация 2.0.', sort_order: 9 }
    ];
    db.transaction((items) => { for (const t of items) insertTimeline.run(t); })(timeline);

    const insertFact = db.prepare(`INSERT INTO facts (text, source) VALUES (@text, @source)`);
    const facts = [
        { text: 'Из всех цивилизаций ни одна не сохранилась в первоначальном виде. Средняя продолжительность — 336 лет.', source: 'Luke Kemp, Cambridge' },
        { text: 'Часы Судного дня 2025: 89 секунд до полуночи. Ближе всего к концу за всю историю.', source: 'Bulletin of the Atomic Scientists' },
        { text: 'Хранилище Судного дня на Шпицбергене: 1.1 млн образцов семян при -18°C.', source: 'Crop Trust' },
        { text: '74,000 лет назад Тоба сократил человечество до 1,000-10,000 особей.', source: 'Journal of Human Evolution' },
        { text: '75% продовольственных культур зависят от опыления пчёлами.', source: 'FAO' },
        { text: '99% всех видов, живших на Земле, вымерли. Мы в 6-м массовом вымирании.', source: 'Elizabeth Kolbert' },
        { text: 'Флеминг открыл пенициллин случайно в 1928. Массовое производство — с плесени на дыне.', source: 'ACS' },
        { text: 'Человек теряет 2.5 литра воды в день. Жажда = уже потеряно 1-2% массы тела.', source: 'Institute of Medicine' },
        { text: 'Бумагу независимо изобрели лишь дважды: Китай (105 г.) и майя (V в.).', source: 'Cambridge University Press' },
        { text: 'Ангус Барбьери постился 382 дня. Похудел со 207 до 82 кг.', source: 'Postgraduate Medical Journal' }
    ];
    db.transaction((items) => { for (const f of items) insertFact.run(f); })(facts);

    const insertGuide = db.prepare(`INSERT INTO guides (icon, title, tag) VALUES (@icon, @title, @tag)`);
    const insertStep = db.prepare(`INSERT INTO guide_steps (guide_id, step_order, title, description) VALUES (@guide_id, @step_order, @title, @description)`);

    const guides = [
        { icon: '🔥', title: 'Как добыть огонь 7 способами', tag: 'ОСНОВЫ • 10 МИН', steps: [
            { step_order: 1, title: 'Трение: лук и сверло', description: 'Доска из мягкого дерева, сверло из твёрдого, лук из ветки и шнурка.' },
            { step_order: 2, title: 'Кремень и сталь', description: 'Искры на трут (сухой мох, береста, вата).' },
            { step_order: 3, title: 'Линза', description: 'Очки, лупа, ледяная линза. До 500°C в фокусе.' },
            { step_order: 4, title: 'Батарейка + стальная вата', description: 'Короткое замыкание = воспламенение.' },
            { step_order: 5, title: 'Марганцовка + глицерин', description: 'Через 10-15 секунд вспышка. Работает в холод.' }
        ]},
        { icon: '💧', title: 'Очистка воды без фильтров', tag: 'ВОДА • 8 МИН', steps: [
            { step_order: 1, title: 'Кипячение', description: '1 минута (3 на высоте 2000м+). 100% надёжность.' },
            { step_order: 2, title: 'SODIS', description: 'PET-бутылка, 6 часов под солнцем. UV убивает 99.9%.' },
            { step_order: 3, title: 'Хлорирование', description: '2 капли отбеливателя на литр, 30 минут.' },
            { step_order: 4, title: 'Самодельный фильтр', description: 'Гравий → песок → уголь → песок.' },
            { step_order: 5, title: 'Дистилляция', description: 'Кипятить, пар собирать через трубку. 100% чистая вода.' }
        ]},
        { icon: '🏠', title: 'Укрытие за 2 часа', tag: 'УКРЫТИЕ • 12 МИН', steps: [
            { step_order: 1, title: 'Локация', description: 'Высокое место, рядом вода, нет сухих деревьев.' },
            { step_order: 2, title: 'Каркас', description: 'Две стойки, перекладина, жерди под 45°.' },
            { step_order: 3, title: 'Изоляция', description: 'Ветки + листья/мох 30+ см.' },
            { step_order: 4, title: 'Кровать', description: 'Настил из веток. НЕ спать на земле.' },
            { step_order: 5, title: 'Отражатель огня', description: 'Стена за костром. Эффективность ×2.' }
        ]},
        { icon: '🧭', title: 'Навигация без GPS', tag: 'НАВИГАЦИЯ • 6 МИН', steps: [
            { step_order: 1, title: 'Солнце', description: 'Утро — запад за спиной. Полдень — юг.' },
            { step_order: 2, title: 'Полярная звезда', description: 'Большая Медведица → Polaris = север.' },
            { step_order: 3, title: 'Часы + солнце', description: 'Часовая стрелка на солнце. Биссектриса = юг.' },
            { step_order: 4, title: 'Природные ориентиры', description: 'Мох = север. Муравейники = юг.' },
            { step_order: 5, title: 'Реки', description: 'Текут вниз. В горах — к цивилизации.' }
        ]}
    ];

    for (const g of guides) {
        const info = insertGuide.run({ icon: g.icon, title: g.title, tag: g.tag });
        const guideId = info.lastInsertRowid;
        for (const s of g.steps) {
            insertStep.run({ guide_id: guideId, step_order: s.step_order, title: s.title, description: s.description });
        }
    }

    const insertShop = db.prepare(`INSERT INTO shop_items (icon, title, description, price, old_price, badge) VALUES (@icon, @title, @description, @price, @old_price, @badge)`);
    const shop = [
        { icon: '🎒', title: 'Набор «Выживальщик»', description: 'Нож, огниво, компас, паракорд, свисток, аптечка.', price: '4,990 ₽', old_price: '7,490 ₽', badge: 'bestseller' },
        { icon: '🧰', title: 'Комплект «Бункер»', description: 'Фильтр, MRE 14 дней, радио, фонарь, мультитул, палатка.', price: '14,990 ₽', old_price: '19,990 ₽', badge: 'bestseller' },
        { icon: '📻', title: 'Baofeng UV-5R', description: 'Двухдиапазонная рация. 10 км. 128 каналов.', price: '2,490 ₽', old_price: null, badge: null },
        { icon: '🗡️', title: 'Нож «Тактический»', description: 'Сталь D2, клинок 145мм. Чехол в комплекте.', price: '3,990 ₽', old_price: '5,490 ₽', badge: 'new' },
        { icon: '💡', title: 'Солнечная панель 20W', description: 'Складная, USB. Зарядка телефонов, фонарей.', price: '3,490 ₽', old_price: null, badge: null },
        { icon: '💧', title: 'LifeStraw Mission', description: '12,000 литров. 99.999% бактерий.', price: '4,990 ₽', old_price: '6,490 ₽', badge: 'new' }
    ];
    db.transaction((items) => { for (const s of items) insertShop.run(s); })(shop);

    console.log('Database seeded successfully');
}

initDB();
seedDB();

// ============ API ROUTES ============

// SCENARIOS
app.get('/api/scenarios', (req, res) => {
    const rows = db.prepare('SELECT * FROM scenarios WHERE is_active = 1 ORDER BY sort_order').all();
    res.json(rows);
});
app.get('/api/scenarios/:id', (req, res) => {
    const row = db.prepare('SELECT * FROM scenarios WHERE id = ?').get(req.params.id);
    row ? res.json(row) : res.status(404).json({ error: 'Not found' });
});
app.post('/api/scenarios', (req, res) => {
    const s = req.body;
    db.prepare(`INSERT OR REPLACE INTO scenarios (id, icon, title, description, probability, severity, timeframe, survival_rate, detail_title, detail_body, sort_order)
        VALUES (@id, @icon, @title, @description, @probability, @severity, @timeframe, @survival_rate, @detail_title, @detail_body, @sort_order)`).run(s);
    res.json({ ok: true });
});
app.put('/api/scenarios/:id', (req, res) => {
    const s = { ...req.body, id: req.params.id };
    db.prepare(`UPDATE scenarios SET icon=@icon, title=@title, description=@description, probability=@probability, severity=@severity, timeframe=@timeframe, survival_rate=@survival_rate, detail_title=@detail_title, detail_body=@detail_body, sort_order=@sort_order, updated_at=CURRENT_TIMESTAMP WHERE id=@id`).run(s);
    res.json({ ok: true });
});
app.delete('/api/scenarios/:id', (req, res) => {
    db.prepare('UPDATE scenarios SET is_active = 0 WHERE id = ?').run(req.params.id);
    res.json({ ok: true });
});

// ARTICLES
app.get('/api/articles', (req, res) => {
    res.json(db.prepare('SELECT * FROM articles WHERE is_active = 1 ORDER BY id DESC').all());
});
app.get('/api/articles/:id', (req, res) => {
    const row = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
    row ? res.json(row) : res.status(404).json({ error: 'Not found' });
});
app.post('/api/articles', (req, res) => {
    const a = req.body;
    const r = db.prepare('INSERT INTO articles (category, cat_label, title, excerpt, body, read_time, gradient) VALUES (@category, @cat_label, @title, @excerpt, @body, @read_time, @gradient)').run(a);
    res.json({ ok: true, id: r.lastInsertRowid });
});
app.put('/api/articles/:id', (req, res) => {
    const a = { ...req.body, id: req.params.id };
    db.prepare('UPDATE articles SET category=@category, cat_label=@cat_label, title=@title, excerpt=@excerpt, body=@body, read_time=@read_time, gradient=@gradient, updated_at=CURRENT_TIMESTAMP WHERE id=@id').run(a);
    res.json({ ok: true });
});
app.delete('/api/articles/:id', (req, res) => {
    db.prepare('UPDATE articles SET is_active = 0 WHERE id = ?').run(req.params.id);
    res.json({ ok: true });
});

// VIDEOS
app.get('/api/videos', (req, res) => {
    res.json(db.prepare('SELECT * FROM videos WHERE is_active = 1 ORDER BY id').all());
});
app.post('/api/videos', (req, res) => {
    const v = req.body;
    const r = db.prepare('INSERT INTO videos (title, description, duration, tag, color) VALUES (@title, @description, @duration, @tag, @color)').run(v);
    res.json({ ok: true, id: r.lastInsertRowid });
});
app.put('/api/videos/:id', (req, res) => {
    const v = { ...req.body, id: req.params.id };
    db.prepare('UPDATE videos SET title=@title, description=@description, duration=@duration, tag=@tag, color=@color WHERE id=@id').run(v);
    res.json({ ok: true });
});
app.delete('/api/videos/:id', (req, res) => {
    db.prepare('UPDATE videos SET is_active = 0 WHERE id = ?').run(req.params.id);
    res.json({ ok: true });
});

// BOOKS
app.get('/api/books', (req, res) => {
    res.json(db.prepare('SELECT * FROM books WHERE is_active = 1 ORDER BY id').all());
});
app.post('/api/books', (req, res) => {
    const b = req.body;
    const r = db.prepare('INSERT INTO books (type, title, author, year, description, stars) VALUES (@type, @title, @author, @year, @description, @stars)').run(b);
    res.json({ ok: true, id: r.lastInsertRowid });
});
app.put('/api/books/:id', (req, res) => {
    const b = { ...req.body, id: req.params.id };
    db.prepare('UPDATE books SET type=@type, title=@title, author=@author, year=@year, description=@description, stars=@stars WHERE id=@id').run(b);
    res.json({ ok: true });
});
app.delete('/api/books/:id', (req, res) => {
    db.prepare('UPDATE books SET is_active = 0 WHERE id = ?').run(req.params.id);
    res.json({ ok: true });
});

// TIMELINE
app.get('/api/timeline', (req, res) => {
    res.json(db.prepare('SELECT * FROM timeline ORDER BY sort_order').all());
});

// FACTS
app.get('/api/facts', (req, res) => {
    res.json(db.prepare('SELECT * FROM facts WHERE is_active = 1 ORDER BY RANDOM() LIMIT 1').all());
});
app.get('/api/facts/all', (req, res) => {
    res.json(db.prepare('SELECT * FROM facts WHERE is_active = 1').all());
});
app.post('/api/facts', (req, res) => {
    const f = req.body;
    const r = db.prepare('INSERT INTO facts (text, source) VALUES (@text, @source)').run(f);
    res.json({ ok: true, id: r.lastInsertRowid });
});
app.delete('/api/facts/:id', (req, res) => {
    db.prepare('UPDATE facts SET is_active = 0 WHERE id = ?').run(req.params.id);
    res.json({ ok: true });
});

// GUIDES
app.get('/api/guides', (req, res) => {
    const guides = db.prepare('SELECT * FROM guides WHERE is_active = 1 ORDER BY id').all();
    const steps = db.prepare('SELECT * FROM guide_steps ORDER BY guide_id, step_order').all();
    const result = guides.map(g => ({
        ...g,
        steps: steps.filter(s => s.guide_id === g.id)
    }));
    res.json(result);
});

// SHOP
app.get('/api/shop', (req, res) => {
    res.json(db.prepare('SELECT * FROM shop_items WHERE is_active = 1 ORDER BY id').all());
});

// STATS
app.get('/api/stats', (req, res) => {
    const stats = {
        scenarios: db.prepare('SELECT COUNT(*) as c FROM scenarios WHERE is_active = 1').get().c,
        articles: db.prepare('SELECT COUNT(*) as c FROM articles WHERE is_active = 1').get().c,
        videos: db.prepare('SELECT COUNT(*) as c FROM videos WHERE is_active = 1').get().c,
        books: db.prepare('SELECT COUNT(*) as c FROM books WHERE is_active = 1').get().c,
        facts: db.prepare('SELECT COUNT(*) as c FROM facts WHERE is_active = 1').get().c,
        guides: db.prepare('SELECT COUNT(*) as c FROM guides WHERE is_active = 1').get().c,
        shop: db.prepare('SELECT COUNT(*) as c FROM shop_items WHERE is_active = 1').get().c
    };
    res.json(stats);
});

app.listen(PORT, () => {
    console.log(`\n  SURVIVE.CIV Server running at http://localhost:${PORT}`);
    console.log(`  Admin panel: http://localhost:${PORT}/admin/\n`);
});
