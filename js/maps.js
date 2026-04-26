(function() {
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
        { name: 'Москва', lat: 55.7558, lng: 37.6173, zoom: 11, icon: '🏛️' },
        { name: 'Санкт-Петербург', lat: 59.9343, lng: 30.3351, zoom: 11, icon: '🌉' },
        { name: 'Новосибирск', lat: 55.0084, lng: 82.9357, zoom: 11, icon: '🏗️' },
        { name: 'Екатеринбург', lat: 56.8389, lng: 60.6057, zoom: 11, icon: '⛏️' },
        { name: 'Казань', lat: 55.7887, lng: 49.1221, zoom: 11, icon: '🕌' },
        { name: 'Нижний Новгород', lat: 56.2965, lng: 43.9361, zoom: 11, icon: '🏰' },
        { name: 'Челябинск', lat: 55.1644, lng: 61.4368, zoom: 11, icon: '⚒️' },
        { name: 'Самара', lat: 53.1959, lng: 50.1002, zoom: 11, icon: '🚀' },
        { name: 'Омск', lat: 54.9885, lng: 73.3242, zoom: 11, icon: '🏭' },
        { name: 'Ростов-на-Дону', lat: 47.2357, lng: 39.7015, zoom: 11, icon: '⚓' },
        { name: 'Красноярск', lat: 56.0153, lng: 92.8932, zoom: 11, icon: '🌲' },
        { name: 'Воронеж', lat: 51.6615, lng: 39.2003, zoom: 11, icon: '✈️' },
        { name: 'Владивосток', lat: 43.1155, lng: 131.8855, zoom: 11, icon: '🚢' },
        { name: 'Мурманск', lat: 68.9585, lng: 33.0827, zoom: 11, icon: '🧊' },
        { name: 'Калининград', lat: 54.7104, lng: 20.4522, zoom: 11, icon: '⚓' },
        { name: 'Петропавловск-Камчатский', lat: 53.0162, lng: 158.6509, zoom: 11, icon: '🌋' }
    ];

    var TILE_LAYERS = {
        topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenTopoMap',
            maxZoom: 17
        }),
        osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap',
            maxZoom: 19
        }),
        satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; Esri',
            maxZoom: 18
        }),
        dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; CartoDB',
            maxZoom: 19
        }),
        gsh: L.tileLayer('https://maps.marshruty.ru/ml.ashx?al=1&x={x}&y={y}&z={z}', {
            attribution: '&copy; Карты Генштаба',
            maxZoom: 14,
            minZoom: 5
        })
    };

    var map = L.map('map', {
        center: [55.7558, 37.6173],
        zoom: 6,
        layers: [TILE_LAYERS.topo],
        zoomControl: true
    });

    var currentLayer = TILE_LAYERS.topo;

    document.querySelectorAll('.layer-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.layer-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var layerName = btn.dataset.layer;
            if (TILE_LAYERS[layerName] && TILE_LAYERS[layerName] !== currentLayer) {
                map.removeLayer(currentLayer);
                currentLayer = TILE_LAYERS[layerName];
                map.addLayer(currentLayer);
            }
        });
    });

    map.on('mousemove', function(e) {
        var lat = e.latlng.lat.toFixed(4);
        var lng = e.latlng.lng.toFixed(4);
        document.getElementById('coords-display').textContent = lat + '\u00B0 N, ' + lng + '\u00B0 E';
    });

    map.on('contextmenu', function(e) {
        var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        marker.bindPopup(
            '<b style="font-family:monospace">' + e.latlng.lat.toFixed(5) + ', ' + e.latlng.lng.toFixed(5) + '</b><br>' +
            '<small>ПКМ — добавить точку</small>'
        ).openPopup();
    });

    var fedOkrugSelect = document.getElementById('fed-okrug');
    var regionSelect = document.getElementById('region');

    Object.keys(REGIONS).forEach(function(key) {
        var opt = document.createElement('option');
        opt.value = key;
        opt.textContent = REGIONS[key].name;
        fedOkrugSelect.appendChild(opt);
    });

    fedOkrugSelect.addEventListener('change', function() {
        regionSelect.innerHTML = '<option value="">\u2014 Весь округ \u2014</option>';
        var okrug = REGIONS[this.value];
        if (okrug) {
            okrug.regions.forEach(function(r) {
                var opt = document.createElement('option');
                opt.value = JSON.stringify({ lat: r.lat, lng: r.lng, zoom: r.zoom });
                opt.textContent = r.name;
                regionSelect.appendChild(opt);
            });
            var bounds = okrug.regions.map(function(r) { return [r.lat, r.lng]; });
            map.fitBounds(bounds, { padding: [30, 30] });
        } else {
            map.setView([55.7558, 37.6173], 6);
        }
    });

    regionSelect.addEventListener('change', function() {
        if (this.value) {
            var data = JSON.parse(this.value);
            map.setView([data.lat, data.lng], data.zoom);
        }
    });

    var quickNav = document.getElementById('quick-nav');
    QUICK_NAV.forEach(function(item) {
        var btn = document.createElement('button');
        btn.className = 'region-btn';
        btn.innerHTML = item.icon + ' ' + item.name;
        btn.addEventListener('click', function() {
            map.setView([item.lat, item.lng], item.zoom);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        quickNav.appendChild(btn);
    });

    var districtsEl = document.getElementById('federal-districts');
    Object.keys(REGIONS).forEach(function(key) {
        var okrug = REGIONS[key];
        var btn = document.createElement('button');
        btn.className = 'region-btn';
        btn.textContent = okrug.name;
        btn.addEventListener('click', function() {
            fedOkrugSelect.value = key;
            fedOkrugSelect.dispatchEvent(new Event('change'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        districtsEl.appendChild(btn);
    });

    var locateBtn = L.control({ position: 'topleft' });
    locateBtn.onAdd = function() {
        var div = L.DomUtil.create('div', 'leaflet-bar');
        var a = L.DomUtil.create('a', '', div);
        a.innerHTML = '📍';
        a.href = '#';
        a.style.cssText = 'display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:16px;background:var(--bg-card);color:var(--text);text-decoration:none;';
        a.addEventListener('click', function(e) {
            e.preventDefault();
            map.locate({ setView: true, maxZoom: 14 });
        });
        return div;
    };
    locateBtn.addTo(map);

    var scaleBtn = L.control({ position: 'bottomleft' });
    scaleBtn.onAdd = function() {
        var div = L.DomUtil.create('div');
        div.style.cssText = 'background:var(--bg-card);border:1px solid var(--border-color);border-radius:4px;padding:6px 10px;font-family:monospace;font-size:11px;color:#8a7e6a;z-index:1000;';
        function update() {
            var z = map.getZoom();
            var scales = { 5: '1:5M', 6: '1:2.5M', 7: '1:1.5M', 8: '1:700k', 9: '1:350k', 10: '1:150k', 11: '1:70k', 12: '1:35k', 13: '1:15k', 14: '1:8k', 15: '1:4k', 16: '1:2k', 17: '1:1k', 18: '1:500', 19: '1:250' };
            div.textContent = 'Масштаб: ' + (scales[z] || '~1:' + Math.round(559082264 / Math.pow(2, z)));
        }
        update();
        map.on('zoomend', update);
        return div;
    };
    scaleBtn.addTo(map);

    L.control.scale({ imperial: false, metric: true }).addTo(map);

})();
