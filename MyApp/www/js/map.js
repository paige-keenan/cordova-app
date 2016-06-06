function initMap() {
  var shops = [
    {
      location: 'Columbus',
      lat: 39.96,
      lng: -82.99
    },
    {
      location: 'Austin',
      lat: 30.26,
      lng: -97.74
    },
    {
      location: 'Chicago',
      lat: 41.88,
      lng: -87.63
    },
    {
      location: 'Los Angeles',
      lat: 34.05,
      lng: -118.4
    },
    {
      location: 'Atlanta',
      lat: 33.86,
      lng: -84.68
    },
    {
      location: 'New York City',
      lat: 40.75,
      lng: -73.96
    },
    {
      location: 'Nashville',
      lat: 36.71,
      lng: -86.77
    },
    {
      location: 'Chattanooga',
      lat: 35.05,
      lng: -85.31
    },
    {
      location: 'San Francisco',
      lat: 37.73,
      lng: -122.45
    },
    {
      location: 'Sacramento',
      lat: 38.56,
      lng: -121.48
    },
    {
      location: 'Las Vegas',
      lat: 36.11,
      lng: -115.17
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
    for (shop in shops) {
      var shopLatLong = shops[shop];
      var marker = new google.maps.Marker({
        position: shopLatLong,
        map: map,
        icon: 'img/store-locator/ice-cream.svg'
      });
    }
    setup_map_search(map, marker);
  }

  function setup_map_search(map, marker) {
    var geocoder = new google.maps.Geocoder();
    document.getElementById('submit-button').addEventListener('click', function() {
      var user_location = document.getElementById('map-search-field').value
      if (user_location != '') {
        geocode_address(geocoder, map, user_location, marker);
      } else {
        alert('Please Enter a City or State to Search for.');
      }
    });
  }

  function geocode_address(geocoder, map, currentLocation, marker) {
    geocoder.geocode({'address': currentLocation}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        // Reset map center position to wherever user searched.
        map.setCenter(results[0].geometry.location);
        var Lat = results[0].geometry.location.lat();
        var Long = results[0].geometry.location.lng();
        find_closest_marker(Lat, Long, map, marker);
      } else {
        alert('We\'re sorry. We were not able to find the nearest Jeni\'s to your location. Reason being: ' + status);
      }
    });
  }

  function find_closest_marker(lat, longi, map, marker) {
    var R = 6371; // radius of earth in km
    var distances = [];
    var closest = -1;
    // Calculates the distance between each point and the longitud and lattitude of the user searched location.
    for(i=0; i<shops.length; i++) {
      var mlat = shops[i].lat;
      var mlng = shops[i].lng;
      var dLat  = rad(mlat - lat);
      var dLong = rad(mlng - longi);
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(rad(lat)) * Math.cos(rad(lat)) * Math.sin(dLong/2) * Math.sin(dLong/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      distances[i] = d;
      if (closest == -1 || d < distances[closest]) {
          closest = i;
      }
    }

    console.log(shops[closest].location);
  }

  function rad(x) {
    return x * Math.PI/180;
  }
}



