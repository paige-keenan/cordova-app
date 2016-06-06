function initMap() {
  var locations = [
    {
      lat: 39.96, // Columbus
      lng: -82.99
    },
    {
      lat: 30.26,
      lng: -97.74 // Austin
    },
    {
      lat: 41.88,
      lng: -87.63 // Chicago
    },
    {
      lat: 34.05,
      lng: -118.4 // Los Angeles
    },
    {
      lat: 33.86, // Atlanta
      lng: -84.68
    },
    {
      lat: 40.75,
      lng: -73.96 // New York City
    },
    {
      lat: 36.71,
      lng: -86.77 // Nashville
    },
    {
      lat: 35.05,
      lng: -85.31 // Chattanooga
    },
    {
      lat: 37.73,
      lng: -122.45 // San Francisco
    },
    {
      lat: 38.56,
      lng: -121.48 // Sacramento
    },
    {
      lat: 36.11,
      lng: -115.17 // Las Vegas
    }
  ];

  create_map();

  function create_map() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 39.5, lng: -98.5} // Center of U.S.
    });
    plot_markers_on_map(map);
  }

  function plot_markers_on_map(map) {
    for (shop in locations) {
      var shopLatLong = locations[shop];
      var marker = new google.maps.Marker({
        position: shopLatLong,
        map: map,
        icon: 'img/store-locator/ice-cream.svg'
      });
    }
  }
}



