(function () {
    'use strict';

    var REGIONS = {
        'ЦФО': {
            name: 'Центральный ФО',
            regions: [
                { name: 'Москва', lat: 55.7558, lng: 37.6173, zoom: 10 },
                { name: 'Московская область', lat: 55.5, lng: 37.6, zoom: 9 },
                { name: 'Белгородская область', lat: 50.6, lng: 36.6, zoom: 9 },
                { name: 'Брянская область', lat: 53.25, lng: 34.37, zoom: 9 },
                { name: 'Владимирская область', lat: 56.14, lng: 40.4, zoom: 9 },
                { name: 'Воронежская область', lat: 51.67, lng: 39.17, zoom: 9 },
                { name: 'Ивановская область', lat: 57.0, lng: 40.97, zoom: 9 },
                { name: 'Калужская область', lat: 54.51, lng: 36.26, zoom: 9 },
                { name: 'Костромская область', lat: 57.77, lng: 40.93, zoom: 9 },
                { name: 'Курская область', lat: 51.74, lng: 36.19, zoom: 9 },
                { name: 'Липецкая область', lat: 52.6, lng: 39.6, zoom: 9 },
                { name: 'Орловская область', lat: 52.97, lng: 36.08, zoom: 9 },
                { name: 'Рязанская область', lat: 54.63, lng: 39.73, zoom: 9 },
                { name: 'Смоленская область', lat: 54.78, lng: 32.04, zoom: 9 },
                { name: 'Тамбовская область', lat: 52.72, lng: 41.45, zoom: 9 },
                { name: 'Тверская область', lat: 56.86, lng: 35.9, zoom: 9 },
                { name: 'Тульская область', lat: 54.17, lng: 37.6, zoom: 9 },
                { name: 'Ярославская область', lat: 57.63, lng: 39.87, zoom: 9 }
            ]
        },
        'СЗФО': {
            name: 'Северо-Западный ФО',
            regions: [
                { name: 'Санкт-Петербург', lat: 59.9343, lng: 30.3351, zoom: 10 },
                { name: 'Ленинградская область', lat: 59.8, lng: 31.0, zoom: 9 },
                { name: 'Архангельская область', lat: 64.54, lng: 40.54, zoom: 8 },
                { name: 'Вологодская область', lat: 59.22, lng: 39.88, zoom: 9 },
                { name: 'Калининградская область', lat: 54.71, lng: 20.46, zoom: 9 },
                { name: 'Карелия', lat: 62.0, lng: 33.5, zoom: 8 },
                { name: 'Коми', lat: 63.5, lng: 53.0, zoom: 7 },
                { name: 'Мурманская область', lat: 68.97, lng: 33.09, zoom: 8 },
                { name: 'Ненецкий АО', lat: 67.5, lng: 53.0, zoom: 7 },
                { name: 'Новгородская область', lat: 58.52, lng: 31.27, zoom: 9 },
                { name: 'Псковская область', lat: 57.82, lng: 28.33, zoom: 9 }
            ]
        },
        'ЮФО': {
            name: 'Южный ФО',
            regions: [
                { name: 'Ростовская область', lat: 47.23, lng: 39.7, zoom: 9 },
                { name: 'Краснодарский край', lat: 45.04, lng: 38.98, zoom: 9 },
                { name: 'Адыгея', lat: 44.61, lng: 40.1, zoom: 9 },
                { name: 'Калмыкия', lat: 46.3, lng: 44.27, zoom: 8 },
                { name: 'Астраханская область', lat: 46.35, lng: 48.04, zoom: 9 },
                { name: 'Волгоградская область', lat: 48.71, lng: 44.51, zoom: 9 },
                { name: 'Крым', lat: 44.95, lng: 34.1, zoom: 9 },
                { name: 'Севастополь', lat: 44.62, lng: 33.52, zoom: 11 }
            ]
        },
        'СКФО': {
            name: 'Северо-Кавказский ФО',
            regions: [
                { name: 'Дагестан', lat: 42.32, lng: 47.26, zoom: 9 },
                { name: 'Чечня', lat: 43.32, lng: 45.69, zoom: 10 },
                { name: 'Ингушетия', lat: 43.17, lng: 44.82, zoom: 10 },
                { name: 'Осетия-Алания', lat: 43.04, lng: 44.68, zoom: 10 },
                { name: 'Кабардино-Балкария', lat: 43.49, lng: 43.6, zoom: 10 },
                { name: 'Карачаево-Черкесия', lat: 43.74, lng: 41.73, zoom: 10 },
                { name: 'Ставропольский край', lat: 45.04, lng: 41.97, zoom: 9 }
            ]
        },
        'ПФО': {
            name: 'Приволжский ФО',
            regions: [
                { name: 'Нижегородская область', lat: 56.33, lng: 44.0, zoom: 9 },
                { name: 'Кировская область', lat: 58.6, lng: 49.66, zoom: 9 },
                { name: 'Самарская область', lat: 53.5, lng: 50.6, zoom: 9 },
                { name: 'Оренбургская область', lat: 51.77, lng: 55.1, zoom: 8 },
                { name: 'Саратовская область', lat: 51.54, lng: 46.02, zoom: 9 },
                { name: 'Ульяновская область', lat: 54.32, lng: 48.39, zoom: 9 },
                { name: 'Пензенская область', lat: 53.17, lng: 45.0, zoom: 9 },
                { name: 'Пермский край', lat: 58.0, lng: 56.25, zoom: 8 },
                { name: 'Татарстан', lat: 55.79, lng: 49.11, zoom: 9 },
                { name: 'Башкортостан', lat: 54.73, lng: 55.95, zoom: 8 },
                { name: 'Удмуртия', lat: 56.85, lng: 53.23, zoom: 9 },
                { name: 'Чувашия', lat: 55.43, lng: 47.07, zoom: 9 },
                { name: 'Мордовия', lat: 54.18, lng: 45.18, zoom: 9 },
                { name: 'Марий Эл', lat: 56.64, lng: 47.88, zoom: 9 }
            ]
        },
        'УФО': {
            name: 'Уральский ФО',
            regions: [
                { name: 'Свердловская область', lat: 57.0, lng: 60.6, zoom: 8 },
                { name: 'Челябинская область', lat: 54.78, lng: 60.05, zoom: 9 },
                { name: 'Тюменская область', lat: 57.15, lng: 65.53, zoom: 8 },
                { name: 'Курганская область', lat: 55.46, lng: 65.34, zoom: 9 },
                { name: 'ХМАО-Югра', lat: 61.0, lng: 69.0, zoom: 7 },
                { name: 'ЯНАО', lat: 67.5, lng: 72.0, zoom: 7 }
            ]
        },
        'СФО': {
            name: 'Сибирский ФО',
            regions: [
                { name: 'Новосибирская область', lat: 55.03, lng: 82.92, zoom: 9 },
                { name: 'Красноярский край', lat: 61.0, lng: 93.0, zoom: 6 },
                { name: 'Иркутская область', lat: 56.5, lng: 103.0, zoom: 7 },
                { name: 'Кемеровская область', lat: 54.67, lng: 86.18, zoom: 9 },
                { name: 'Омская область', lat: 55.0, lng: 73.37, zoom: 9 },
                { name: 'Томская область', lat: 56.48, lng: 84.95, zoom: 9 },
                { name: 'Алтайский край', lat: 52.53, lng: 83.77, zoom: 9 },
                { name: 'Алтай (Республика)', lat: 50.72, lng: 86.09, zoom: 9 },
                { name: 'Бурятия', lat: 53.35, lng: 107.6, zoom: 8 },
                { name: 'Тыва', lat: 51.6, lng: 93.0, zoom: 8 },
                { name: 'Хакасия', lat: 53.72, lng: 91.43, zoom: 9 },
                { name: 'Забайкальский край', lat: 52.05, lng: 113.5, zoom: 8 }
            ]
        },
        'ДФО': {
            name: 'Дальневосточный ФО',
            regions: [
                { name: 'Хабаровский край', lat: 50.0, lng: 136.0, zoom: 7 },
                { name: 'Приморский край', lat: 45.0, lng: 133.0, zoom: 8 },
                { name: 'Амурская область', lat: 52.0, lng: 128.0, zoom: 8 },
                { name: 'Камчатский край', lat: 57.0, lng: 159.0, zoom: 6 },
                { name: 'Магаданская область', lat: 62.0, lng: 153.0, zoom: 7 },
                { name: 'Сахалинская область', lat: 49.0, lng: 143.0, zoom: 7 },
                { name: 'Якутия', lat: 63.0, lng: 129.0, zoom: 5 },
                { name: 'Чукотский АО', lat: 66.0, lng: 170.0, zoom: 6 },
                { name: 'Еврейская АО', lat: 48.6, lng: 132.0, zoom: 9 }
            ]
        }
    };

    var QUICK_NAV = [
        { name: 'Москва', lat: 55.7558, lng: 37.6173, zoom: 11, icon: '\u{1F3DB}' },
        { name: 'С-Петербург', lat: 59.9343, lng: 30.3351, zoom: 11, icon: '\u{1F309}' },
        { name: 'Новосибирск', lat: 55.0084, lng: 82.9357, zoom: 11, icon: '\u{1F3D7}' },
        { name: 'Екатеринбург', lat: 56.8389, lng: 60.6057, zoom: 11, icon: '\u{26CF}' },
        { name: 'Казань', lat: 55.7887, lng: 49.1221, zoom: 11, icon: '\u{1F54C}' },
        { name: 'Н.Новгород', lat: 56.2965, lng: 43.9361, zoom: 11, icon: '\u{1F3F0}' },
        { name: 'Челябинск', lat: 55.1644, lng: 61.4368, zoom: 11, icon: '\u{2692}' },
        { name: 'Самара', lat: 53.1959, lng: 50.1002, zoom: 11, icon: '\u{1F680}' },
        { name: 'Омск', lat: 54.9885, lng: 73.3242, zoom: 11, icon: '\u{1F3ED}' },
        { name: 'Ростов-на-Дону', lat: 47.2357, lng: 39.7015, zoom: 11, icon: '\u{2693}' },
        { name: 'Красноярск', lat: 56.0153, lng: 92.8932, zoom: 11, icon: '\u{1F332}' },
        { name: 'Владивосток', lat: 43.1155, lng: 131.8855, zoom: 11, icon: '\u{1F6A2}' },
        { name: 'Мурманск', lat: 68.9585, lng: 33.0827, zoom: 11, icon: '\u{1F9CA}' },
        { name: 'Калининград', lat: 54.7104, lng: 20.4522, zoom: 11, icon: '\u{2693}' },
        { name: 'Камчатка', lat: 53.0162, lng: 158.6509, zoom: 11, icon: '\u{1F30B}' }
    ];

    var LAYERS_CONFIG = [
        { id: 'osm', name: 'OSM', icon: '\u{1F5FA}', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 OpenStreetMap', maxNativeZoom: 19, maxZoom: 21 } },
        { id: 'google_map', name: 'Google', icon: '\u{1F5FA}', url: 'https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', opts: { attribution: '\u00a9 Google', maxNativeZoom: 21, maxZoom: 21, subdomains: '0123' } },
        { id: 'google_ter', name: 'Рельеф', icon: '\u{26F0}', url: 'https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', opts: { attribution: '\u00a9 Google', maxNativeZoom: 21, maxZoom: 21, subdomains: '0123' } },
        { id: 'google_hyb', name: 'Гибрид', icon: '\u{1F5FA}', url: 'https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', opts: { attribution: '\u00a9 Google', maxNativeZoom: 21, maxZoom: 21, subdomains: '0123' } },
        { id: 'google_sat', name: 'Спутник', icon: '\u{1F6F0}', url: 'https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', opts: { attribution: '\u00a9 Google', maxNativeZoom: 21, maxZoom: 21, subdomains: '0123' } },
        { id: 'yandex', name: 'Яндекс', icon: '\u{1F4F1}', url: 'https://core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}&scale=1&lang=ru_RU', opts: { attribution: '\u00a9 Яндекс', maxNativeZoom: 18, maxZoom: 21, subdomains: '' } },
        { id: 'esri', name: 'Esri', icon: '\u{1F6F0}', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', opts: { attribution: '\u00a9 Esri', maxNativeZoom: 18, maxZoom: 21 } },
        { id: 'cyclosm', name: 'Цикл', icon: '\u{1F6B2}', url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 CyclOSM', maxNativeZoom: 19, maxZoom: 21 } }
    ];

    var OVERLAYS_CONFIG = [
        { id: 'carto_labels', name: 'Подписи (тёмные)', url: 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', opts: { maxNativeZoom: 20, maxZoom: 21, opacity: 0.8 } }
    ];

    var OVERLAYS_CONFIG = [
        { id: 'topo_labels', name: 'Топо подписи', url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png', opts: { maxNativeZoom: 17, maxZoom: 21, opacity: 0.7 } },
        { id: 'carto_labels', name: 'Подписи (тёмные)', url: 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', opts: { maxNativeZoom: 19, maxZoom: 21, opacity: 0.8 } },
        { id: 'carto_nolabels', name: 'Без подписей', url: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', opts: { maxNativeZoom: 19, maxZoom: 21 } }
    ];

    var map = L.map('map', {
        center: [55.7558, 37.6173],
        zoom: 6,
        maxZoom: 21,
        zoomControl: true,
        attributionControl: false,
        doubleClickZoom: false
    });

    var tileLayers = {};
    var currentLayer = null;
    var overlays = {};
    var labelsLayer = null;
    var routePoints = [];
    var routeLine = null;
    var routeMarkers = [];
    var markers = [];
    var rulerMode = false;
    var rulerPoints = [];
    var rulerLine = null;
    var rulerMarkers = [];
    var searchTimeout = null;
    var dlMode = 'view';
    var dlAreaRect = null;
    var dlSelecting = false;
    var dlTempRect = null;

    LAYERS_CONFIG.forEach(function (cfg) {
        tileLayers[cfg.id] = L.tileLayer(cfg.url, cfg.opts);
    });

    function setLayer(id) {
        if (currentLayer) map.removeLayer(currentLayer);
        currentLayer = tileLayers[id];
        map.addLayer(currentLayer);
        document.querySelectorAll('.layer-btn').forEach(function (b) {
            b.classList.toggle('active', b.dataset.layer === id);
        });
        if (labelsLayer && map.hasLayer(labelsLayer)) {
            map.removeLayer(labelsLayer);
            labelsLayer = null;
        }
        if (id === 'yandex') {
            labelsLayer = L.tileLayer('https://core-renderer-tiles.maps.yandex.net/tiles?l=skl&x={x}&y={y}&z={z}&scale=1&lang=ru_RU', { maxNativeZoom: 18, maxZoom: 21, opacity: 0.9, subdomains: '' });
            map.addLayer(labelsLayer);
        } else if (id === 'google_sat' || id === 'esri') {
            labelsLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png', { maxNativeZoom: 19, maxZoom: 21, opacity: 0.85 });
            map.addLayer(labelsLayer);
        }
    }

    setLayer('osm');

    var layerGrid = document.getElementById('layer-grid');
    LAYERS_CONFIG.forEach(function (cfg) {
        var btn = document.createElement('button');
        btn.className = 'layer-btn' + (cfg.id === 'osm' ? ' active' : '');
        btn.dataset.layer = cfg.id;
        btn.innerHTML = '<span class="layer-icon">' + cfg.icon + '</span>' + cfg.name;
        btn.addEventListener('click', function () { setLayer(cfg.id); });
        layerGrid.appendChild(btn);
    });

    var overlayList = document.getElementById('overlay-list');
    OVERLAYS_CONFIG.forEach(function (cfg) {
        var div = document.createElement('div');
        div.className = 'overlay-item';
        var id = cfg.id;
        div.innerHTML = '<label><input type="checkbox" data-overlay="' + id + '"> ' + cfg.name + '</label>';
        div.querySelector('input').addEventListener('change', function () {
            if (this.checked) {
                overlays[id] = L.tileLayer(cfg.url, cfg.opts);
                overlays[id].addTo(map);
            } else if (overlays[id]) {
                map.removeLayer(overlays[id]);
                delete overlays[id];
            }
        });
        overlayList.appendChild(div);
    });

    function initPanels() {
        document.querySelectorAll('.panel-toggle').forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                var panelName = this.dataset.panel;
                var content = document.getElementById('panel-' + panelName);
                var isOpen = content.classList.contains('open');
                content.classList.toggle('open', !isOpen);
                this.classList.toggle('open', !isOpen);
            });
        });
        var firstPanel = document.querySelector('.panel-toggle');
        if (firstPanel) {
            firstPanel.classList.add('open');
            var firstContent = document.getElementById('panel-' + firstPanel.dataset.panel);
            if (firstContent) firstContent.classList.add('open');
        }
    }

    function initSidebar() {
        var sidebar = document.getElementById('sidebar');
        var closeBtn = document.getElementById('sidebar-close');
        var openBtn = document.getElementById('sidebar-open');

        closeBtn.addEventListener('click', function () {
            sidebar.classList.add('collapsed');
            openBtn.style.display = 'flex';
        });
        openBtn.addEventListener('click', function () {
            sidebar.classList.remove('collapsed');
            openBtn.style.display = 'none';
        });
    }

    function initSearch() {
        var input = document.getElementById('search-input');
        var results = document.getElementById('search-results');
        var clearBtn = document.getElementById('search-clear');

        clearBtn.addEventListener('click', function () {
            input.value = '';
            results.innerHTML = '';
            input.focus();
        });

        input.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            var q = this.value.trim();
            if (!q) { results.innerHTML = ''; return; }

            var coordMatch = q.match(/^(-?\d+\.?\d*)\s*[,\s]\s*(-?\d+\.?\d*)$/);
            if (coordMatch) {
                var lat = parseFloat(coordMatch[1]);
                var lng = parseFloat(coordMatch[2]);
                if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180) {
                    map.setView([lat, lng], 14);
                    results.innerHTML = '<div class="search-item"><div class="search-item-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z"/></svg></div><div class="search-item-body"><div class="search-item-name">' + lat.toFixed(4) + '\u00b0, ' + lng.toFixed(4) + '\u00b0</div><div class="search-item-detail">Координаты</div></div></div>';
                    return;
                }
            }

            results.innerHTML = '<div class="search-loading"></div>';

            searchTimeout = setTimeout(function () {
                fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(q) + '&limit=8&accept-language=ru')
                    .then(function (r) { return r.json(); })
                    .then(function (data) {
                        if (!data.length) {
                            results.innerHTML = '<div class="search-empty">Ничего не найдено</div>';
                            return;
                        }
                        results.innerHTML = data.map(function (item) {
                            var typeMap = { city: '\u{1F3D9}', town: '\u{1F3D9}', village: '\u{1F3D8}', state: '\u{1F3DB}', country: '\u{1F30D}', peak: '\u{26F0}', water: '\u{1F30A}', forest: '\u{1F332}' };
                            var iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
                            var name = escHtml(item.display_name.split(',')[0]);
                            var detail = escHtml(item.display_name.split(',').slice(1, 3).join(',').trim());
                            return '<div class="search-item" data-lat="' + item.lat + '" data-lng="' + item.lon + '"><div class="search-item-icon">' + iconSvg + '</div><div class="search-item-body"><div class="search-item-name">' + name + '</div><div class="search-item-detail">' + detail + '</div></div></div>';
                        }).join('');
                        results.querySelectorAll('.search-item').forEach(function (el) {
                            el.addEventListener('click', function () {
                                var lat = parseFloat(this.dataset.lat);
                                var lng = parseFloat(this.dataset.lng);
                                map.setView([lat, lng], 14);
                                results.innerHTML = '';
                                input.value = '';
                            });
                        });
                    })
                    .catch(function () {
                        results.innerHTML = '<div class="search-empty">Ошибка поиска</div>';
                    });
            }, 400);
        });
    }

    function createRouteMarkerIcon(index) {
        return L.divIcon({
            className: '',
            html: '<div style="background:var(--accent);border:2px solid #fff;border-radius:50%;width:14px;height:14px;box-shadow:0 0 8px rgba(0,200,120,0.4);display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:#0c1117;font-family:Inter,sans-serif;">' + (index + 1) + '</div>',
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
    }

    function updateRouteUI() {
        var totalDist = 0;
        for (var i = 1; i < routePoints.length; i++) {
            totalDist += routePoints[i - 1].distanceTo(routePoints[i]);
        }
        document.getElementById('route-points').textContent = routePoints.length;
        document.getElementById('route-dist').textContent = totalDist > 1000 ? (totalDist / 1000).toFixed(1) + ' км' : Math.round(totalDist) + ' м';

        var badge = document.getElementById('route-badge');
        if (routePoints.length > 0) {
            badge.style.display = '';
            badge.textContent = routePoints.length;
        } else {
            badge.style.display = 'none';
        }
    }

    function addRoutePoint(latlng) {
        routePoints.push(latlng);
        var idx = routePoints.length - 1;
        var marker = L.marker(latlng, { icon: createRouteMarkerIcon(idx) }).addTo(map);
        routeMarkers.push(marker);

        if (routeLine) map.removeLayer(routeLine);
        if (routePoints.length > 1) {
            routeLine = L.polyline(routePoints, {
                color: '#00c878',
                weight: 3,
                opacity: 0.8,
                dashArray: null,
                lineCap: 'round',
                lineJoin: 'round'
            }).addTo(map);
        }
        updateRouteUI();
    }

    function undoRoutePoint() {
        if (!routePoints.length) return;
        routePoints.pop();
        var m = routeMarkers.pop();
        if (m) map.removeLayer(m);
        if (routeLine) map.removeLayer(routeLine);
        routeLine = null;
        if (routePoints.length > 1) {
            routeLine = L.polyline(routePoints, {
                color: '#00c878',
                weight: 3,
                opacity: 0.8
            }).addTo(map);
        }
        routeMarkers.forEach(function (m, i) {
            m.setIcon(createRouteMarkerIcon(i));
        });
        updateRouteUI();
    }

    function clearRoute() {
        routePoints = [];
        routeMarkers.forEach(function (m) { map.removeLayer(m); });
        routeMarkers = [];
        if (routeLine) { map.removeLayer(routeLine); routeLine = null; }
        updateRouteUI();
    }

    function exportGPX() {
        if (routePoints.length < 2) return;
        var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="SURVIVE.MAP">\n  <trk>\n    <trkseg>\n';
        routePoints.forEach(function (p) {
            xml += '      <trkpt lat="' + p.lat.toFixed(6) + '" lon="' + p.lng.toFixed(6) + '"></trkpt>\n';
        });
        xml += '    </trkseg>\n  </trk>\n</gpx>';
        var blob = new Blob([xml], { type: 'application/gpx+xml' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'survive-route-' + Date.now() + '.gpx';
        a.click();
        URL.revokeObjectURL(a.href);
    }

    function initRoute() {
        document.getElementById('route-undo').addEventListener('click', undoRoutePoint);
        document.getElementById('route-clear').addEventListener('click', clearRoute);
        document.getElementById('route-export').addEventListener('click', exportGPX);
    }

    function createCustomMarker(latlng) {
        var icon = L.divIcon({
            className: '',
            html: '<div style="background:var(--accent);border:2px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);width:22px;height:22px;box-shadow:0 2px 8px rgba(0,200,120,0.4);"></div>',
            iconSize: [22, 22],
            iconAnchor: [11, 22],
            popupAnchor: [0, -22]
        });
        var marker = L.marker(latlng, { icon: icon }).addTo(map);
        var lat = latlng.lat.toFixed(5);
        var lng = latlng.lng.toFixed(5);
        marker.bindPopup('<div style="font-family:Inter,sans-serif;"><div style="font-family:JetBrains Mono,monospace;font-size:13px;font-weight:600;color:#00c878;margin-bottom:4px;">' + lat + '\u00b0, ' + lng + '\u00b0</div></div>');
        markers.push(marker);
        updateMarkersUI();
    }

    function removeMarker(index) {
        map.removeLayer(markers[index]);
        markers.splice(index, 1);
        updateMarkersUI();
    }

    function clearAllMarkers() {
        markers.forEach(function (m) { map.removeLayer(m); });
        markers = [];
        updateMarkersUI();
    }

    function updateMarkersUI() {
        var list = document.getElementById('markers-list');
        var badge = document.getElementById('markers-badge');
        if (markers.length > 0) {
            badge.style.display = '';
            badge.textContent = markers.length;
        } else {
            badge.style.display = 'none';
        }
        list.innerHTML = markers.map(function (m, i) {
            return '<div class="marker-item"><span class="marker-coords">' + m.getLatLng().lat.toFixed(5) + ', ' + m.getLatLng().lng.toFixed(5) + '</span><button class="marker-del" data-idx="' + i + '" title="Удалить"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>';
        }).join('');
        list.querySelectorAll('.marker-del').forEach(function (btn) {
            btn.addEventListener('click', function () {
                removeMarker(parseInt(this.dataset.idx));
            });
        });
    }

    function initMarkers() {
        document.getElementById('markers-clear').addEventListener('click', function () {
            markers.forEach(function (m) { map.removeLayer(m); });
            markers = [];
            updateMarkersUI();
        });
    }

    function initRegions() {
        var fedSelect = document.getElementById('fed-okrug');
        var regSelect = document.getElementById('region');
        var quickNav = document.getElementById('quick-nav');

        Object.keys(REGIONS).forEach(function (key) {
            var opt = document.createElement('option');
            opt.value = key;
            opt.textContent = REGIONS[key].name;
            fedSelect.appendChild(opt);
        });

        fedSelect.addEventListener('change', function () {
            regSelect.innerHTML = '<option value="">\u2014 Весь округ \u2014</option>';
            var okrug = REGIONS[this.value];
            if (okrug) {
                okrug.regions.forEach(function (r) {
                    var opt = document.createElement('option');
                    opt.value = JSON.stringify({ lat: r.lat, lng: r.lng, zoom: r.zoom });
                    opt.textContent = r.name;
                    regSelect.appendChild(opt);
                });
                var bounds = okrug.regions.map(function (r) { return [r.lat, r.lng]; });
                map.fitBounds(bounds, { padding: [40, 40] });
            }
        });

        regSelect.addEventListener('change', function () {
            if (this.value) {
                var d = JSON.parse(this.value);
                map.setView([d.lat, d.lng], d.zoom);
            }
        });

        QUICK_NAV.forEach(function (item) {
            var btn = document.createElement('button');
            btn.className = 'quick-btn';
            btn.innerHTML = item.icon + ' ' + item.name;
            btn.addEventListener('click', function () {
                map.setView([item.lat, item.lng], item.zoom);
            });
            quickNav.appendChild(btn);
        });
    }

    function initCoords() {
        var latEl = document.getElementById('coords-lat');
        var lngEl = document.getElementById('coords-lng');
        var zoomEl = document.getElementById('coords-zoom');
        var scaleEl = document.getElementById('coords-scale');
        var scales = { 1: '1:500M', 2: '1:250M', 3: '1:150M', 4: '1:70M', 5: '1:35M', 6: '1:15M', 7: '1:8M', 8: '1:4M', 9: '1:2M', 10: '1:1M', 11: '1:500k', 12: '1:250k', 13: '1:150k', 14: '1:70k', 15: '1:35k', 16: '1:15k', 17: '1:8k', 18: '1:4k', 19: '1:2k' };

        map.on('mousemove', function (e) {
            latEl.textContent = e.latlng.lat.toFixed(4);
            lngEl.textContent = e.latlng.lng.toFixed(4);
        });

        map.on('zoomend moveend', function () {
            var z = map.getZoom();
            zoomEl.textContent = 'z' + z;
            scaleEl.textContent = scales[z] || '~1:' + Math.round(559082264 / Math.pow(2, z));
        });

        var coordsBar = document.getElementById('coords-bar');
        coordsBar.addEventListener('click', function () {
            var center = map.getCenter();
            var text = center.lat.toFixed(6) + ', ' + center.lng.toFixed(6);
            navigator.clipboard.writeText(text).then(function () {
                var orig = coordsBar.innerHTML;
                coordsBar.style.borderColor = 'var(--accent)';
                setTimeout(function () {
                    coordsBar.style.borderColor = '';
                }, 800);
            });
        });
    }

    function initRuler() {
        var btn = document.getElementById('btn-ruler');
        btn.addEventListener('click', function () {
            rulerMode = !rulerMode;
            btn.classList.toggle('active', rulerMode);
            document.getElementById('map').style.cursor = rulerMode ? 'crosshair' : '';
            if (!rulerMode) clearRuler();
        });
    }

    function clearRuler() {
        rulerPoints = [];
        rulerMarkers.forEach(function (m) { map.removeLayer(m); });
        rulerMarkers = [];
        if (rulerLine) { map.removeLayer(rulerLine); rulerLine = null; }
    }

    function addRulerPoint(latlng) {
        rulerPoints.push(latlng);
        var marker = L.circleMarker(latlng, {
            radius: 5,
            color: '#00c878',
            fillColor: '#00c878',
            fillOpacity: 1,
            weight: 2
        }).addTo(map);
        rulerMarkers.push(marker);

        if (rulerLine) map.removeLayer(rulerLine);
        if (rulerPoints.length > 1) {
            rulerLine = L.polyline(rulerPoints, {
                color: '#00c878',
                weight: 2,
                opacity: 0.7,
                dashArray: '6,8'
            }).addTo(map);

            var totalDist = 0;
            for (var i = 1; i < rulerPoints.length; i++) {
                totalDist += rulerPoints[i - 1].distanceTo(rulerPoints[i]);
            }
            var label = totalDist > 1000 ? (totalDist / 1000).toFixed(2) + ' км' : Math.round(totalDist) + ' м';

            var lastIdx = rulerPoints.length - 1;
            var p1 = rulerPoints[lastIdx - 1];
            var p2 = rulerPoints[lastIdx];
            var az = bearing(p1.lat, p1.lng, p2.lat, p2.lng);
            var decl = calcMagneticDeclination(p2.lat, p2.lng);
            var magAz = ((az + decl) % 360 + 360) % 360;
            var dir = bearingDir(az);

            label += ' \u2022 ' + Math.round(az) + '\u00b0' + dir + ' (маг. ' + Math.round(magAz) + '\u00b0)';

            var last = rulerMarkers[rulerMarkers.length - 1];
            last.unbindTooltip();
            last.bindTooltip(label, {
                permanent: true,
                direction: 'right',
                className: 'ruler-tooltip',
                offset: [8, 0]
            });
        }
    }

    function bearing(lat1, lng1, lat2, lng2) {
        var dLng = (lng2 - lng1) * Math.PI / 180;
        var y = Math.sin(dLng) * Math.cos(lat2 * Math.PI / 180);
        var x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) -
                Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLng);
        var brng = Math.atan2(y, x) * 180 / Math.PI;
        return (brng + 360) % 360;
    }

    function bearingDir(b) {
        var dirs = ['С','ССВ','СВ','ВСВ','В','ВЮВ','ЮВ','ЮЮВ','Ю','ЮЮЗ','ЮЗ','ЗЮЗ','З','ЗСЗ','СЗ','ССЗ'];
        return dirs[Math.round(b / 22.5) % 16];
    }

    function initFullscreen() {
        document.getElementById('btn-fullscreen').addEventListener('click', function () {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    }

    function initLocate() {
        document.getElementById('btn-locate').addEventListener('click', function () {
            map.locate({ setView: true, maxZoom: 14 });
        });
    }

    function initMapEvents() {
        map.on('dblclick', function (e) {
            addRoutePoint(e.latlng);
        });

        map.on('zoomend', function () {
            var z = map.getZoom();
            document.getElementById('coords-zoom').textContent = 'z' + z;
        });
    }

    function initKeyboard() {
        document.addEventListener('keydown', function (e) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
            if (e.key === 'Tab') {
                e.preventDefault();
                document.getElementById('sidebar').classList.toggle('collapsed');
            }
            if (e.key === '/') {
                e.preventDefault();
                openPanel('search');
                document.getElementById('search-input').focus();
            }
            if (e.key === 'f' || e.key === 'F') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            }
            if (e.key === 'c' || e.key === 'C') {
                document.getElementById('btn-compass').click();
            }
            if (e.key === 'g' || e.key === 'G') {
                document.getElementById('btn-tracking').click();
            }
            if (e.key === 'Escape') {
                if (rulerMode) {
                    rulerMode = false;
                    document.getElementById('btn-ruler').classList.remove('active');
                    document.getElementById('map').style.cursor = '';
                    clearRuler();
                }
            }
        });
    }

    function openPanel(name) {
        var toggle = document.querySelector('[data-panel="' + name + '"]');
        var content = document.getElementById('panel-' + name);
        if (toggle && content) {
            toggle.classList.add('open');
            content.classList.add('open');
        }
    }

    function initDownload() {
        var modeBtns = document.querySelectorAll('.dl-mode-btn');
        var progressEl = document.getElementById('dl-progress');
        var progressFill = document.getElementById('dl-progress-fill');
        var progressText = document.getElementById('dl-progress-text');

        var subView = document.getElementById('dl-sub-view');
        var subArea = document.getElementById('dl-sub-area');
        var subRegion = document.getElementById('dl-sub-region');
        var subpanels = [subView, subArea, subRegion];

        function showSub(name) {
            subpanels.forEach(function (p) { p.style.display = 'none'; });
            if (name === 'view') subView.style.display = '';
            if (name === 'area') subArea.style.display = '';
            if (name === 'region') subRegion.style.display = '';
        }

        modeBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                modeBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                dlMode = btn.dataset.mode;
                showSub(dlMode);
                if (dlMode === 'area' && !dlAreaRect) {
                    enableAreaSelect();
                } else {
                    disableAreaSelect();
                }
            });
        });

        showSub('view');

        var areaText = document.getElementById('dl-area-text');
        var areaClear = document.getElementById('dl-area-clear');

        areaClear.addEventListener('click', function () {
            if (dlAreaRect) { map.removeLayer(dlAreaRect); dlAreaRect = null; }
            areaText.textContent = 'Растяните прямоугольник на карте';
            areaText.className = 'dl-area-text';
            enableAreaSelect();
        });

        function enableAreaSelect() {
            dlSelecting = true;
            document.getElementById('map').classList.add('crosshair-cursor');
        }

        function disableAreaSelect() {
            dlSelecting = false;
            document.getElementById('map').classList.remove('crosshair-cursor');
        }

        var selecting = false;
        var selectStartLatLng = null;

        map.on('mousedown', function (e) {
            if (!dlSelecting || dlMode !== 'area') return;
            if (e.originalEvent.button !== 0) return;
            selecting = true;
            selectStartLatLng = e.latlng;
            if (dlTempRect) { map.removeLayer(dlTempRect); dlTempRect = null; }
            map.dragging.disable();
        });

        map.on('mousemove', function (e) {
            if (!selecting) return;
            var bounds = L.latLngBounds(selectStartLatLng, e.latlng);
            if (dlTempRect) {
                dlTempRect.setBounds(bounds);
            } else {
                dlTempRect = L.rectangle(bounds, {
                    color: '#00c878', weight: 2, dashArray: '6,4',
                    fillColor: 'rgba(0,200,120,0.08)', fillOpacity: 1
                }).addTo(map);
            }
        });

        map.on('mouseup', function (e) {
            if (!selecting) return;
            selecting = false;
            map.dragging.enable();
            if (dlTempRect) {
                if (dlAreaRect) map.removeLayer(dlAreaRect);
                dlAreaRect = dlTempRect;
                dlTempRect = null;
                dlSelecting = false;
                document.getElementById('map').classList.remove('crosshair-cursor');
                var b = dlAreaRect.getBounds();
                areaText.textContent = b.getSouth().toFixed(4) + '\u00b0 — ' + b.getNorth().toFixed(4) + '\u00b0 N,  ' + b.getWest().toFixed(4) + '\u00b0 — ' + b.getEast().toFixed(4) + '\u00b0 E';
                areaText.className = 'dl-area-text selected';
            }
        });

        document.getElementById('dl-save').addEventListener('click', function () {
            captureVisible();
        });

        document.getElementById('dl-save-area').addEventListener('click', function () {
            if (!dlAreaRect) {
                areaText.textContent = 'Сначала выделите область!';
                return;
            }
            captureBounds(dlAreaRect.getBounds(), map.getZoom(), 'area');
        });

        function captureVisible() {
            var btn = document.getElementById('dl-save');
            setBtnLoading(btn);
            var scale = parseInt(document.getElementById('dl-scale').value) || 2;
            var format = document.getElementById('dl-format').value;
            captureAndSave(map.getBounds(), map.getZoom(), scale, format, currentLayer._url, btn, 'visible');
        }

        function captureBounds(bounds, zoom, label) {
            var btn = document.getElementById('dl-save-area');
            setBtnLoading(btn);
            var scale = parseInt(document.getElementById('dl-area-scale').value) || 2;
            var format = document.getElementById('dl-area-format').value;
            captureAndSave(bounds, zoom, scale, format, currentLayer._url, btn, label);
        }

        function captureAndSave(bounds, zoom, scale, format, tileUrl, btn, label) {
            progressEl.style.display = '';
            progressFill.style.width = '5%';
            progressFill.style.background = '';
            progressText.textContent = '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0442\u0430\u0439\u043b\u043e\u0432...';

            var tileSize = 256;
            var nw = bounds.getNorthWest();
            var se = bounds.getSouthEast();
            var tl = latLngToTile(nw.lat, nw.lng, zoom);
            var br = latLngToTile(se.lat, se.lng, zoom);
            var cntX = br.x - tl.x + 1;
            var cntY = br.y - tl.y + 1;
            var total = cntX * cntY;

            if (total > 500) {
                finishError(btn, '\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0442\u0430\u0439\u043b\u043e\u0432 (' + total + '). \u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0438\u043b\u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431.');
                return;
            }

            var canvasW = cntX * tileSize * scale;
            var canvasH = cntY * tileSize * scale;
            var canvas = document.createElement('canvas');
            canvas.width = canvasW;
            canvas.height = canvasH;
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, canvasW, canvasH);

            var loaded = 0, failed = 0;
            progressFill.style.width = '10%';

            for (var tx = tl.x; tx <= br.x; tx++) {
                for (var ty = tl.y; ty <= br.y; ty++) {
                    var url = tileUrl.replace('{z}', zoom).replace('{x}', tx).replace('{y}', ty).replace('{r}', '').replace('{s}', 'a');
                    (function (ix, iy, u) {
                        var img = new Image();
                        img.crossOrigin = 'anonymous';
                        img.onload = function () {
                            ctx.drawImage(img, 0, 0, tileSize, tileSize, ix * tileSize * scale, iy * tileSize * scale, tileSize * scale, tileSize * scale);
                            loaded++;
                            update();
                        };
                        img.onerror = function () { failed++; loaded++; update(); };
                        img.src = u;
                    })(tx - tl.x, ty - tl.y, url);
                }
            }

            function update() {
                var pct = 10 + Math.round((loaded / total) * 80);
                progressFill.style.width = pct + '%';
                progressText.textContent = loaded + ' / ' + total + (failed ? ' (' + failed + ' \u043e\u0448\u0438\u0431\u043e\u043a)' : '');
                if (loaded < total) return;

                if (routePoints.length > 1) drawRoute(ctx, bounds, zoom, tileSize, scale, tl);

                progressFill.style.width = '95%';
                progressText.textContent = '\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...';

                var mime = format === 'jpeg' ? 'image/jpeg' : 'image/png';
                canvas.toBlob(function (blob) {
                    if (!blob) { finishError(btn, '\u041e\u0448\u0438\u0431\u043a\u0430 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438'); return; }
                    var a = document.createElement('a');
                    a.href = URL.createObjectURL(blob);
                    a.download = 'survive-' + label + '-' + zoom + 'z-' + Date.now() + '.' + (format === 'jpeg' ? 'jpg' : 'png');
                    a.click();
                    URL.revokeObjectURL(a.href);
                    finishSuccess(btn, total, canvasW, canvasH);
                }, mime, format === 'jpeg' ? 0.92 : undefined);
            }
        }

        function drawRoute(ctx, bounds, zoom, tileSize, scale, tl) {
            ctx.strokeStyle = '#00c878';
            ctx.lineWidth = 3 * scale;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            routePoints.forEach(function (p, i) {
                var px = latLngToPixel(p.lat, p.lng, zoom, tileSize);
                var ox = (px.x - tl.x * tileSize) * scale;
                var oy = (px.y - tl.y * tileSize) * scale;
                if (i === 0) ctx.moveTo(ox, oy); else ctx.lineTo(ox, oy);
            });
            ctx.stroke();
        }

        function latLngToTile(lat, lng, zoom) {
            var n = Math.pow(2, zoom);
            var x = Math.floor((lng + 180) / 360 * n);
            var latRad = lat * Math.PI / 180;
            var y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
            return { x: x, y: y };
        }

        function latLngToPixel(lat, lng, zoom, tileSize) {
            var n = Math.pow(2, zoom);
            var x = (lng + 180) / 360 * n * tileSize;
            var latRad = lat * Math.PI / 180;
            var y = (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n * tileSize;
            return { x: x, y: y };
        }

        function regionBounds(regions) {
            var minLat = 90, maxLat = -90, minLng = 180, maxLng = -180;
            regions.forEach(function (r) {
                if (r.lat < minLat) minLat = r.lat;
                if (r.lat > maxLat) maxLat = r.lat;
                if (r.lng < minLng) minLng = r.lng;
                if (r.lng > maxLng) maxLng = r.lng;
            });
            var padLat = (maxLat - minLat) * 0.15 + 0.5;
            var padLng = (maxLng - minLng) * 0.15 + 0.5;
            return L.latLngBounds(
                [Math.max(-85, minLat - padLat), Math.max(-180, minLng - padLng)],
                [Math.min(85, maxLat + padLat), Math.min(180, maxLng + padLng)]
            );
        }

        // ── Region download ──

        var dlFedSelect = document.getElementById('dl-fed-okrug');
        var dlRegSelect = document.getElementById('dl-region');
        var dlZoomMin = document.getElementById('dl-zoom-min');
        var dlZoomMax = document.getElementById('dl-zoom-max');
        var dlLayerChecks = document.getElementById('dl-layer-checks');
        var dlTileInfo = document.getElementById('dl-tile-info');
        var dlTileCount = document.getElementById('dl-tile-count');
        var dlTileSize = document.getElementById('dl-tile-size');

        Object.keys(REGIONS).forEach(function (key) {
            var opt = document.createElement('option');
            opt.value = key;
            opt.textContent = REGIONS[key].name;
            dlFedSelect.appendChild(opt);
        });

        dlFedSelect.addEventListener('change', function () {
            dlRegSelect.innerHTML = '<option value="">\u2014 \u0412\u0435\u0441\u044c \u043e\u043a\u0440\u0443\u0433 \u2014</option>';
            var okrug = REGIONS[this.value];
            if (okrug) {
                okrug.regions.forEach(function (r) {
                    var opt = document.createElement('option');
                    opt.value = JSON.stringify({ lat: r.lat, lng: r.lng, zoom: r.zoom, name: r.name });
                    opt.textContent = r.name;
                    dlRegSelect.appendChild(opt);
                });
                map.fitBounds(regionBounds(okrug.regions), { padding: [30, 30] });
            }
            estimateTiles();
        });

        dlRegSelect.addEventListener('change', function () {
            if (this.value) {
                var d = JSON.parse(this.value);
                map.setView([d.lat, d.lng], d.zoom);
            }
            estimateTiles();
        });

        for (var z = 5; z <= 17; z++) {
            var o1 = document.createElement('option');
            o1.value = z; o1.textContent = 'z' + z;
            if (z === 8) o1.selected = true;
            dlZoomMin.appendChild(o1);
            var o2 = document.createElement('option');
            o2.value = z; o2.textContent = 'z' + z;
            if (z === 12) o2.selected = true;
            dlZoomMax.appendChild(o2);
        }

        dlZoomMin.addEventListener('change', estimateTiles);
        dlZoomMax.addEventListener('change', estimateTiles);

        LAYERS_CONFIG.forEach(function (cfg) {
            var lbl = document.createElement('label');
            lbl.className = 'dl-layer-check';
            lbl.innerHTML = '<input type="checkbox" value="' + cfg.id + '" checked> ' + cfg.icon + ' ' + cfg.name;
            lbl.querySelector('input').addEventListener('change', estimateTiles);
            dlLayerChecks.appendChild(lbl);
        });

        function getSelectedBounds() {
            var regVal = dlRegSelect.value;
            var fedVal = dlFedSelect.value;
            if (regVal) {
                var d = JSON.parse(regVal);
                var span = 2;
                return L.latLngBounds([d.lat - span, d.lng - span], [d.lat + span, d.lng + span]);
            }
            if (fedVal && REGIONS[fedVal]) {
                return regionBounds(REGIONS[fedVal].regions);
            }
            return null;
        }

        function getSelectedLayers() {
            var ids = [];
            dlLayerChecks.querySelectorAll('input:checked').forEach(function (cb) { ids.push(cb.value); });
            return ids;
        }

        function estimateTiles() {
            var bounds = getSelectedBounds();
            if (!bounds) { dlTileInfo.style.display = 'none'; return; }
            var zMin = parseInt(dlZoomMin.value) || 8;
            var zMax = parseInt(dlZoomMax.value) || 12;
            if (zMax < zMin) zMax = zMin;
            var layers = getSelectedLayers();
            if (!layers.length) { dlTileInfo.style.display = 'none'; return; }

            var total = 0;
            for (var z = zMin; z <= zMax; z++) {
                var tl = latLngToTile(bounds.getNorthWest().lat, bounds.getNorthWest().lng, z);
                var br = latLngToTile(bounds.getSouthEast().lat, bounds.getSouthEast().lng, z);
                total += (br.x - tl.x + 1) * (br.y - tl.y + 1);
            }
            total *= layers.length;

            dlTileInfo.style.display = '';
            dlTileCount.textContent = total.toLocaleString();
            dlTileSize.textContent = (total * 0.04).toFixed(1);
        }

        estimateTiles();

        document.getElementById('dl-save-region').addEventListener('click', function () {
            var btn = this;
            var bounds = getSelectedBounds();
            if (!bounds) { finishError(btn, '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u043e\u043d'); return; }

            var zMin = parseInt(dlZoomMin.value) || 8;
            var zMax = parseInt(dlZoomMax.value) || 12;
            if (zMax < zMin) zMax = zMin;
            var layerIds = getSelectedLayers();
            if (!layerIds.length) { finishError(btn, '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0441\u043b\u043e\u0439'); return; }

            var total = 0;
            for (var z = zMin; z <= zMax; z++) {
                var tl = latLngToTile(bounds.getNorthWest().lat, bounds.getNorthWest().lng, z);
                var br = latLngToTile(bounds.getSouthEast().lat, bounds.getSouthEast().lng, z);
                total += (br.x - tl.x + 1) * (br.y - tl.y + 1);
            }
            total *= layerIds.length;

            if (total > 5000) {
                finishError(btn, '\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e (' + total + '). \u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u0443\u043c\u0430 \u0438\u043b\u0438 \u043a\u043e\u043b-\u0432\u043e \u0441\u043b\u043e\u0451\u0432.');
                return;
            }

            var regionName = (dlRegSelect.value ? JSON.parse(dlRegSelect.value).name : dlFedSelect.value) || 'region';
            downloadRegionLayers(bounds, zMin, zMax, layerIds, btn, regionName);
        });

        function downloadRegionLayers(bounds, zMin, zMax, layerIds, btn, regionName) {
            setBtnLoading(btn);
            progressEl.style.display = '';
            progressFill.style.width = '0%';
            progressFill.style.background = '';

            var queue = [];
            layerIds.forEach(function (lid) {
                for (var z = zMin; z <= zMax; z++) {
                    queue.push({ layer: lid, zoom: z });
                }
            });

            var totalSteps = queue.length;
            var step = 0;

            function nextStep() {
                if (step >= totalSteps) {
                    finishSuccess(btn, 0, 0);
                    return;
                }
                var item = queue[step];
                step++;
                progressFill.style.width = Math.round((step / totalSteps) * 100) + '%';
                var layerCfg = LAYERS_CONFIG.filter(function (c) { return c.id === item.layer; })[0];
                var lName = layerCfg ? layerCfg.name : item.layer;
                progressText.textContent = '\u0421\u043b\u043e\u0439 ' + lName + ' z' + item.zoom + ' (' + step + '/' + totalSteps + ')';

                captureAndSaveRegion(bounds, item.zoom, layerCfg.url, regionName + '-' + lName + '-z' + item.zoom, function () {
                    setTimeout(nextStep, 600);
                });
            }

            nextStep();
        }

        function captureAndSaveRegion(bounds, zoom, tileUrl, label, onDone) {
            var tileSize = 256;
            var tl = latLngToTile(bounds.getNorthWest().lat, bounds.getNorthWest().lng, zoom);
            var br = latLngToTile(bounds.getSouthEast().lat, bounds.getSouthEast().lng, zoom);
            var cntX = br.x - tl.x + 1;
            var cntY = br.y - tl.y + 1;
            var total = cntX * cntY;

            if (total > 1500) { onDone(); return; }

            var canvas = document.createElement('canvas');
            canvas.width = cntX * tileSize;
            canvas.height = cntY * tileSize;
            var ctx = canvas.getContext('2d');
            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            var loaded = 0, failed = 0;

            for (var tx = tl.x; tx <= br.x; tx++) {
                for (var ty = tl.y; ty <= br.y; ty++) {
                    var url = tileUrl.replace('{z}', zoom).replace('{x}', tx).replace('{y}', ty).replace('{r}', '').replace('{s}', 'a');
                    (function (ix, iy, u) {
                        var img = new Image();
                        img.crossOrigin = 'anonymous';
                        img.onload = function () {
                            ctx.drawImage(img, 0, 0, tileSize, tileSize, ix * tileSize, iy * tileSize);
                            loaded++; check();
                        };
                        img.onerror = function () { failed++; loaded++; check(); };
                        img.src = u;
                    })(tx - tl.x, ty - tl.y, url);
                }
            }

            function check() {
                if (loaded < total) return;
                canvas.toBlob(function (blob) {
                    if (blob) {
                        var a = document.createElement('a');
                        a.href = URL.createObjectURL(blob);
                        a.download = 'survive-' + label + '-' + Date.now() + '.png';
                        a.click();
                        URL.revokeObjectURL(a.href);
                    }
                    onDone();
                }, 'image/png');
            }
        }

        function setBtnLoading(btn) {
            btn.disabled = true;
            btn.innerHTML = '<div class="search-loading" style="display:inline-block"></div> \u0413\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f...';
        }

        function finishSuccess(btn, tiles, w, h) {
            progressFill.style.width = '100%';
            progressFill.style.background = '';
            progressText.textContent = '\u0413\u043e\u0442\u043e\u0432\u043e! \u0424\u0430\u0439\u043b\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b';
            resetBtn(btn);
            setTimeout(function () { progressEl.style.display = 'none'; }, 5000);
        }

        function finishError(btn, msg) {
            progressFill.style.width = '100%';
            progressFill.style.background = 'var(--danger)';
            progressText.textContent = msg;
            resetBtn(btn);
            setTimeout(function () {
                progressEl.style.display = 'none';
                progressFill.style.background = '';
            }, 6000);
        }

        function resetBtn(btn) {
            btn.disabled = false;
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c';
        }
    }

    var dsLayers = {};
    var dsCache = {};
    var dsLegendEl = document.getElementById('ds-legend');
    var dsLegendTitle = document.getElementById('ds-legend-title');
    var dsLegendBody = document.getElementById('ds-legend-body');

    var DS_LEGENDS = {
        water: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#3b9eff"></span> Река / озеро</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#80d4ff"></span> Родники / источники</div><p style="margin-top:6px">Тепловая карта — плотность источников воды</p>',
        dangers: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#ff4d4f"></span> Радиация</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#ff8c00"></span> Пожары</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#a855f7"></span> Клещи</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#3b9eff"></span> Наводнения</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#fff"></span> Лавины / вулканы</div>',
        abandoned: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#a855f7"></span> Город-призрак</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#7c3aed"></span> Бункер ГО</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#c084fc"></span> Заброшенная база</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#ff4d4f"></span> Опасная зона</div>',
        biomes: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#1a5c1a"></span> Тайга</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#2d8f2d"></span> Смешанные леса</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#8fbc5a"></span> Лесостепь</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#d4a843"></span> Степь</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#6b8f8f"></span> Тундра</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#b8d4e3"></span> Арктическая пустыня</div>',
        evacuation: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#f97316"></span> Автомобильный</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#3b82f6"></span> Водный</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#ef4444"></span> Внедорожный</div><p style="margin-top:6px">Клик на маршрут — подробности</p>',
        population: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#eab308"></span> Высокая плотность</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#854d0e"></span> Средняя</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#365314"></span> Низкая</div><p style="margin-top:6px">Размер круга = население региона</p>',
        permafrost: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#0e7490"></span> Сплошная (200-1500 м)</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#22d3ee"></span> Прерывистая (50-300 м)</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#67e8f9"></span> Островная (10-100 м)</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#a5f3fc"></span> Отдельные очаги (5-30 м)</div>'
    };

    function loadJSON(url, cb) {
        if (dsCache[url]) { cb(dsCache[url]); return; }
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                dsCache[url] = data;
                cb(data);
            }
        };
        xhr.send();
    }

    function makePopup(props, tagClass) {
        var html = '<div class="marker-popup">';
        html += '<h4>' + escHtml(props.name || '') + '</h4>';
        if (props.desc) html += '<p>' + escHtml(props.desc) + '</p>';
        if (props.type) html += '<span class="tag ' + tagClass + '">' + escHtml(props.type) + '</span>';
        if (props.danger) html += ' <span class="tag tag-danger">' + escHtml(props.danger) + '</span>';
        if (props.dist) html += '<p style="margin-top:4px">' + escHtml(props.dist) + '</p>';
        if (props.population) html += '<p style="margin-top:4px">Население: ' + Number(props.population).toLocaleString() + '</p>';
        if (props.density) html += '<br>Плотность: ' + escHtml(String(props.density)) + ' чел/км²';
        html += '</div>';
        return html;
    }

    function toggleDataset(dsId, checked) {
        if (checked) {
            if (dsLayers[dsId]) { map.addLayer(dsLayers[dsId]); }
            else { loadDataset(dsId); }
            dsLegendTitle.textContent = document.querySelector('[data-ds="' + dsId + '"]').closest('.ds-item').querySelector('.ds-name').textContent;
            dsLegendBody.innerHTML = DS_LEGENDS[dsId];
            dsLegendEl.style.display = '';
        } else {
            if (dsLayers[dsId]) map.removeLayer(dsLayers[dsId]);
            dsLegendEl.style.display = 'none';
        }
    }

    function loadDataset(dsId) {
        loadJSON('data/' + dsId + '.json', function (data) {
            switch (dsId) {
                case 'water': renderWater(data); break;
                case 'dangers': renderDangers(data); break;
                case 'abandoned': renderAbandoned(data); break;
                case 'biomes': renderBiomes(data); break;
                case 'evacuation': renderEvacuation(data); break;
                case 'population': renderPopulation(data); break;
                case 'permafrost': renderPermafrost(data); break;
            }
        });
    }

    function renderWater(data) {
        var group = L.layerGroup();
        var heatPoints = [];

        data.features.forEach(function (f) {
            var latlng = [f.geometry.coordinates[1], f.geometry.coordinates[0]];
            var color = f.properties.type === 'springs' ? '#80d4ff' : '#3b9eff';
            var radius = f.properties.type === 'lake' ? 8 : f.properties.type === 'springs' ? 5 : 4;

            L.circleMarker(latlng, {
                radius: radius, color: color, fillColor: color,
                fillOpacity: 0.7, weight: 1, opacity: 0.8
            }).bindPopup(makePopup(f.properties, 'tag-water')).addTo(group);

            var intensity = f.properties.type === 'lake' ? 0.8 : f.properties.type === 'river' ? 0.5 : 0.3;
            heatPoints.push([latlng[0], latlng[1], intensity]);
        });

        var heat = L.heatLayer(heatPoints, {
            radius: 35, blur: 25, maxZoom: 10,
            gradient: { 0.2: '#003366', 0.4: '#3b9eff', 0.7: '#80d4ff', 1.0: '#ffffff' }
        }).addTo(group);

        dsLayers['water'] = group;
        map.addLayer(group);
    }

    function renderDangers(data) {
        var group = L.layerGroup();

        data.features.forEach(function (f) {
            var latlng = [f.geometry.coordinates[1], f.geometry.coordinates[0]];
            var p = f.properties;
            var color, radius;

            if (p.type === 'radiation') { color = '#ff4d4f'; radius = 10; }
            else if (p.type === 'fire') { color = '#ff8c00'; radius = 8; }
            else if (p.type === 'ticks') { color = '#a855f7'; radius = 7; }
            else if (p.type === 'flood') { color = '#3b9eff'; radius = 7; }
            else if (p.type === 'avalanche') { color = '#ffffff'; radius = 6; }
            else if (p.type === 'volcano') { color = '#ff2020'; radius = 10; }
            else if (p.type === 'earthquake') { color = '#ffcc00'; radius = 8; }
            else { color = '#ff4d4f'; radius = 6; }

            L.circleMarker(latlng, {
                radius: radius, color: color, fillColor: color,
                fillOpacity: 0.5, weight: 2, opacity: 0.8,
                dashArray: p.level === 'seasonal' ? '4,3' : null
            }).bindPopup(makePopup(p, 'tag-danger')).addTo(group);
        });

        dsLayers['dangers'] = group;
        map.addLayer(group);
    }

    function renderAbandoned(data) {
        var markers = L.markerClusterGroup({
            iconCreateFunction: function (cluster) {
                return L.divIcon({
                    html: '<div>' + cluster.getChildCount() + '</div>',
                    className: 'custom-marker-cluster',
                    iconSize: L.point(40, 40)
                });
            },
            spiderfyOnMaxZoom: true, showCoverageOnHover: false, maxClusterRadius: 50
        });

        data.features.forEach(function (f) {
            var latlng = [f.geometry.coordinates[1], f.geometry.coordinates[0]];
            var p = f.properties;
            var iconColor = p.type === 'ghost_town' ? '#a855f7' : p.type === 'bunker' ? '#7c3aed' : '#c084fc';
            var iconSymbol = p.type === 'ghost_town' ? '&#9960;' : p.type === 'bunker' ? '&#9650;' : '&#9672;';

            var icon = L.divIcon({
                html: '<div style="background:' + iconColor + ';border:2px solid rgba(255,255,255,0.6);border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;box-shadow:0 0 8px ' + iconColor + '80;">' + iconSymbol + '</div>',
                className: '',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });

            L.marker(latlng, { icon: icon }).bindPopup(makePopup(p, 'tag-abandoned')).addTo(markers);
        });

        dsLayers['abandoned'] = markers;
        map.addLayer(markers);
    }

    function renderBiomes(data) {
        var group = L.layerGroup();

        data.features.forEach(function (f) {
            var coords = f.geometry.coordinates.map(function (ring) {
                return ring.map(function (c) { return [c[1], c[0]]; });
            });

            L.polygon(coords, {
                color: f.properties.color,
                fillColor: f.properties.color,
                fillOpacity: 0.2,
                weight: 1.5,
                opacity: 0.5
            }).bindPopup(makePopup(f.properties, 'tag-biome')).addTo(group);
        });

        dsLayers['biomes'] = group;
        map.addLayer(group);
    }

    function renderEvacuation(data) {
        var group = L.layerGroup();

        data.features.forEach(function (f) {
            var coords = f.geometry.coordinates.map(function (c) { return [c[1], c[0]]; });
            var p = f.properties;
            var color = p.type === 'water' ? '#3b82f6' : p.type === 'offroad' ? '#ef4444' : '#f97316';
            var weight = p.type === 'water' ? 3 : 4;

            L.polyline(coords, {
                color: color, weight: weight, opacity: 0.7,
                dashArray: p.type === 'water' ? '8,6' : null,
                lineCap: 'round', lineJoin: 'round'
            }).bindPopup(makePopup(p, 'tag-evac')).addTo(group);

            if (coords.length > 0) {
                var startIcon = L.divIcon({
                    html: '<div style="background:' + color + ';color:#fff;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;box-shadow:0 0 6px ' + color + '80;">S</div>',
                    className: '', iconSize: [18, 18], iconAnchor: [9, 9]
                });
                var endIcon = L.divIcon({
                    html: '<div style="background:#00c878;color:#0c1117;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;box-shadow:0 0 6px rgba(0,200,120,0.4);">E</div>',
                    className: '', iconSize: [18, 18], iconAnchor: [9, 9]
                });
                L.marker(coords[0], { icon: startIcon }).addTo(group);
                L.marker(coords[coords.length - 1], { icon: endIcon }).addTo(group);
            }
        });

        dsLayers['evacuation'] = group;
        map.addLayer(group);
    }

    function renderPopulation(data) {
        var group = L.layerGroup();
        var heatPoints = [];

        data.features.forEach(function (f) {
            var latlng = [f.geometry.coordinates[1], f.geometry.coordinates[0]];
            var p = f.properties;
            var pop = p.population || 0;
            var radius = Math.max(4, Math.min(20, Math.sqrt(pop / 100000) * 3));
            var intensity = Math.min(1, p.density / 500);

            var color;
            if (p.density > 100) color = '#eab308';
            else if (p.density > 10) color = '#a16207';
            else color = '#365314';

            L.circleMarker(latlng, {
                radius: radius, color: color, fillColor: color,
                fillOpacity: 0.5, weight: 1, opacity: 0.6
            }).bindPopup(makePopup(p, 'tag-pop')).addTo(group);

            heatPoints.push([latlng[0], latlng[1], intensity]);
        });

        L.heatLayer(heatPoints, {
            radius: 40, blur: 30, maxZoom: 9,
            gradient: { 0.1: '#365314', 0.3: '#854d0e', 0.6: '#eab308', 1.0: '#fef08a' }
        }).addTo(group);

        dsLayers['population'] = group;
        map.addLayer(group);
    }

    function renderPermafrost(data) {
        var group = L.layerGroup();
        var zoneColors = {
            continuous: { fill: '#0e7490', stroke: '#0891b2' },
            discontinuous: { fill: '#22d3ee', stroke: '#06b6d4' },
            sporadic: { fill: '#67e8f9', stroke: '#22d3ee' },
            isolated: { fill: '#a5f3fc', stroke: '#67e8f9' }
        };
        var zoneNames = {
            continuous: 'Сплошная',
            discontinuous: 'Прерывистая',
            sporadic: 'Островная',
            isolated: 'Отдельные очаги'
        };

        data.features.forEach(function (f) {
            var zone = f.properties.zone;
            var colors = zoneColors[zone] || zoneColors.isolated;
            L.geoJSON(f, {
                style: {
                    fillColor: colors.fill,
                    fillOpacity: 0.25,
                    color: colors.stroke,
                    weight: 1.5,
                    opacity: 0.6,
                    dashArray: zone === 'isolated' ? '4,4' : zone === 'sporadic' ? '6,4' : null
                },
                onEachFeature: function (feature, layer) {
                    var p = feature.properties;
                    layer.bindPopup(
                        '<div class="marker-popup">' +
                        '<h4>' + p.name + '</h4>' +
                        '<p>Тип: <b>' + zoneNames[zone] + '</b></p>' +
                        '<p>Глубина: ' + p.depth + '</p>' +
                        '<p>Температура грунта: ' + p.temp + '</p>' +
                        '</div>'
                    );
                }
            }).addTo(group);
        });

        dsLayers['permafrost'] = group;
        map.addLayer(group);
    }

    function initDatasets() {
        document.querySelectorAll('[data-ds]').forEach(function (cb) {
            cb.addEventListener('change', function () {
                toggleDataset(this.dataset.ds, this.checked);
            });
        });
    }

    var compassActive = false;
    var deviceHeading = null;

    var importedTracks = [];

    var elevCache = {};

    function initElevation() {
        var btn = document.getElementById('btn-elevation');
        var panel = document.getElementById('elevation-panel');
        var canvas = document.getElementById('elevation-canvas');
        var statsEl = document.getElementById('elevation-stats');

        btn.addEventListener('click', function () {
            if (routePoints.length < 2) {
                btn.textContent = 'Нужно минимум 2 точки';
                setTimeout(function () {
                    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> Профиль высот';
                }, 2000);
                return;
            }
            panel.style.display = panel.style.display === 'none' ? '' : 'none';
            if (panel.style.display !== 'none') fetchElevation();
        });

        function fetchElevation() {
            statsEl.innerHTML = 'Загрузка высот...';
            var locations = routePoints.map(function (p) { return p.lat.toFixed(5) + ',' + p.lng.toFixed(5); });

            var cached = [];
            var uncached = [];
            routePoints.forEach(function (p, i) {
                var key = p.lat.toFixed(4) + ',' + p.lng.toFixed(4);
                if (elevCache[key] !== undefined) {
                    cached.push({ idx: i, elev: elevCache[key] });
                } else {
                    uncached.push({ idx: i, lat: p.lat, lng: p.lng });
                }
            });

            if (uncached.length === 0) {
                var results = cached.sort(function (a, b) { return a.idx - b.idx; }).map(function (c) { return c.elev; });
                drawProfile(results);
                return;
            }

            var url = 'https://api.open-meteo.com/v1/elevation?' + uncached.map(function (p) { return 'latitude=' + p.lat.toFixed(5) + '&longitude=' + p.lng.toFixed(5); }).join('&');

            var batchUrl = 'https://api.open-meteo.com/v1/elevation?latitude=' + uncached.map(function (p) { return p.lat.toFixed(5); }).join(',') + '&longitude=' + uncached.map(function (p) { return p.lng.toFixed(5); }).join(',');

            fetch(batchUrl).then(function (r) { return r.json(); }).then(function (data) {
                var elevations = data.elevation || [];
                uncached.forEach(function (p, i) {
                    var key = p.lat.toFixed(4) + ',' + p.lng.toFixed(4);
                    elevCache[key] = elevations[i] || 0;
                    cached.push({ idx: p.idx, elev: elevations[i] || 0 });
                });

                cached.sort(function (a, b) { return a.idx - b.idx; });
                drawProfile(cached.map(function (c) { return c.elev; }));
            }).catch(function () {
                statsEl.innerHTML = 'Ошибка загрузки высот';
            });
        }

        function drawProfile(elevations) {
            if (!elevations.length) return;
            var c = canvas;
            var dpr = window.devicePixelRatio || 1;
            c.width = c.offsetWidth * dpr;
            c.height = 100 * dpr;
            var ctx = c.getContext('2d');
            ctx.scale(dpr, dpr);
            var w = c.offsetWidth;
            var h = 100;

            var minE = Math.min.apply(null, elevations);
            var maxE = Math.max.apply(null, elevations);
            var range = maxE - minE || 1;
            var pad = 8;

            ctx.clearRect(0, 0, w, h);

            var grad = ctx.createLinearGradient(0, 0, 0, h);
            grad.addColorStop(0, 'rgba(0,200,120,0.4)');
            grad.addColorStop(1, 'rgba(0,200,120,0.02)');

            ctx.beginPath();
            ctx.moveTo(0, h);
            elevations.forEach(function (e, i) {
                var x = (i / (elevations.length - 1)) * w;
                var y = h - pad - ((e - minE) / range) * (h - pad * 2);
                if (i === 0) ctx.lineTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.lineTo(w, h);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.beginPath();
            elevations.forEach(function (e, i) {
                var x = (i / (elevations.length - 1)) * w;
                var y = h - pad - ((e - minE) / range) * (h - pad * 2);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.strokeStyle = '#00c878';
            ctx.lineWidth = 2;
            ctx.stroke();

            elevations.forEach(function (e, i) {
                var x = (i / (elevations.length - 1)) * w;
                var y = h - pad - ((e - minE) / range) * (h - pad * 2);
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#00c878';
                ctx.fill();
                ctx.strokeStyle = '#0c1117';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            var asc = 0, desc = 0;
            for (var i = 1; i < elevations.length; i++) {
                var diff = elevations[i] - elevations[i - 1];
                if (diff > 0) asc += diff;
                else desc += Math.abs(diff);
            }

            statsEl.innerHTML =
                '<span>&#8593; ' + Math.round(asc) + ' м</span>' +
                '<span>&#8595; ' + Math.round(desc) + ' м</span>' +
                '<span>min ' + Math.round(minE) + ' м</span>' +
                '<span>max ' + Math.round(maxE) + ' м</span>';
        }
    }

    var trackingActive = false;
    var trackingWatch = null;
    var trackingPoints = [];
    var trackingLine = null;
    var trackingMarker = null;
    var trackingWidget = null;
    var trackingStartTime = null;

    function initTracking() {
        var btn = document.getElementById('btn-tracking');

        btn.addEventListener('click', function () {
            if (trackingActive) return;
            startTracking();
        });

        function startTracking() {
            if (!navigator.geolocation) {
                alert('Geolocation не поддерживается');
                return;
            }

            trackingActive = true;
            trackingPoints = [];
            trackingStartTime = Date.now();
            btn.classList.add('active');

            if (trackingLine) { map.removeLayer(trackingLine); trackingLine = null; }
            if (trackingMarker) { map.removeLayer(trackingMarker); trackingMarker = null; }

            trackingLine = L.polyline([], {
                color: '#00c878', weight: 4, opacity: 0.9,
                lineCap: 'round', lineJoin: 'round',
                dashArray: null
            }).addTo(map);

            trackingWatch = navigator.geolocation.watchPosition(
                function (pos) {
                    var lat = pos.coords.latitude;
                    var lng = pos.coords.longitude;
                    var alt = pos.coords.altitude;
                    var acc = pos.coords.accuracy;
                    var speed = pos.coords.speed;

                    var latlng = L.latLng(lat, lng);
                    trackingPoints.push({ latlng: latlng, alt: alt, acc: acc, speed: speed, time: Date.now() });

                    trackingLine.addLatLng(latlng);

                    if (trackingMarker) map.removeLayer(trackingMarker);
                    trackingMarker = L.circleMarker(latlng, {
                        radius: 7, color: '#00c878', fillColor: '#00c878',
                        fillOpacity: 1, weight: 3, opacity: 1
                    }).addTo(map);

                    if (trackingPoints.length === 1) {
                        map.setView(latlng, 16);
                    } else {
                        map.panTo(latlng, { animate: true });
                    }

                    updateTrackingWidget();
                },
                function (err) {
                    console.warn('GPS error:', err.message);
                },
                { enableHighAccuracy: true, maximumAge: 3000, timeout: 10000 }
            );

            createTrackingWidget();
        }

        function createTrackingWidget() {
            if (trackingWidget) trackingWidget.remove();
            var div = document.createElement('div');
            div.className = 'tracking-widget';
            div.id = 'tracking-widget';
            div.innerHTML =
                '<div class="tw-header">' +
                    '<span class="tw-title">GPS Трекинг</span>' +
                    '<button class="tw-stop" id="tw-stop">Стоп</button>' +
                '</div>' +
                '<div class="tw-stats">' +
                    '<div><div class="tw-stat-label">Время</div><div class="tw-stat-value" id="tw-time">00:00</div></div>' +
                    '<div><div class="tw-stat-label">Расстояние</div><div class="tw-stat-value" id="tw-dist">0 м</div></div>' +
                    '<div><div class="tw-stat-label">Скорость</div><div class="tw-stat-value" id="tw-speed">0 км/ч</div></div>' +
                    '<div><div class="tw-stat-label">Точек</div><div class="tw-stat-value" id="tw-pts">0</div></div>' +
                '</div>' +
                '<div class="tw-actions">' +
                    '<button class="btn btn-primary" id="tw-export-gpx">GPX</button>' +
                    '<button class="btn btn-ghost" id="tw-export-save">На карту</button>' +
                '</div>';
            document.getElementById('map-wrap').appendChild(div);

            document.getElementById('tw-stop').addEventListener('click', stopTracking);
            document.getElementById('tw-export-gpx').addEventListener('click', exportTrackingGPX);
            document.getElementById('tw-export-save').addEventListener('click', saveTrackingToRoute);

            var timerInterval = setInterval(function () {
                if (!trackingActive) { clearInterval(timerInterval); return; }
                var elapsed = Math.floor((Date.now() - trackingStartTime) / 1000);
                var m = Math.floor(elapsed / 60);
                var s = elapsed % 60;
                var el = document.getElementById('tw-time');
                if (el) el.textContent = pad2(m) + ':' + pad2(s);
            }, 1000);
        }

        function updateTrackingWidget() {
            var dist = 0;
            for (var i = 1; i < trackingPoints.length; i++) {
                dist += trackingPoints[i - 1].latlng.distanceTo(trackingPoints[i].latlng);
            }

            var lastSpeed = 0;
            if (trackingPoints.length > 1) {
                var last = trackingPoints[trackingPoints.length - 1];
                if (last.speed !== null && last.speed !== undefined) {
                    lastSpeed = last.speed * 3.6;
                } else {
                    var prev = trackingPoints[trackingPoints.length - 2];
                    var dt = (last.time - prev.time) / 1000;
                    if (dt > 0) lastSpeed = (prev.latlng.distanceTo(last.latlng) / dt) * 3.6;
                }
            }

            var distEl = document.getElementById('tw-dist');
            if (distEl) distEl.textContent = dist > 1000 ? (dist / 1000).toFixed(2) + ' км' : Math.round(dist) + ' м';
            var speedEl = document.getElementById('tw-speed');
            if (speedEl) speedEl.textContent = lastSpeed.toFixed(1) + ' км/ч';
            var ptsEl = document.getElementById('tw-pts');
            if (ptsEl) ptsEl.textContent = trackingPoints.length;
        }

        function stopTracking() {
            trackingActive = false;
            if (trackingWatch) navigator.geolocation.clearWatch(trackingWatch);
            document.getElementById('btn-tracking').classList.remove('active');

            var w = document.getElementById('tracking-widget');
            if (w) w.remove();
        }

        function exportTrackingGPX() {
            if (trackingPoints.length < 2) return;
            var xml = '<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="SURVIVE.MAP">\n  <trk>\n    <name>GPS Track ' + new Date().toLocaleDateString() + '</name>\n    <trkseg>\n';
            trackingPoints.forEach(function (p) {
                xml += '      <trkpt lat="' + p.latlng.lat.toFixed(7) + '" lon="' + p.latlng.lng.toFixed(7) + '">';
                if (p.alt !== null && p.alt !== undefined) xml += '<ele>' + p.alt.toFixed(1) + '</ele>';
                xml += '<time>' + new Date(p.time).toISOString() + '</time>';
                xml += '</trkpt>\n';
            });
            xml += '    </trkseg>\n  </trk>\n</gpx>';
            var blob = new Blob([xml], { type: 'application/gpx+xml' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'survive-track-' + Date.now() + '.gpx';
            a.click();
            URL.revokeObjectURL(a.href);
        }

        function saveTrackingToRoute() {
            if (trackingPoints.length < 2) return;
            clearRoute();
            trackingPoints.forEach(function (p) {
                addRoutePoint(p.latlng);
            });
            stopTracking();
        }
    }

    var solarInitialized = false;

    function initAurora() {
        var btn = document.querySelector('[data-panel="solar"]');
        if (!btn) return;
        btn.addEventListener('click', function () {
            if (!solarInitialized) {
                solarInitialized = true;
                fetchSolar();
                setInterval(fetchSolar, 300000);
            }
        });
    }

    function fetchSolar() {
        var statusEl = document.getElementById('solar-status');
        statusEl.innerHTML = '<div class="aurora-loading">Загрузка данных NOAA...</div>';

        Promise.all([
            fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json').then(function (r) { return r.json(); }).catch(function () { return null; }),
            fetch('https://services.swpc.noaa.gov/json/solar_wind/mag_1m.json').then(function (r) { return r.json(); }).catch(function () { return null; }),
            fetch('https://services.swpc.noaa.gov/json/f107_cm_flux.json').then(function (r) { return r.json(); }).catch(function () { return null; }),
            fetch('https://services.swpc.noaa.gov/json/sunspot_report.json').then(function (r) { return r.json(); }).catch(function () { return null; })
        ]).then(function (results) {
            var kpData = results[0];
            var magData = results[1];
            var fluxData = results[2];
            var sunspotData = results[3];

            var currentKp = 0;
            var forecast = [];

            if (kpData && kpData.length > 1) {
                var now = new Date();
                for (var i = 1; i < kpData.length; i++) {
                    var row = kpData[i];
                    var kp = parseFloat(row[1]);
                    var obs = row[2];
                    var d = new Date(row[0] + 'Z');
                    if (obs === 'observed') currentKp = kp;
                    if (d >= now && forecast.length < 24) {
                        forecast.push({ time: d, kp: kp });
                    }
                }
                if (currentKp === 0 && forecast.length) currentKp = forecast[0].kp;
            }

            var bzMagnitude = 0, windSpeed = 0;
            if (magData && magData.length > 0) {
                var latest = magData[magData.length - 1];
                bzMagnitude = parseFloat(latest.bz_gsm) || 0;
                windSpeed = parseFloat(latest.speed) || 0;
            }

            var f107 = 0;
            if (fluxData && fluxData.length > 0) {
                f107 = parseFloat(fluxData[fluxData.length - 1].flux) || 0;
            }

            var sunspots = 0;
            if (sunspotData && sunspotData.length > 0) {
                sunspots = sunspotData.reduce(function (s, r) { return s + (parseInt(r.Number_of_Sunspots) || 0); }, 0);
            }

            renderSolar(currentKp, bzMagnitude, windSpeed, f107, sunspots, forecast);
        }).catch(function () {
            renderSolar(0, 0, 0, 0, 0, []);
        });
    }

    function renderSolar(kp, bz, wind, f107, sunspots, forecast) {
        var el = document.getElementById('solar-status');
        var kpColor = kp >= 5 ? '#ef4444' : kp >= 3 ? '#eab308' : '#22c55e';
        var kpDesc = kp >= 9 ? 'G5 — Экстремальная буря' : kp >= 7 ? 'G3 — Сильная буря' : kp >= 5 ? 'G1 — Магнитная буря' : kp >= 3 ? 'Активный' : kp >= 1 ? 'Спокойный' : 'Очень тихо';
        var stormAlert = kp >= 5;

        var html = '<div class="solar-alert" style="background:' + kpColor + '20;color:' + kpColor + '">Kp ' + kp.toFixed(1) + ' \u2014 ' + kpDesc + '</div>';

        html += '<div class="solar-grid">';
        html += '<div class="solar-card"><div class="solar-card-label">Солнечные пятна</div><div class="solar-card-value">' + sunspots + '</div></div>';
        html += '<div class="solar-card"><div class="solar-card-label">Поток F10.7</div><div class="solar-card-value">' + f107.toFixed(0) + ' <span class="solar-card-unit">sfu</span></div></div>';
        html += '<div class="solar-card"><div class="solar-card-label">Bz (GSM)</div><div class="solar-card-value" style="color:' + (bz < -5 ? '#ef4444' : '#22c55e') + '">' + bz.toFixed(1) + ' <span class="solar-card-unit">nT</span></div></div>';
        html += '<div class="solar-card"><div class="solar-card-label">Солнечный ветер</div><div class="solar-card-value">' + wind.toFixed(0) + ' <span class="solar-card-unit">км/с</span></div></div>';
        html += '</div>';

        if (stormAlert) {
            html += '<div class="solar-alert" style="background:rgba(239,68,68,0.15);color:#ef4444;margin-top:8px">\u26a0 Магнитная буря! Возможны сбои связи и GPS, северное сияние до средних широт</div>';
        }

        if (forecast.length) {
            html += '<div class="solar-forecast-title">Прогноз Kp на 3 дня</div>';
            var shown = 0;
            forecast.forEach(function (f) {
                if (shown >= 18) return;
                shown++;
                var c = f.kp >= 5 ? '#ef4444' : f.kp >= 3 ? '#eab308' : '#22c55e';
                var pct = Math.min(100, (f.kp / 9) * 100);
                var h = f.time.getUTCHours();
                var d = f.time.getUTCDate();
                html += '<div class="solar-forecast-row">' +
                    '<span class="solar-f-time">' + pad2(h) + ':00</span>' +
                    '<div class="solar-f-bar"><div class="solar-f-fill" style="width:' + pct + '%;background:' + c + '"></div></div>' +
                    '<span class="solar-f-val" style="color:' + c + '">' + f.kp.toFixed(1) + '</span>' +
                    '</div>';
            });
        }

        html += '<p class="hint" style="margin-top:8px">Источник: NOAA SWPC (реальные данные)</p>';
        el.innerHTML = html;
    }

    var weatherTimeout = null;

    function initWeather() {
        map.on('moveend', function () {
            clearTimeout(weatherTimeout);
            weatherTimeout = setTimeout(fetchWeather, 800);
        });
        fetchWeather();
    }

    function fetchWeather() {
        var center = map.getCenter();
        var lat = center.lat.toFixed(4);
        var lng = center.lng.toFixed(4);
        document.getElementById('weather-location').textContent = lat + '\u00b0, ' + lng + '\u00b0';

        var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lng + '&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_gusts_10m,cloud_cover,precipitation,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=auto&forecast_days=5';

        document.getElementById('weather-loading').style.display = '';
        document.getElementById('weather-main').style.display = 'none';

        fetch(url).then(function (r) { return r.json(); }).then(function (data) {
            if (!data.current) return;
            var c = data.current;

            var temp = c.temperature_2m;
            var wind = c.wind_speed_10m;
            var gust = c.wind_gusts_10m;
            var hum = c.relative_humidity_2m;
            var pres = c.surface_pressure;
            var cloud = c.cloud_cover;
            var rain = c.precipitation;
            var code = c.weather_code;

            document.getElementById('weather-temp').textContent = (temp > 0 ? '+' : '') + Math.round(temp) + '\u00b0';
            document.getElementById('weather-icon').textContent = weatherEmoji(code);
            document.getElementById('w-wind').textContent = wind.toFixed(1) + ' м/с';
            document.getElementById('w-gust').textContent = gust.toFixed(1) + ' м/с';
            document.getElementById('w-hum').textContent = hum + '%';
            document.getElementById('w-pres').textContent = Math.round(pres) + ' гПа';
            document.getElementById('w-cloud').textContent = cloud + '%';
            document.getElementById('w-rain').textContent = rain + ' мм';

            var tempEl = document.getElementById('weather-temp');
            if (temp < -10) tempEl.style.color = '#60a5fa';
            else if (temp < 0) tempEl.style.color = '#93c5fd';
            else if (temp > 30) tempEl.style.color = '#f87171';
            else if (temp > 20) tempEl.style.color = '#fbbf24';
            else tempEl.style.color = 'var(--text-bright)';

            document.getElementById('weather-loading').style.display = 'none';
            document.getElementById('weather-main').style.display = '';

            if (data.daily) {
                renderForecast(data.daily);
            }
        }).catch(function () {
            document.getElementById('weather-loading').style.display = 'none';
        });
    }

    function renderForecast(daily) {
        var list = document.getElementById('forecast-list');
        var title = document.getElementById('forecast-title');
        title.style.display = '';

        var tMin = Math.min.apply(null, daily.temperature_2m_min);
        var tMax = Math.max.apply(null, daily.temperature_2m_max);
        var range = tMax - tMin || 1;

        var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        var html = '';

        for (var i = 0; i < daily.time.length; i++) {
            var d = new Date(daily.time[i]);
            var dayName = i === 0 ? 'Сег' : i === 1 ? 'Зав' : days[d.getDay()];
            var tmin = daily.temperature_2m_min[i];
            var tmax = daily.temperature_2m_max[i];
            var code = daily.weather_code[i];
            var rain = daily.precipitation_sum[i];
            var wind = daily.wind_speed_10m_max[i];

            var barLeft = ((tmin - tMin) / range) * 100;
            var barWidth = ((tmax - tmin) / range) * 100;

            html += '<div class="forecast-row">' +
                '<span class="forecast-day">' + dayName + '</span>' +
                '<span class="forecast-icon">' + weatherEmoji(code) + '</span>' +
                '<span class="forecast-tmin">' + Math.round(tmin) + '\u00b0</span>' +
                '<div class="forecast-bar"><div class="forecast-bar-fill" style="left:' + barLeft + '%;width:' + Math.max(barWidth, 5) + '%"></div></div>' +
                '<span class="forecast-tmax">' + Math.round(tmax) + '\u00b0</span>' +
                '<span class="forecast-info">' + (rain > 0 ? rain.toFixed(1) + '\u{1F4A7}' : Math.round(wind) + 'm/s') + '</span>' +
                '</div>';
        }

        list.innerHTML = html;
    }

    function weatherEmoji(code) {
        if (code === 0) return '\u2600';
        if (code <= 3) return '\u26C5';
        if (code <= 48) return '\u{1F324}';
        if (code <= 57) return '\u{1F327}';
        if (code <= 67) return '\u{1F328}';
        if (code <= 75) return '\u2744';
        if (code <= 77) return '\u{1F328}';
        if (code <= 82) return '\u{1F327}';
        if (code <= 86) return '\u2744';
        if (code <= 99) return '\u26C8';
        return '\u2600';
    }

    var bookmarks = JSON.parse(localStorage.getItem('survive-bookmarks') || '[]');

    function initBookmarks() {
        renderBookmarks();

        document.getElementById('bookmarks-clear').addEventListener('click', function () {
            if (!bookmarks.length) return;
            if (confirm('Удалить все закладки?')) {
                bookmarks = [];
                saveBookmarks();
                renderBookmarks();
            }
        });

        map.on('contextmenu', function (e) {
            e.originalEvent.preventDefault();
            showContextMenu(e);
        });

        var longPressTimer = null;
        var longPressFired = false;
        var mapWrap = document.getElementById('map-wrap');

        mapWrap.addEventListener('touchstart', function (e) {
            if (e.touches.length !== 1) return;
            longPressFired = false;
            var touch = e.touches[0];
            longPressTimer = setTimeout(function () {
                longPressFired = true;
                var latlng = map.containerPointToLatLng(L.point(touch.clientX - mapWrap.getBoundingClientRect().left, touch.clientY - mapWrap.getBoundingClientRect().top));
                showContextMenu({ latlng: latlng, originalEvent: e });
            }, 500);
        }, { passive: true });

        mapWrap.addEventListener('touchmove', function () {
            clearTimeout(longPressTimer);
        }, { passive: true });

        mapWrap.addEventListener('touchend', function () {
            clearTimeout(longPressTimer);
        }, { passive: true });
    }

    function showContextMenu(e) {
        var latlng = e.latlng;
        var existing = document.querySelector('.map-ctx-menu');
        if (existing) existing.remove();

        var menu = document.createElement('div');
        menu.className = 'map-ctx-menu';
        menu.style.cssText = 'position:absolute;z-index:2000;background:var(--bg-elevated);backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:var(--radius);padding:4px;box-shadow:var(--shadow);min-width:180px;font-family:var(--font);';

        var containerPoint = map.latLngToContainerPoint(latlng);
        menu.style.left = (containerPoint.x + 10) + 'px';
        menu.style.top = (containerPoint.y + 10) + 'px';

        var items = [
            { icon: '&#128278;', text: 'Сохранить в закладки', action: function () { addBookmark(latlng); } },
            { icon: '&#128205;', text: 'Поставить маркер', action: function () { createCustomMarker(latlng); } },
            { icon: '&#128207;', text: 'Копировать координаты', action: function () { copyCoords(latlng); } },
            { icon: '&#10148;', text: 'Маршрут: добавить точку', action: function () { addRoutePoint(latlng); } },
            { icon: '&#128465;', text: 'Удалить все маркеры', action: function () { clearAllMarkers(); } },
            { icon: '&#128465;', text: 'Очистить маршрут', action: function () { clearRoute(); } }
        ];

        items.forEach(function (item) {
            var btn = document.createElement('button');
            btn.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;background:none;border:none;color:var(--text);font-family:var(--font);font-size:12px;cursor:pointer;border-radius:var(--radius-xs);transition:background 0.15s;';
            btn.innerHTML = '<span style="font-size:14px">' + item.icon + '</span> ' + item.text;
            btn.addEventListener('mouseenter', function () { btn.style.background = 'var(--bg-hover)'; });
            btn.addEventListener('mouseleave', function () { btn.style.background = 'none'; });
            btn.addEventListener('click', function () {
                item.action();
                menu.remove();
            });
            menu.appendChild(btn);
        });

        document.getElementById('map-wrap').appendChild(menu);

        var closeHandler = function (ev) {
            if (!menu.contains(ev.target)) {
                menu.remove();
                document.removeEventListener('click', closeHandler);
            }
        };
        setTimeout(function () { document.addEventListener('click', closeHandler); }, 10);
    }

    function addBookmark(latlng) {
        var name = prompt('Название закладки:', latlng.lat.toFixed(5) + ', ' + latlng.lng.toFixed(5));
        if (!name) return;
        var bm = {
            id: Date.now(),
            name: name,
            lat: latlng.lat,
            lng: latlng.lng,
            zoom: map.getZoom(),
            ts: Date.now()
        };
        bookmarks.push(bm);
        saveBookmarks();
        renderBookmarks();
    }

    function saveBookmarks() {
        localStorage.setItem('survive-bookmarks', JSON.stringify(bookmarks));
    }

    function renderBookmarks() {
        var list = document.getElementById('bookmarks-list');
        var empty = document.getElementById('bookmarks-empty');
        var badge = document.getElementById('bookmarks-badge');

        if (!bookmarks.length) {
            list.innerHTML = '';
            empty.style.display = '';
            badge.style.display = 'none';
            document.getElementById('bookmark-actions').style.display = 'none';
            return;
        }

        empty.style.display = 'none';
        badge.style.display = '';
        badge.textContent = bookmarks.length;
        document.getElementById('bookmark-actions').style.display = '';

        list.innerHTML = bookmarks.map(function (bm, i) {
            return '<div class="bookmark-item" data-idx="' + i + '">' +
                '<span class="bookmark-icon">&#128278;</span>' +
                '<div class="bookmark-info">' +
                    '<div class="bookmark-name">' + escHtml(bm.name) + '</div>' +
                    '<div class="bookmark-coords">' + bm.lat.toFixed(5) + ', ' + bm.lng.toFixed(5) + ' · z' + bm.zoom + '</div>' +
                '</div>' +
                '<button class="bookmark-del" data-idx="' + i + '" title="Удалить"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
            '</div>';
        }).join('');

        list.querySelectorAll('.bookmark-item').forEach(function (el) {
            el.addEventListener('click', function (ev) {
                if (ev.target.closest('.bookmark-del')) return;
                var idx = parseInt(this.dataset.idx);
                var bm = bookmarks[idx];
                if (bm) map.setView([bm.lat, bm.lng], bm.zoom);
            });
        });

        list.querySelectorAll('.bookmark-del').forEach(function (btn) {
            btn.addEventListener('click', function (ev) {
                ev.stopPropagation();
                var idx = parseInt(this.dataset.idx);
                bookmarks.splice(idx, 1);
                saveBookmarks();
                renderBookmarks();
            });
        });
    }

    function copyCoords(latlng) {
        var text = latlng.lat.toFixed(6) + ', ' + latlng.lng.toFixed(6);
        navigator.clipboard.writeText(text);
    }

    function escHtml(s) {
        var d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }

    function initImport() {
        var dropZone = document.getElementById('import-drop');
        var fileInput = document.getElementById('import-file');
        var importBtn = document.getElementById('import-btn');
        var listEl = document.getElementById('import-list');

        importBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            fileInput.click();
        });

        dropZone.addEventListener('click', function () { fileInput.click(); });

        dropZone.addEventListener('dragover', function (e) {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });

        dropZone.addEventListener('dragleave', function () {
            dropZone.classList.remove('dragover');
        });

        dropZone.addEventListener('drop', function (e) {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
        });

        fileInput.addEventListener('change', function () {
            if (this.files.length) handleFile(this.files[0]);
            this.value = '';
        });

        function handleFile(file) {
            var name = file.name.toLowerCase();
            var reader = new FileReader();
            reader.onload = function (e) {
                var text = e.target.result;
                if (name.endsWith('.gpx')) parseGPX(text, file.name);
                else if (name.endsWith('.kml')) parseKML(text, file.name);
                else if (name.endsWith('.geojson') || name.endsWith('.json')) parseGeoJSON(text, file.name);
            };
            reader.readAsText(file);
        }

        function parseGPX(text, fileName) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(text, 'text/xml');
            var tracks = xml.querySelectorAll('trk');
            var routes = xml.querySelectorAll('rte');
            var waypoints = xml.querySelectorAll('wpt');

            tracks.forEach(function (trk, idx) {
                var pts = trk.querySelectorAll('trkpt');
                var coords = [];
                pts.forEach(function (pt) {
                    var lat = parseFloat(pt.getAttribute('lat'));
                    var lng = parseFloat(pt.getAttribute('lon'));
                    if (!isNaN(lat) && !isNaN(lng)) coords.push([lat, lng]);
                });
                if (coords.length > 1) {
                    var name = trk.querySelector('name') ? trk.querySelector('name').textContent : fileName.replace('.gpx', '') + ' #' + (idx + 1);
                    addTrack(coords, name);
                }
            });

            routes.forEach(function (rte, idx) {
                var pts = rte.querySelectorAll('rtept');
                var coords = [];
                pts.forEach(function (pt) {
                    var lat = parseFloat(pt.getAttribute('lat'));
                    var lng = parseFloat(pt.getAttribute('lon'));
                    if (!isNaN(lat) && !isNaN(lng)) coords.push([lat, lng]);
                });
                if (coords.length > 1) {
                    var name = rte.querySelector('name') ? rte.querySelector('name').textContent : 'Route #' + (idx + 1);
                    addTrack(coords, name);
                }
            });

            if (waypoints.length) {
                var wptGroup = L.layerGroup().addTo(map);
                waypoints.forEach(function (wpt) {
                    var lat = parseFloat(wpt.getAttribute('lat'));
                    var lng = parseFloat(wpt.getAttribute('lon'));
                    if (!isNaN(lat) && !isNaN(lng)) {
                        var name = wpt.querySelector('name') ? wpt.querySelector('name').textContent : 'WP';
                        L.marker([lat, lng]).bindPopup('<b>' + escHtml(name) + '</b>').addTo(wptGroup);
                    }
                });
                importedTracks.push({ name: fileName + ' (WP)', color: '#aaa', dist: 0, line: wptGroup });
                renderImportList();
            }
        }

        function parseKML(text, fileName) {
            var parser = new DOMParser();
            var xml = parser.parseFromString(text, 'text/xml');
            var placemarks = xml.querySelectorAll('Placemark');

            placemarks.forEach(function (pm) {
                var ls = pm.querySelector('LineString');
                if (ls) {
                    var coordsText = ls.querySelector('coordinates').textContent.trim();
                    var coords = [];
                    coordsText.split(/\s+/).forEach(function (c) {
                        var parts = c.split(',');
                        var lng = parseFloat(parts[0]);
                        var lat = parseFloat(parts[1]);
                        if (!isNaN(lat) && !isNaN(lng)) coords.push([lat, lng]);
                    });
                    if (coords.length > 1) {
                        var name = pm.querySelector('name') ? pm.querySelector('name').textContent : fileName;
                        addTrack(coords, name);
                    }
                }
            });
        }

        function parseGeoJSON(text, fileName) {
            var data = JSON.parse(text);
            var features = data.features || [data];

            features.forEach(function (f, idx) {
                if (!f.geometry) return;
                if (f.geometry.type === 'LineString') {
                    var coords = f.geometry.coordinates.map(function (c) { return [c[1], c[0]]; });
                    if (coords.length > 1) {
                        var name = f.properties && f.properties.name ? f.properties.name : fileName + ' #' + (idx + 1);
                        addTrack(coords, name);
                    }
                } else if (f.geometry.type === 'MultiLineString') {
                    f.geometry.coordinates.forEach(function (line, li) {
                        var coords = line.map(function (c) { return [c[1], c[0]]; });
                        if (coords.length > 1) {
                            var name = (f.properties && f.properties.name ? f.properties.name : fileName) + ' #' + (li + 1);
                            addTrack(coords, name);
                        }
                    });
                }
            });
        }

        var trackColors = ['#00c878', '#3b9eff', '#f97316', '#a855f7', '#eab308', '#ff4d4f', '#ec4899', '#14b8a6'];
        var colorIdx = 0;

        function addTrack(coords, name) {
            var color = trackColors[colorIdx % trackColors.length];
            colorIdx++;

            var line = L.polyline(coords, {
                color: color, weight: 3, opacity: 0.8,
                lineCap: 'round', lineJoin: 'round'
            }).addTo(map);

            var dist = 0;
            for (var i = 1; i < coords.length; i++) {
                dist += L.latLng(coords[i - 1]).distanceTo(L.latLng(coords[i]));
            }

            var id = Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            var track = { id: id, name: name, line: line, coords: coords, dist: dist, color: color };
            importedTracks.push(track);

            map.fitBounds(line.getBounds(), { padding: [30, 30] });

            line.bindPopup('<div class="marker-popup"><h4>' + escHtml(name) + '</h4><p>' + (dist > 1000 ? (dist / 1000).toFixed(1) + ' км' : Math.round(dist) + ' м') + ', ' + coords.length + ' точек</p></div>');

            renderImportList();
        }

        function renderImportList() {
            listEl.innerHTML = importedTracks.map(function (t, i) {
                var d = t.dist > 1000 ? (t.dist / 1000).toFixed(1) + ' км' : Math.round(t.dist) + ' м';
                return '<div class="import-item">' +
                    '<span class="import-item-color" style="background:' + t.color + '"></span>' +
                    '<span class="import-item-name">' + escHtml(t.name) + '</span>' +
                    '<span class="import-item-info">' + d + '</span>' +
                    '<button class="import-item-del" data-idx="' + i + '" title="Удалить"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>' +
                    '</div>';
            }).join('');

            listEl.querySelectorAll('.import-item-del').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var idx = parseInt(this.dataset.idx);
                    map.removeLayer(importedTracks[idx].line);
                    importedTracks.splice(idx, 1);
                    renderImportList();
                });
            });
        }
    }

    function initSunMoon() {
        map.on('moveend', updateSunMoon);
        updateSunMoon();
    }

    function updateSunMoon() {
        var center = map.getCenter();
        var lat = center.lat;
        var lng = center.lng;
        var now = new Date();

        document.getElementById('sm-location').textContent = lat.toFixed(4) + '\u00b0, ' + lng.toFixed(4) + '\u00b0';

        var sunTimes = calcSunTimes(now, lat, lng);
        var sunrise = sunTimes.rise;
        var sunset = sunTimes.set;

        if (sunrise && sunset) {
            var riseH = pad2(sunrise.getHours()) + ':' + pad2(sunrise.getMinutes());
            var setH = pad2(sunset.getHours()) + ':' + pad2(sunset.getMinutes());
            var dayMin = (sunset - sunrise) / 60000;
            var dayH = Math.floor(dayMin / 60);
            var dayM = Math.round(dayMin % 60);

            document.getElementById('sm-sunrise').textContent = riseH;
            document.getElementById('sm-sunset').textContent = setH;
            document.getElementById('sm-daylen').textContent = dayH + '\u0447 ' + pad2(dayM) + '\u043c';
            document.getElementById('sm-label-rise').textContent = '\u2600 ' + riseH;
            document.getElementById('sm-label-set').textContent = '\u2193 ' + setH;

            var totalMs = sunset - sunrise;
            var elapsedMs = now - sunrise;
            var pct = Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));
            var sunBar = document.getElementById('sm-progress-sun');
            if (now < sunrise) {
                sunBar.style.width = '0%';
                sunBar.style.left = '0%';
            } else if (now > sunset) {
                sunBar.style.width = '100%';
                sunBar.style.left = '0%';
            } else {
                sunBar.style.width = pct + '%';
                sunBar.style.left = '0%';
            }
            var nowLabel = document.getElementById('sm-label-now');
            if (now < sunrise) {
                nowLabel.textContent = '\u2190 до восхода';
            } else if (now > sunset) {
                nowLabel.textContent = 'закат прошел \u2192';
            } else {
                nowLabel.textContent = pad2(now.getHours()) + ':' + pad2(now.getMinutes());
            }
        } else {
            document.getElementById('sm-sunrise').textContent = sunTimes.polar ? 'Полярный' : '--:--';
            document.getElementById('sm-sunset').textContent = sunTimes.polar ? sunTimes.polar : '--:--';
            document.getElementById('sm-daylen').textContent = sunTimes.polar === 'день' ? '24ч' : '0ч';
        }

        var moon = calcMoonPhase(now);
        document.getElementById('sm-moon').textContent = moon.name;
        document.getElementById('sm-moon-visual').textContent = moon.emoji;
    }

    function calcSunTimes(date, lat, lng) {
        var dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        var declination = -23.45 * Math.cos((2 * Math.PI / 365) * (dayOfYear + 10));
        var decRad = declination * Math.PI / 180;
        var latRad = lat * Math.PI / 180;

        var cosHA = (Math.sin(-0.83 * Math.PI / 180) - Math.sin(latRad) * Math.sin(decRad)) / (Math.cos(latRad) * Math.cos(decRad));

        if (cosHA > 1) return { rise: null, set: null, polar: 'ночь' };
        if (cosHA < -1) return { rise: null, set: null, polar: 'день' };

        var HA = Math.acos(cosHA) * 180 / Math.PI;
        var solarNoonMin = 720 - 4 * lng;
        var riseMin = solarNoonMin - HA * 4;
        var setMin = solarNoonMin + HA * 4;

        var tzOffset = -date.getTimezoneOffset();
        var utcOffset = tzOffset;

        var riseDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, riseMin + utcOffset);
        var setDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, setMin + utcOffset);

        return { rise: riseDate, set: setDate };
    }

    function calcMoonPhase(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        if (month < 3) { year--; month += 12; }
        month++;
        var c = 365.25 * year;
        var e = 30.6 * month;
        var jd = c + e + day - 694039.09;
        jd /= 29.5305882;
        var phase = jd - Math.floor(jd);
        var age = Math.round(phase * 29.53);

        var phases = [
            { name: 'Новолуние', emoji: '\ud83c\udf11' },
            { name: 'Растущий серп', emoji: '\ud83c\udf12' },
            { name: 'Первая четверть', emoji: '\ud83c\udf13' },
            { name: 'Растущая Луна', emoji: '\ud83c\udf14' },
            { name: 'Полнолуние', emoji: '\ud83c\udf15' },
            { name: 'Убывающая Луна', emoji: '\ud83c\udf16' },
            { name: 'Последняя четверть', emoji: '\ud83c\udf17' },
            { name: 'Убывающий серп', emoji: '\ud83c\udf18' }
        ];

        var idx = Math.round(phase * 8) % 8;
        return { name: phases[idx].name + ' (' + age + '/29)', emoji: phases[idx].emoji, age: age };
    }

    function pad2(n) { return n < 10 ? '0' + n : '' + n; }

    var magDeclination = 0;

    function calcMagneticDeclination(lat, lng) {
        if (typeof geomag !== 'undefined' && geomag.field) {
            return geomag.field(lat, lng, 0).declination;
        }
        return 0;
    }

    function initCompass() {
        var btn = document.getElementById('btn-compass');
        var widget = document.getElementById('compass-widget');
        var ring = document.getElementById('compass-ring');
        var degEl = document.getElementById('compass-deg');
        var dirEl = document.getElementById('compass-dir');
        var declEl = document.getElementById('compass-decl');
        var magLine = document.getElementById('compass-mag-line');

        btn.addEventListener('click', function () {
            compassActive = !compassActive;
            btn.classList.toggle('active', compassActive);
            widget.style.display = compassActive ? 'flex' : 'none';
            if (compassActive) {
                updateDeclination();
                requestDeviceOrientation();
                updateCompass(0);
                startCompassTick();
            } else {
                stopCompassTick();
            }
        });

        function updateDeclination() {
            var c = map.getCenter();
            magDeclination = calcMagneticDeclination(c.lat, c.lng);
            var sign = magDeclination >= 0 ? '+' : '';
            declEl.innerHTML = 'Склонение: <span style="color:#3b82f6;font-weight:600">' + sign + magDeclination.toFixed(1) + '\u00b0</span>' +
                '<span style="margin-left:4px;font-size:8px;color:var(--text-dim)">(' + (magDeclination >= 0 ? 'восточное' : 'западное') + ')</span>';

            var declNorm = ((magDeclination % 360) + 360) % 360;
            var rad = declNorm * Math.PI / 180;
            var r = 42;
            var cx = 60, cy = 60;
            var x2 = cx + r * Math.sin(rad);
            var y2 = cy - r * Math.cos(rad);
            magLine.setAttribute('x2', x2.toFixed(1));
            magLine.setAttribute('y2', y2.toFixed(1));
            magLine.setAttribute('opacity', '0.8');
        }

        function requestDeviceOrientation() {
            if (typeof DeviceOrientationEvent !== 'undefined' &&
                typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission().then(function (state) {
                    if (state === 'granted') bindOrientation();
                }).catch(function () {});
            } else if ('DeviceOrientationEvent' in window) {
                bindOrientation();
            }
        }

        function bindOrientation() {
            window.addEventListener('deviceorientation', function (e) {
                if (e.alpha !== null) {
                    deviceHeading = e.alpha;
                }
            }, true);
        }

        function updateCompass(bearing) {
            var heading = deviceHeading !== null ? (360 - deviceHeading) : bearing;
            heading = ((heading % 360) + 360) % 360;
            ring.style.transform = 'rotate(' + (-heading) + 'deg)';
            degEl.textContent = Math.round(heading) + '\u00b0';
            dirEl.textContent = headingToDir(heading);
        }

        function headingToDir(h) {
            var dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
            return dirs[Math.round(h / 22.5) % 16];
        }

        var compassTickInterval = null;

        function startCompassTick() {
            if (compassTickInterval) return;
            compassTickInterval = setInterval(function () {
                if (deviceHeading !== null) {
                    updateCompass(0);
                } else {
                    var center = map.getCenter();
                    var north = L.latLng(center.lat + 0.01, center.lng);
                    var bearing = computeBearing(center, north);
                    updateCompass(bearing);
                }
            }, 200);
        }

        function stopCompassTick() {
            if (compassTickInterval) {
                clearInterval(compassTickInterval);
                compassTickInterval = null;
            }
        }

        map.on('move', function () {
            if (!compassActive || deviceHeading !== null) return;
            var center = map.getCenter();
            var north = L.latLng(center.lat + 0.01, center.lng);
            var bearing = computeBearing(center, north);
            updateCompass(bearing);
            updateDeclination();
        });
    }

    function computeBearing(from, to) {
        var dLng = (to.lng - from.lng) * Math.PI / 180;
        var lat1 = from.lat * Math.PI / 180;
        var lat2 = to.lat * Math.PI / 180;
        var y = Math.sin(dLng) * Math.cos(lat2);
        var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
        return ((Math.atan2(y, x) * 180 / Math.PI) + 360) % 360;
    }

    L.control.scale({ imperial: false, metric: true }).addTo(map);

    function initShare() {
        document.getElementById('btn-share').addEventListener('click', function () {
            var c = map.getCenter();
            var z = map.getZoom();
            var hash = '#' + c.lat.toFixed(5) + '/' + c.lng.toFixed(5) + '/' + z;
            var url = location.origin + location.pathname + hash;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url).then(function () {
                    showToast('Ссылка скопирована');
                });
            } else {
                prompt('Скопируйте ссылку:', url);
            }
        });
    }

    function initHash() {
        function loadHash() {
            var h = location.hash.slice(1);
            if (!h) return false;
            var parts = h.split('/');
            if (parts.length === 3) {
                var lat = parseFloat(parts[0]);
                var lng = parseFloat(parts[1]);
                var z = parseInt(parts[2]);
                if (!isNaN(lat) && !isNaN(lng) && !isNaN(z)) {
                    map.setView([lat, lng], z);
                    return true;
                }
            }
            return false;
        }

        loadHash();

        map.on('moveend', function () {
            var c = map.getCenter();
            var z = map.getZoom();
            history.replaceState(null, '', '#' + c.lat.toFixed(5) + '/' + c.lng.toFixed(5) + '/' + z);
        });
    }

    function showToast(msg) {
        var t = document.createElement('div');
        t.textContent = msg;
        t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--accent);color:#000;padding:8px 20px;border-radius:var(--radius);font-size:13px;font-family:var(--font);font-weight:600;z-index:9999;box-shadow:var(--shadow);transition:opacity 0.3s;';
        document.body.appendChild(t);
        setTimeout(function () { t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 300); }, 2000);
    }

    function initDangers() {
        var DANGERS_DATA = {
            winter: {
                name: 'Зима (дек — фев)',
                icon: '&#10052;',
                color: '#67e8f9',
                dangers: [
                    { name: 'Обморожение', severity: 'critical', desc: 'От -15°C открытие участки за 10 мин. Конечности, нос, уши. Признаки: онемение, побеление кожи.' },
                    { name: 'Гипотермия', severity: 'critical', desc: 'Температура тела ниже 35°C. Смерть без укрытия за 3-6 часов. Дрожь, спутанность сознания.' },
                    { name: 'Лавины', severity: 'high', desc: 'Склоны 30-45°. После снегопада 48 часов. 90% жертв сами спровоцировали сход.' },
                    { name: 'Провал под лёд', severity: 'high', desc: 'Лёд < 7 см опасен. Река — 4 см, озеро — 10 см. Выбираться лёжа, ползком.' },
                    { name: 'Угарный газ', severity: 'high', desc: 'Печка в палатке без вытяжки. Головная боль, тошнота, сонливость = первые признаки.' },
                    { name: 'Волки', severity: 'medium', desc: 'Стая зимой агрессивнее. Дефицит пищи. Не убегать. Зрительный контакт, палка, огонь.' },
                    { name: 'Пурга / метель', severity: 'high', desc: 'Видимость 0. Дезориентация за 50м от укрытия. Остановиться, выкопать снежную яму.' }
                ]
            },
            spring: {
                name: 'Весна (мар — май)',
                icon: '&#127793;',
                color: '#22c55e',
                dangers: [
                    { name: 'Половодье', severity: 'high', desc: 'Подъём воды на 2-8м. Лёд ломает мосты. Не ставить лагерь в низине у реки.' },
                    { name: 'Клещи', severity: 'critical', desc: 'Активны с +5°C. Энцефалит, боррелиоз. Осмотр каждые 2 часа. Удалить в первые 24ч.' },
                    { name: 'Гололёд', severity: 'medium', desc: 'Переломы, травмы. Температура около 0°C + дождь. Подошва с протектором.' },
                    { name: 'Змеи', severity: 'medium', desc: 'Гадюки просыпаются. Укус — боль, отёк, некроз. Не кричать, не резать, иммобилизация.' },
                    { name: 'Тонкий лёд', severity: 'high', desc: 'Апрельский лёд — обманчиво крепкий. Не переходить реки, если лёд потемнел.' },
                    { name: 'Бешенство', severity: 'critical', desc: 'Лисы, еноты, летучие мыши. Укус = немедленно к врачу. Прививка в первые 72ч.' }
                ]
            },
            summer: {
                name: 'Лето (июн — авг)',
                icon: '&#9728;',
                color: '#f59e0b',
                dangers: [
                    { name: 'Клещи', severity: 'critical', desc: 'Пик активности июнь-июль. Энцефалит: температура, головная боль, паралич.' },
                    { name: 'Пожары', severity: 'high', desc: 'Торфяные горят под землёй. Дым = токсично. Идти перпендикулярно ветру.' },
                    { name: 'Тепловой удар', severity: 'high', desc: '>35°C + влажность. Температура 40+, потеря сознания. В тень, вода на голову.' },
                    { name: 'Грозы', severity: 'medium', desc: 'Молния бьёт в самое высокое. Не под деревьями. Присесть на корточки, ноги вместе.' },
                    { name: 'Змеи', severity: 'medium', desc: 'Гадюки активны. Камни, дрова — сначала тронуть палкой. Сыворотка в аптечке.' },
                    { name: 'Комары / слепни', severity: 'low', desc: 'Не опасны, но истощают. ДЭТА, дым, сетка. Слепни переносят сибирскую язву.' },
                    { name: 'Ядовитые растения', severity: 'medium', desc: 'Борщевик Сосновского — ожоги 3 степени на солнце. Вёх — смертельно ядовит.' },
                    { name: 'Медведь', severity: 'high', desc: 'Встреча на ягодниках. Не убегать. Говорить спокойно. Место для него = уступить.' }
                ]
            },
            autumn: {
                name: 'Осень (сен — ноя)',
                icon: '&#127810;',
                color: '#f97316',
                dangers: [
                    { name: 'Клещи', severity: 'high', desc: 'Вторая волна активности сентябрь-октябрь. Тёплая осень = клещи до ноября.' },
                    { name: 'Листья / слякоть', severity: 'low', desc: 'Скользко. Аналог гололёда. Ботинки с протектором. Треккинговые палки.' },
                    { name: 'Туман', severity: 'medium', desc: 'Видимость < 50м. Потеря ориентации. Компас обязателен, GPS быстро садится.' },
                    { name: 'Ранние заморозки', severity: 'medium', desc: '-5°C ночью в сентябре. Гипотермия если без спальника. Фольга NLF в кармане.' },
                    { name: 'Паводки', severity: 'medium', desc: 'Дожди размывают дороги и мосты. Не переходить вброд выше колена.' },
                    { name: 'Бешенство', severity: 'critical', desc: 'Осенью животные мигрируют. Любое укушенное животное = угроза.' }
                ]
            }
        };

        var month = new Date().getMonth();
        var seasonKey = month >= 2 && month <= 4 ? 'spring' : month >= 5 && month <= 7 ? 'summer' : month >= 8 && month <= 10 ? 'autumn' : 'winter';
        var season = DANGERS_DATA[seasonKey];

        var nameEl = document.getElementById('dangers-season-name');
        if (nameEl) nameEl.innerHTML = season.icon + ' ' + season.name;

        var listEl = document.getElementById('dangers-list');
        if (!listEl) return;

        listEl.innerHTML = season.dangers.map(function (d) {
            var sevColors = { critical: '#ef4444', high: '#f97316', medium: '#eab308', low: '#22c55e' };
            var sevNames = { critical: 'Критично', high: 'Высокая', medium: 'Средняя', low: 'Низкая' };
            var c = sevColors[d.severity] || '#6b7280';
            return '<div style="padding:8px 10px;background:var(--bg-hover);border-radius:var(--radius-sm);border-left:3px solid ' + c + '">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">' +
                '<span style="font-size:12px;font-weight:600;color:var(--text)">' + escHtml(d.name) + '</span>' +
                '<span style="font-size:9px;padding:2px 6px;border-radius:var(--radius-xs);background:' + c + '20;color:' + c + ';font-weight:600;text-transform:uppercase">' + sevNames[d.severity] + '</span>' +
                '</div>' +
                '<div style="font-size:11px;color:var(--text-dim);line-height:1.4">' + escHtml(d.desc) + '</div>' +
                '</div>';
        }).join('');

        var allSeasons = ['winter', 'spring', 'summer', 'autumn'];
        var tabsHtml = '<div style="display:flex;gap:4px;margin-top:12px;margin-bottom:6px">' + allSeasons.map(function (k) {
            var s = DANGERS_DATA[k];
            var active = k === seasonKey;
            return '<button class="dangers-season-tab" data-season="' + k + '" style="flex:1;padding:4px 6px;font-size:10px;border:1px solid ' + (active ? s.color : 'var(--border)') + ';background:' + (active ? s.color + '20' : 'transparent') + ';color:' + (active ? s.color : 'var(--text-dim)') + ';border-radius:var(--radius-xs);cursor:pointer;font-family:var(--font)">' + s.icon + '</button>';
        }).join('') + '</div>';
        listEl.insertAdjacentHTML('beforeend', tabsHtml);

        listEl.querySelectorAll('.dangers-season-tab').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var k = this.dataset.season;
                var s = DANGERS_DATA[k];
                nameEl.innerHTML = s.icon + ' ' + s.name;
                renderDangersSeason(k, DANGERS_DATA);
            });
        });

        function renderDangersSeason(key, data) {
            var s = data[key];
            var items = s.dangers.map(function (d) {
                var sevColors = { critical: '#ef4444', high: '#f97316', medium: '#eab308', low: '#22c55e' };
                var sevNames = { critical: 'Критично', high: 'Высокая', medium: 'Средняя', low: 'Низкая' };
                var c = sevColors[d.severity] || '#6b7280';
                return '<div style="padding:8px 10px;background:var(--bg-hover);border-radius:var(--radius-sm);border-left:3px solid ' + c + '">' +
                    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">' +
                    '<span style="font-size:12px;font-weight:600;color:var(--text)">' + escHtml(d.name) + '</span>' +
                    '<span style="font-size:9px;padding:2px 6px;border-radius:var(--radius-xs);background:' + c + '20;color:' + c + ';font-weight:600;text-transform:uppercase">' + sevNames[d.severity] + '</span>' +
                    '</div>' +
                    '<div style="font-size:11px;color:var(--text-dim);line-height:1.4">' + escHtml(d.desc) + '</div>' +
                    '</div>';
            }).join('');
            var tabsContainer = listEl.querySelector('.dangers-season-tab').parentElement;
            listEl.innerHTML = items;
            listEl.appendChild(tabsContainer);
            listEl.querySelectorAll('.dangers-season-tab').forEach(function (btn) {
                var isActive = btn.dataset.season === key;
                btn.style.borderColor = isActive ? s.color : 'var(--border)';
                btn.style.background = isActive ? s.color + '20' : 'transparent';
                btn.style.color = isActive ? s.color : 'var(--text-dim)';
                btn.onclick = function () { renderDangersSeason(btn.dataset.season, data); };
            });
        }
    }

    var initFns = [initPanels, initSidebar, initSearch, initRoute, initElevation, initBookmarks, initMarkers, initImport, initDownload, initDangers, initRegions, initCoords, initSunMoon, initWeather, initAurora, initRuler, initCompass, initTracking, initFullscreen, initLocate, initMapEvents, initKeyboard];
    initFns.forEach(function (fn) {
        try { fn(); } catch (e) { console.error('Init error:', fn.name, e); }
    });
    var SEASONS_DATA = {
        hunting: {
            items: [
                { name: 'Лось', months: [0,0,0,0,0,0,0,0,1,1,1,0], color: '#854d0e', info: 'Сентябрь-ноябрь. Сафари, загоном, с собаками' },
                { name: 'Кабан', months: [0,0,0,0,0,0,1,1,1,1,1,1], color: '#a16207', info: 'Июнь-декабрь. Загоном, с вышки, подходом' },
                { name: 'Медведь', months: [0,0,0,0,0,0,0,0,1,1,0,0], color: '#78350f', info: 'Сентябрь-октябрь. Берлога, на овсах, на рыбе' },
                { name: 'Глухарь', months: [0,0,0,1,1,0,0,0,0,0,0,0], color: '#166534', info: 'Апрель-май. На току' },
                { name: 'Тетерев', months: [0,0,0,1,1,0,0,0,0,0,0,0], color: '#15803d', info: 'Апрель-май. На току' },
                { name: 'Утка', months: [0,0,0,0,0,0,0,1,1,1,0,0], color: '#047857', info: 'Август-октябрь. Летне-осенняя охота' },
                { name: 'Заяц', months: [0,0,0,0,0,0,0,0,1,1,1,1], color: '#92400e', info: 'Сентябрь-декабрь. Троплением, с гончими' },
                { name: 'Волк', months: [0,0,0,0,0,0,0,0,1,1,1,1], color: '#6b7280', info: 'Сентябрь-декабрь. Загоном, флажками' },
                { name: 'Лиса', months: [0,0,0,0,0,0,0,0,1,1,1,1], color: '#ea580c', info: 'Сентябрь-декабрь. С подхода, с собаками' }
            ]
        },
        fishing: {
            items: [
                { name: 'Щука', months: [0,0,0,1,1,1,0,0,0,1,1,1], color: '#166534', info: 'Весенний и осенний жор. Спиннинг, живец' },
                { name: 'Окунь', months: [0,0,0,1,1,1,1,1,1,1,1,0], color: '#15803d', info: 'Круглый год, лучшее — осень. Балабушка, мормышка' },
                { name: 'Судак', months: [0,0,0,1,1,1,0,0,0,1,1,1], color: '#047857', info: 'Весна и осень. Джиг, троллинг' },
                { name: 'Карп', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#a16207', info: 'Май-сентябрь. Фидер, поплавок' },
                { name: 'Лещ', months: [0,0,0,0,1,1,1,1,1,1,0,0], color: '#854d0e', info: 'Май-октябрь. Фидер, кольцо' },
                { name: 'Форель', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#0e7490', info: 'Май-сентябрь. Спиннинг, нахлыст' },
                { name: 'Хариус', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#0891b2', info: 'Июнь-сентябрь. Нахлыст, кораблик' },
                { name: 'Налим', months: [1,1,1,0,0,0,0,0,0,0,1,1], color: '#6b7280', info: 'Зимняя рыбалка. Донка, жерлицы' },
                { name: 'Карась', months: [0,0,0,0,0,1,1,1,0,0,0,0], color: '#ca8a04', info: 'Июнь-август. Поплавок, фидер' }
            ]
        },
        mushrooms: {
            items: [
                { name: 'Белый гриб', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#854d0e', info: 'Июнь-сентябрь. Хвойные и смешанные леса' },
                { name: 'Подберёзовик', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#a16207', info: 'Июнь-сентябрь. Берёзовые рощи' },
                { name: 'Подосиновик', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#c2410c', info: 'Июнь-сентябрь. Осинники, смешанный лес' },
                { name: 'Лисичка', months: [0,0,0,0,0,0,1,1,1,1,0,0], color: '#eab308', info: 'Июнь-октябрь. Хвойники, старый мох' },
                { name: 'Опёнок', months: [0,0,0,0,0,0,0,1,1,1,0,0], color: '#ca8a04', info: 'Август-октябрь. Пни, поваленные деревья' },
                { name: 'Маслёнок', months: [0,0,0,0,0,1,1,1,1,0,0,0], color: '#b45309', info: 'Июнь-сентябрь. Сосновые молодняки' },
                { name: 'Рыжик', months: [0,0,0,0,0,0,0,0,1,1,0,0], color: '#ea580c', info: 'Август-октябрь. Хвойные леса, сосняки' },
                { name: 'Груздь', months: [0,0,0,0,0,0,0,1,1,1,0,0], color: '#fbbf24', info: 'Август-октябрь. Берёзовые леса' }
            ]
        },
        berries: {
            items: [
                { name: 'Клубника', months: [0,0,0,0,0,1,1,0,0,0,0,0], color: '#dc2626', info: 'Июнь-июль. Поляны, опушки' },
                { name: 'Черника', months: [0,0,0,0,0,0,1,1,0,0,0,0], color: '#4338ca', info: 'Июль-август. Хвойные леса' },
                { name: 'Малина', months: [0,0,0,0,0,0,1,1,0,0,0,0], color: '#e11d48', info: 'Июль-август. Вырубки, опушки' },
                { name: 'Смородина', months: [0,0,0,0,0,0,1,1,0,0,0,0], color: '#1e1b4b', info: 'Июль-август. Берега рек, сырые места' },
                { name: 'Брусника', months: [0,0,0,0,0,0,0,1,1,0,0,0], color: '#b91c1c', info: 'Август-сентябрь. Сосновые боры, тундра' },
                { name: 'Клюква', months: [0,0,0,0,0,0,0,0,1,1,1,0], color: '#991b1b', info: 'Сентябрь-ноябрь. Болота' },
                { name: 'Облепиха', months: [0,0,0,0,0,0,0,0,1,1,0,0], color: '#f59e0b', info: 'Сентябрь-октябрь. Берега рек' },
                { name: 'Шиповник', months: [0,0,0,0,0,0,0,0,1,1,0,0], color: '#ea580c', info: 'Август-октябрь. Поля, овраги' },
                { name: 'Рябина', months: [0,0,0,0,0,0,0,0,0,1,0,0], color: '#dc2626', info: 'Октябрь. После заморозков' }
            ]
        }
    };

    function initSeasons() {
        var tabs = document.querySelectorAll('.season-tab');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) { t.classList.remove('active'); });
                tab.classList.add('active');
                renderSeasonChart(tab.dataset.season);
            });
        });
        renderSeasonChart('hunting');
    }

    function renderSeasonChart(type) {
        var data = SEASONS_DATA[type];
        var chart = document.getElementById('season-chart');
        var info = document.getElementById('season-info');
        var months = ['Я','Ф','М','А','М','И','И','А','С','О','Н','Д'];
        var now = new Date().getMonth();

        var html = '<div class="season-chart">';
        html += '<div></div>';
        months.forEach(function (m, i) {
            html += '<div class="sc-header" style="' + (i === now ? 'color:var(--accent);font-weight:700' : '') + '">' + m + '</div>';
        });

        data.items.forEach(function (item) {
            html += '<div class="sc-label" title="' + item.info + '">' + item.name + '</div>';
            item.months.forEach(function (v, i) {
                var bg = v ? item.color : 'var(--bg-hover)';
                var opacity = v ? (i === now ? '1' : '0.6') : '0.3';
                var border = (v && i === now) ? '2px solid var(--text-bright)' : 'none';
                html += '<div class="sc-cell" style="background:' + bg + ';opacity:' + opacity + ';border:' + border + '" title="' + item.name + ': ' + item.info + '"></div>';
            });
        });

        html += '</div>';
        chart.innerHTML = html;

        info.textContent = 'Текущий месяц выделен. Наведите на строку — подробности.';
    }

    function initScreenshot() {
        document.getElementById('btn-screenshot').addEventListener('click', function () {
            var mapEl = document.getElementById('map');
            var canvas = document.createElement('canvas');
            var w = mapEl.offsetWidth;
            var h = mapEl.offsetHeight;
            canvas.width = w * 2;
            canvas.height = h * 2;
            var ctx = canvas.getContext('2d');
            ctx.scale(2, 2);

            var tiles = mapEl.querySelectorAll('.leaflet-tile-loaded');
            var tilePane = mapEl.querySelector('.leaflet-tile-pane');
            var paneRect = tilePane.getBoundingClientRect();
            var mapRect = mapEl.getBoundingClientRect();

            tiles.forEach(function (tile) {
                if (!tile.complete || !tile.naturalWidth) return;
                var tr = tile.getBoundingClientRect();
                var x = tr.left - mapRect.left;
                var y = tr.top - mapRect.top;
                try { ctx.drawImage(tile, x, y, tr.width, tr.height); } catch (e) {}
            });

            var overlayPanes = mapEl.querySelectorAll('.leaflet-overlay-pane svg, .leaflet-overlay-pane canvas');
            overlayPanes.forEach(function (el) {
                var r = el.getBoundingClientRect();
                try { ctx.drawImage(el, r.left - mapRect.left, r.top - mapRect.top, r.width, r.height); } catch (e) {}
            });

            var c = map.getCenter();
            var z = map.getZoom();
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(0, h - 28, w, 28);
            ctx.fillStyle = '#00c878';
            ctx.font = '11px Inter, sans-serif';
            ctx.fillText(c.lat.toFixed(5) + '\u00b0, ' + c.lng.toFixed(5) + '\u00b0  z' + z + '  |  SURVIVE.CIV', 10, h - 10);

            canvas.toBlob(function (blob) {
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = 'survive-map-' + Date.now() + '.png';
                a.click();
                URL.revokeObjectURL(a.href);
                showToast('Карта сохранена');
            }, 'image/png');
        });
    }

    function initOffline() {
        var badge = document.getElementById('offline-badge');
        function update() {
            badge.style.display = navigator.onLine ? 'none' : '';
        }
        window.addEventListener('online', update);
        window.addEventListener('offline', update);
        update();

        document.getElementById('btn-clear-cache').addEventListener('click', function () {
            if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                navigator.serviceWorker.controller.postMessage({ type: 'CLEAR_TILES' });
                showToast('Кеш тайлов очищен');
            }
        });
    }

    initShare();
    initCalc();
    initHash();
    initSeasons();
    initScreenshot();
    initOffline();

})();
