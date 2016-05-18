//Интерактивная карта
YMaps.jQuery(function () {
            // Создает экземпляр карты и привязывает его к созданному контейнеру
            var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

            // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
            map.setCenter(new YMaps.GeoPoint(30.329963870422326,59.939449032972576), 16);

            //Добавляем метку
            //Стиль метки
            // Создает стиль
            var s = new YMaps.Style();
            // Создает стиль значка метки
            s.iconStyle = new YMaps.IconStyle();
            s.iconStyle.href = "img/pin.png";
            s.iconStyle.size = new YMaps.Point(218, 142);
            s.iconStyle.offset = new YMaps.Point(-40, -138);
            // Создает метку
            var placemark = new YMaps.Placemark(new YMaps.GeoPoint(30.323054499999976,59.93863075783236), {style: s});

            // Добавляет метку на карту
            map.addOverlay(placemark);
        })
