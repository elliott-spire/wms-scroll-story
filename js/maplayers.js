function afterMapLoad() {
    // var frameRate = 0.5;
    // var currentImage = 1;
     
    // function getPath() {
    //     return (
    //         './images/wms/' +
    //         currentImage +
    //         '.png'
    //     );
    // }

    // Chapter 1
    map.addSource('source1', {
        type: 'image',
        url: './images/totalprecip.png',
        // url: getPath(),
        coordinates: [
            [-67.55707060696835, 10.124468482039887],
            [-25.80385081069517, 10.124468482039887],
            [-25.80385081069517, -17.99139833598251],
            [-67.55707060696835, -17.99139833598251]
        ]
    });

    map.addLayer({
        id: 'layer1',
        source: 'source1',
        type: 'raster',
        paint: {
            // initialize invisible
            "raster-opacity": 0
        }
    });

    // Chapter 2
    map.addSource('source2', {
        type: 'image',
        url: './images/windbarbs.png',
        coordinates: [
            [3.3227689837131686, -28.140036984046468],
            [102.09880169662617, -28.140036984046468],
            [102.09880169662617, -64.50414638338462],
            [3.3227689837131686, -64.50414638338462]
        ]
    });
    map.addLayer({
        id: 'layer2',
        source: 'source2',
        type: 'raster',
        paint: {
            // initialize invisible
            "raster-opacity": 0
        }
    });

    // Chapter 3
    map.addSource('source3', {
        type: 'image',
        url: './images/oceancurrents.png',
        coordinates: [
            [123.89566983250317, 53.76021778811605],
            [172.18303544045082, 53.76021778811605],
            [172.18303544045082, 14.614874815046363],
            [123.89566983250317, 14.614874815046363]
        ]
    });
    map.addLayer({
        id: 'layer3',
        source: 'source3',
        type: 'raster',
        paint: {
            // initialize invisible
            "raster-opacity": 0
        }
    });

    // Chapter 4
    map.addSource('source4', {
        type: 'image',
        url: './images/gust+wind.png',
        coordinates: [
            [-82.09549302316059, 67.53009418142705],
            [-23.49546798928307, 67.53009418142705],
            [-23.49546798928307, 24.018475795878345],
            [-82.09549302316059, 24.018475795878345]
        ]
    });
    map.addLayer({
        id: 'layer4',
        source: 'source4',
        type: 'raster',
        paint: {
            // initialize invisible
            "raster-opacity": 0
        }
    });

    // Chapter 5
    map.addSource('source5', {
        type: 'image',
        url: './images/WMS+AIS_12fps.gif',
        coordinates: [
            [-209.841277370518, -3.25693038289896],
            [-97.53679007794108, -3.25693038289896],
            [-97.53679007794108, -73.0804081248023],
            [-209.841277370518, -73.0804081248023]
        ]
    });
    map.addLayer({
        id: 'layer5',
        source: 'source5',
        type: 'raster',
        paint: {
            // initialize invisible
            "raster-opacity": 0
        }
    });


    // setInterval(function() {
    //     currentImage += 1;
    //     if (currentImage > 29) {
    //         currentImage = 1;
    //     }
    //     map.getSource('myImageSource').updateImage({ url: getPath() });
    // }, 1000 / frameRate);

 //    var geojson = {
	// 	'type': 'FeatureCollection',
	// 	'features': [
	// 		{
	// 			// feature for Mapbox DC
	// 			'type': 'Feature',
	// 			'geometry': {
	// 				'type': 'Point',
	// 				'coordinates': [
	// 					-40,
	// 					50
	// 				]
	// 			},
	// 			'properties': {
	// 				'title': 'Mapbox DC',
	// 				'icon': 'monument',
	// 				'rotate': 100
	// 			}
	// 		},
	// 		{
	// 			// feature for Mapbox SF
	// 			'type': 'Feature',
	// 			'geometry': {
	// 				'type': 'Point',
	// 				'coordinates': [-42, 52]
	// 			},
	// 			'properties': {
	// 				'title': 'Mapbox SF',
	// 				'icon': 'harbor',
	// 				'rotate': 220
	// 			}
	// 		}
	// 	]
	// };

	// // add markers to map
	// geojson.features.forEach(function(marker) {

	// 	// create a HTML element for each feature
	// 	var el = document.createElement('div');
	// 	el.className = 'vessel';

	// 	// make a marker for each feature and add to the map
	// 	new mapboxgl.Marker(el)
	// 		.setLngLat(marker.geometry.coordinates)
	// 		.addTo(map);


	// });


	// add AIS data sources
	map.addSource('ais2', {
      type: 'geojson',
      data: DATA_2
    });
    map.addSource('ais4', {
      type: 'geojson',
      data: DATA_4
    });
    // add data layers
	map.addLayer({
		'id': 'vessels2',
		'type': 'symbol',
		'source': 'ais2',
		'layout': {
			'icon-image': 'vessel',
			'icon-size': 0.15,
			'icon-rotate': ['get', 'heading'],
		},
		'paint': {
			'icon-opacity': 0
		}
	});
	map.addLayer({
		'id': 'vessels4',
		'type': 'symbol',
		'source': 'ais4',
		'layout': {
			'icon-image': 'vessel',
			'icon-size': 0.15,
			'icon-rotate': ['get', 'heading'],
		},
		'paint': {
			'icon-opacity': 0
		}
	});
}
