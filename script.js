jQuery(document).ready(function($){
	var $latitude = 43.5850000,
		$longitude = -71.2118949,
		$map_zoom = 14;
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';

	var	$main_color = '#2d313f',
		$saturation= -20,
		$brightness= 5;

	var style= [
		{
			elementType: "labels",
			stylers: [
				{saturation: $saturation}
			]
		},
	    {
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    },
		{
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" },
				{ lightness: $brightness },
				{ saturation: $saturation }
			]
		}
	];

	var map_options = {
      	center: new google.maps.LatLng($latitude, $longitude),
      	zoom: $map_zoom,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }

	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	 	icon: $marker_url,
	});

	function CustomZoomControl(controlDiv, map) {
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
	  	controlDiv.appendChild(controlUIzoomIn);
	  	controlDiv.appendChild(controlUIzoomOut);

		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});
