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
        { id: 'topo', name: 'Топо', icon: '\u{26F0}', url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 OpenTopoMap', maxZoom: 17 } },
        { id: 'osm', name: 'OSM', icon: '\u{1F5FA}', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 OpenStreetMap', maxZoom: 19 } },
        { id: 'cyclosm', name: 'Цикл', icon: '\u{1F6B2}', url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 CyclOSM', maxZoom: 19 } },
        { id: 'relief', name: 'Рельеф', icon: '\u{26F0}', url: 'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png', opts: { attribution: '\u00a9 Stamen / Stadia', maxZoom: 18 } },
        { id: 'satellite', name: 'Спутник', icon: '\u{1F6F0}', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', opts: { attribution: '\u00a9 Esri', maxZoom: 18 } },
        { id: 'gsh', name: 'Генштаб', icon: '\u{1F3AF}', url: 'https://mapy.com/turisticka/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 Mapy.cz', maxZoom: 18 } },
        { id: 'ggc', name: 'ГГЦ', icon: '\u{1F4D0}', url: 'https://mapy.com/turisticka-winter/{z}/{x}/{y}.png', opts: { attribution: '\u00a9 Mapy.cz', maxZoom: 18 } }
    ];

    var OVERLAYS_CONFIG = [
        { id: 'hillshade', name: 'Рельеф (затенение)', url: 'https://tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png', opts: { maxZoom: 16, opacity: 0.5 } }
    ];

    var map = L.map('map', {
        center: [55.7558, 37.6173],
        zoom: 6,
        zoomControl: true,
        attributionControl: false
    });

    var tileLayers = {};
    var currentLayer = null;
    var overlays = {};
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
    var dlSelectStart = null;
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
    }

    setLayer('topo');

    var layerGrid = document.getElementById('layer-grid');
    LAYERS_CONFIG.forEach(function (cfg) {
        var btn = document.createElement('button');
        btn.className = 'layer-btn' + (cfg.id === 'topo' ? ' active' : '');
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
                            return '<div class="search-item" data-lat="' + item.lat + '" data-lng="' + item.lon + '"><div class="search-item-icon">' + iconSvg + '</div><div class="search-item-body"><div class="search-item-name">' + item.display_name.split(',')[0] + '</div><div class="search-item-detail">' + item.display_name.split(',').slice(1, 3).join(',').trim() + '</div></div></div>';
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

            if (rulerMarkers.length > 1) {
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
        map.on('click', function (e) {
            if (rulerMode) {
                addRulerPoint(e.latlng);
            } else {
                addRoutePoint(e.latlng);
            }
        });

        map.on('contextmenu', function (e) {
            e.originalEvent.preventDefault();
            createCustomMarker(e.latlng);
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

    var DS_COLORS = {
        water: '#3b9eff',
        dangers: '#ff4d4f',
        abandoned: '#a855f7',
        biomes: '#22c55e',
        evacuation: '#f97316',
        population: '#eab308'
    };

    var DS_LEGENDS = {
        water: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#3b9eff"></span> Река / озеро</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#80d4ff"></span> Родники / источники</div><p style="margin-top:6px">Тепловая карта — плотность источников воды</p>',
        dangers: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#ff4d4f"></span> Радиация</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#ff8c00"></span> Пожары</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#a855f7"></span> Клещи</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#3b9eff"></span> Наводнения</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#fff"></span> Лавины / вулканы</div>',
        abandoned: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#a855f7"></span> Город-призрак</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#7c3aed"></span> Бункер ГО</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#c084fc"></span> Заброшенная база</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#ff4d4f"></span> Опасная зона</div>',
        biomes: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#1a5c1a"></span> Тайга</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#2d8f2d"></span> Смешанные леса</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#8fbc5a"></span> Лесостепь</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#d4a843"></span> Степь</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#6b8f8f"></span> Тундра</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#b8d4e3"></span> Арктическая пустыня</div>',
        evacuation: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#f97316"></span> Автомобильный</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#3b82f6"></span> Водный</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#ef4444"></span> Внедорожный</div><p style="margin-top:6px">Клик на маршрут — подробности</p>',
        population: '<div class="ds-legend-row"><span class="ds-legend-color" style="background:#eab308"></span> Высокая плотность</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#854d0e"></span> Средняя</div><div class="ds-legend-row"><span class="ds-legend-color" style="background:#365314"></span> Низкая</div><p style="margin-top:6px">Размер круга = население региона</p>'
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
        html += '<h4>' + (props.name || '') + '</h4>';
        if (props.desc) html += '<p>' + props.desc + '</p>';
        if (props.type) html += '<span class="tag ' + tagClass + '">' + props.type + '</span>';
        if (props.danger) html += ' <span class="tag tag-danger">' + props.danger + '</span>';
        if (props.dist) html += '<p style="margin-top:4px">' + props.dist + '</p>';
        if (props.population) html += '<p style="margin-top:4px">Население: ' + props.population.toLocaleString() + '</p>';
        if (props.density) html += '<br>Плотность: ' + props.density + ' чел/км²';
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

    function initDatasets() {
        document.querySelectorAll('[data-ds]').forEach(function (cb) {
            cb.addEventListener('change', function () {
                toggleDataset(this.dataset.ds, this.checked);
            });
        });
    }

    L.control.scale({ imperial: false, metric: true }).addTo(map);

    initPanels();
    initSidebar();
    initSearch();
    initRoute();
    initMarkers();
    initDownload();
    initDatasets();
    initRegions();
    initCoords();
    initRuler();
    initFullscreen();
    initLocate();
    initMapEvents();
    initKeyboard();

})();
