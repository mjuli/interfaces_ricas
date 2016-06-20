function initMap() {
// Multiple Markers
  var markers = [
    ['Caico', -6.445612,-37.068880],
    ['Apodi', -5.626604,-37.807930],
    ['Currais Novos', -6.253296,-36.534187],
    ['Ipanguaçu', -5.535579,-36.871185],
    ['João Camara', -5.544182,-35.798677],
    ['Macau', -5.152047,-36.575176],
    ['Mossoró', -5.213720,-37.319368],
    ['Natal', -5.811419,-35.203328],
    ['Natal', -5.789218,-35.203328],
    ['Natal', -5.748911,-35.261349],
    ['Nova Cruz', -6.470445,-35.444930],
    ['Parnamirim', -5.938523,-35.266080],
    ['Pau dos Ferros', -6.145468,-38.204584],
    ['Santa Cruz', -6.227869,-36.027016],
    ['Sao Gonçalo do Amarante', -5.790479,-35.338166],
    ['São Paulo do Potengi', -5.894499,-35.755485],
    ['Canguaretama', -6.357293,-35.161775],
    ['Ceara Mirim', -5.652721,-35.429233],
    ['Lajes', -5.703435,-36.235719],
    ['Parelhas', -6.699571,-36.666931]
  ];

  var infoWindowContent = [
        ['<div class="info_content">' + '<h3>IFRN - Caico</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Apodi</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Currais Novos</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Ipanguaçu</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - João Camara</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Macau </h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Mossoró </h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Natal </h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Natal</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Natal</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Nova Cruz</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Parnamirim</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Pau dos Ferros</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Santa Cruz</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - São Gonçalo do Amarante</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - São Paulo do Potengi</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Canguaretama</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Ceará Mirim</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Lajes</h3>' + '</div>'],
        ['<div class="info_content">' + '<h3>IFRN - Parelhas</h3>' + '</div>']
    ];

  var bounds = new google.maps.LatLngBounds();

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    zoom: 7
  });

  var infoWindow = new google.maps.InfoWindow(), marker, i;

  // Create a marker and set its position.
  for( i = 0; i < markers.length; i++ ) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
    });

    // Allow each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
      }
    })(marker, i));


    map.fitBounds(bounds);
  }
}