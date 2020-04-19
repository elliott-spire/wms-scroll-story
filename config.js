var config = {
    // style: 'mapbox://styles/mapbox/satellite-v9',
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoibWF4LWFib3VjaGFyLXNwaXJlIiwiYSI6ImNrNjJyMHJsMjBoZWIzZW9mNjN4bXNnOHcifQ.zrek-R9VqJNAdnKK7SyZVg',
    // showMarkers: true, // show location pin on the map
    theme: 'dark',
    alignment: 'left', // alignment of description text ("chapter")
    title: "Introducing: Spire Weather's Web Map Service API",
    subtitle: "Easily integrated Weather Forecast visualizations",
    byline: "Brought to you by Spire Weather",
    footer: "Source: <a href='https://spire.com/weather/'>Spire Weather</a>",
    chapters: [
        {
            id: 'wms-intro',
            title: 'What are WMS layers?',
            image: './images/Spire-Weather-WMS.png',
            description: "Web Map Service (WMS) layers are pre-styled, geo-referenced data visualizations. \
            In this case, the data being visualized is from Spire Weather's global weather forecast model. \
            WMS layers are provided in a standardized format developed by the international Open Geospatial Consortium (OGC), making them perfect for integrating with existing map software. \
            <br><br>\
            Here we see a Spire Weather WMS layer showing Total Accumulated Precipitation over a 7-day forecast. \
            In the maritime industry, precipitation can be a major cause of port slowdowns, especially in regions known for grain and iron ore exports which are generally not loaded in heavy rain.",
            location: {
                center: [-61, 1],
                zoom: 3.80,
                pitch: 40.50,
                bearing: 0.00
                // center: [-87.47289, 46.33916],
                // zoom: 3.4,
                // pitch: 45.00,
                // bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'layer1',
                    opacity: 0.80
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer1',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wms-styles',
            title: 'Various Data and Style Options',
            image: './images/gustcontours.png',
            description: "Although WMS visualizations are automatically generated based on the chosen data variable, users have the option to choose each layer's style to compose different views. \
            The image above and the layer on the map are both showing the same exact data styled in 2 different ways. \
            The map layer shows white wind barbs for 10-Meter Wind Speed on top of Wind Gusts in color. \
            The image above shows Wind Gusts as white contour lines on top of 10-Meter Wind Speed in color. \
            <br><br>\
            This cropped WMS area encompasses Cape Horn in South Africa, which has long been notorious as one of the most dangerous shipping routes in the world. \
            Because of the fact that surface winds below 40°S latitude are able to move from west to east with minimal interruption from land, they often reach much higher speeds than they would in other regions. \
            In fact, the Antarctic peninsula and the Andes Mountains in South America can actually funnel such winds directly into Cape Horn from the Drake Passage. \
            And to make matters worse, sustained wind strength and duration build up a large amount of energy beneath the ocean’s surface, forming deep swell waves which become even more hazardous when they reach the relatively shallow waters around Cape Horn.",
            location: {
                center: [20.91618, -50.33003],
                zoom: 2.7,
                pitch: 8.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'layer2',
                    opacity: 0.80
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer2',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wms-legends',
            title: 'Legend Images to Guide Interpretation',
            image: './images/two_legends.png',
            description: "Every WMS style and data combination has an associated legend image to help users interpret the layer. \
            <br><br>\
            The Kuroshio and Oyashio currents.",
            location: {
                center: [149, 22.5],
                zoom: 3.6,
                pitch: 40.50,
                bearing: -90
            },
            onChapterEnter: [
                {
                    layer: 'layer3',
                    opacity: 0.80
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer3',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wms-time',
            title: 'Time Enablement for Forecast Analysis',
            image: './images/SpireWMS_Waves+WindGustContours_12fps.gif',
            description: "Multiple WMS visualizations are created for each weather forecast, and users can choose which time to show or play through all of them sequentially. \
            Furthermore, multiple forecasts are provided at a time. \
            Since 4 forecasts are issued each day (at hours 00, 06, 12, and 18) and 4 days are avilable at once (the current day and 3 preceding ones) users can have up to 16 full 7-day global forecasts to choose from. \
            <br><br>\
            The animation above shows 2 different Spire WMS layers visualizing a 7-day forecast with 6-hour intervals. \
            Black contour lines depict Wind Gusts on top of Significant Wave Height in color. \
            The relationship between wind and waves is particularly evident here, with larger waves (the red areas) often forming in and following concentrated regions of strong winds. \
            The condensed area of heavy weather moving from top left to bottom right is actually showing Tropical Cyclone Harold as it travels from Fiji into the open ocean.",
            location: {
                center: [-180, -37.16706],
                zoom: 2.74,
                pitch: 12.50,
                bearing: 0.63
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'wms-ais',
            title: 'Increase the Value of Existing Data',
            image: './images/spire-dais.gif',
            description: "Spire Maritime, Dynamic™ AIS \
            <br><br> \
            <a href='https://spire.com/maritime/'>https://spire.com/maritime</a> \
            <br> \
            <a href='https://spire.com/weather/'>https://spire.com/weather</a>",
            location: {
                center: [2, 52],
                zoom: 7.0,
                pitch: 12.50,
                bearing: 0.63
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
