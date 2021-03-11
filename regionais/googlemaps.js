var sede = {
    lat: -22.89906326876025,
    lng: -43.17973021778362
};
var coinsdf = {
    lat: -15.801401737994487, 
    lng: -47.87894374062862
};
var coinssp = {
    lat: -23.581944029123743,
    lng: -46.6707726386784
};
var sedirce = {
    lat: -3.7292278443702798,
    lng: -38.51612039466976
};
var sedires = {
    lat: -20.31989727407343,
    lng: -40.33569924850826
};
var edirgo = {
    lat: -16.673499211860488,
    lng: -49.24178046204243
};
var edirmg = {
    lat: -19.884233321691127,
    lng: -43.91514006226407
};
var sedirpb = {
    lat: -7.205826945151383,
    lng: -35.920930543581086
};
var sedirpr = {
    lat: -25.431144488498877,
    lng: -49.26836611403864
};
var edirpe = {
    lat: -8.051881517169656,
    lng: -34.95047946767057
};
var edirrs = {
    lat: -30.058378674952962,
    lng: -51.17258636792456
};
var sedirsc = {
    lat: -27.598211256699074,
    lng: -48.54736556426182
};
var sedirse = {
    lat: -10.922908240880446,
    lng: -37.0797212295503
};

function initMap() {
    var myLatLng = {
        lat: -25.363,
        lng: 131.044
    };
    var map1 = new google.maps.Map(document.getElementById('sede'), {
        zoom: 14,
        center: sede,
        mapId: 'e10204e0a76e10ba',
    });
    var marker1 = new google.maps.Marker({
        position: sede,
        map: map1,
    });
    
    var map2 = new google.maps.Map(document.getElementById('coinsdf'), {
        zoom: 14,
        center: coinsdf,
        mapId: 'e10204e0a76e10ba',
    });
    var marker2 = new google.maps.Marker({
        position: coinsdf,
        map: map2,
    });
    
    var map3 = new google.maps.Map(document.getElementById('coinssp'), {
        zoom: 14,
        center: coinssp,
        mapId: 'e10204e0a76e10ba',
    });
    var marker3 = new google.maps.Marker({
        position: coinssp,
        map: map3,
    });
    
    var map4 = new google.maps.Map(document.getElementById('sedirce'), {
        zoom: 14,
        center: sedirce,
        mapId: 'e10204e0a76e10ba',
    });
    var marker4 = new google.maps.Marker({
        position: sedirce,
        map: map4,
    });

    var map5 = new google.maps.Map(document.getElementById('sedires'), {
        zoom: 14,
        center: sedires,
        mapId: 'e10204e0a76e10ba',
    });
    var marker5 = new google.maps.Marker({
        position: sedires,
        map: map5,
    });

    var map6 = new google.maps.Map(document.getElementById('edirgo'), {
        zoom: 14,
        center: edirgo,
        mapId: 'e10204e0a76e10ba',
    });
    var marker6 = new google.maps.Marker({
        position: edirgo,
        map: map6,
    });

    var map7 = new google.maps.Map(document.getElementById('edirmg'), {
        zoom: 14,
        center: edirmg,
        mapId: 'e10204e0a76e10ba',
    });
    var marker7 = new google.maps.Marker({
        position: edirmg,
        map: map7,
    });

    var map8 = new google.maps.Map(document.getElementById('sedirpb'), {
        zoom: 14,
        center: sedirpb,
        mapId: 'e10204e0a76e10ba',
    });
    var marker8 = new google.maps.Marker({
        position: sedirpb,
        map: map8,
    });

    var map9 = new google.maps.Map(document.getElementById('esdirpr'), {
        zoom: 14,
        center: sedirpr,
        mapId: 'e10204e0a76e10ba',
    });
    var marker9 = new google.maps.Marker({
        position: sedirpr,
        map: map9,
    });

    var map10 = new google.maps.Map(document.getElementById('edirpe'), {
        zoom: 14,
        center: edirpe,
        mapId: 'e10204e0a76e10ba',
    });
    var marker10 = new google.maps.Marker({
        position: edirpe,
        map: map10,
    });

    var map11 = new google.maps.Map(document.getElementById('edirrs'), {
        zoom: 14,
        center: edirrs,
        mapId: 'e10204e0a76e10ba',
    });
    var marker11 = new google.maps.Marker({
        position: edirrs,
        map: map11,
    });

    var map12 = new google.maps.Map(document.getElementById('sedirsc'), {
        zoom: 14,
        center: sedirsc,
        mapId: 'e10204e0a76e10ba',
    });
    var marker12 = new google.maps.Marker({
        position: sedirsc,
        map: map12,
    });

    var map13 = new google.maps.Map(document.getElementById('sedirse'), {
        zoom: 14,
        center: sedirse,
        mapId: 'e10204e0a76e10ba',
    });
    var marker13 = new google.maps.Marker({
        position: sedirse,
        map: map13,
    });

}
google.maps.event.addDomListener(window, 'load', initMap);
