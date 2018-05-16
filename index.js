var map;

window.onload = function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7142700, lng: -74.0059700},
        zoom: 12,
        mapTypeControl: false,
        streetViewControl: false,
    });
    var georssLayer = new google.maps.KmlLayer({
    url: 'https://data.cityofnewyork.us/api/geospatial/cpf4-rkhq?method=export&format=KML'
    });
    georssLayer.setMap(map);

}

function mostrar() {
    document.getElementById("sidebar").style.left = "0px";
    document.getElementById("abrir").style.display = "none";

}

function ocultar() {
    document.getElementById("sidebar").style.left = "-340px";
    document.getElementById("abrir").style.display = "inherit";
}