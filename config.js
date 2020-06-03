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
            WMS is just one of the standards specified by the OGC Web Services Context Document (OWS Context).\
            <br><br>\
            Here we see one of Spire Weather's WMS layers showing Total Accumulated Precipitation over a 7-day forecast. \
            Precipitation comes in many forms, but at the current latitude we can be sure that this means rain. \
            In the maritime industry, precipitation has the potential to cause significant port slowdowns. \
            Aside from its effect on overall efficiency, it can also cause direct damage to commodity exports such as grain and iron ore which are generally not loaded in heavy rain. \
            ",
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
            In fact, the Antarctic peninsula and the Andes Mountains in South America can actually funnel these winds directly into Cape Horn from the Drake Passage. \
            And to make matters worse, sustained wind strength and duration build up a large amount of energy beneath the ocean’s surface, forming deep swell waves which become even more hazardous when they reach the relatively shallow waters around Cape Horn.\
            ",
            location: {
                center: [20, -150.33003],
                zoom: 2.8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'layer2',
                    opacity: 0.9
                },
                {
                    layer: 'vessels2',
                    opacity: 0.9
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer2',
                    opacity: 0
                },
                {
                    layer: 'vessels2',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wms-legends',
            title: 'Legend Images to Guide Interpretation',
            image: './images/currents_legends.png',
            description: "With the exception of contour lines, Spire Weather's WMS styles do not display numerical data values within the visualizations themselves. \
            Instead, every WMS style and data combination has an associated legend to help users interpret the information conveyed. \
            Legends are provided as standard image assets that can be integrated with applications in a variety of ways. \
            In Esri's ArcGIS software, legend images are displayed in a sidebar along with information about the other visible layers. \
            In the screenshot above, legend images have been turned into draggable UI components that can be moved around on the map itself. \
            <br><br>\
            The WMS layers depicted here are 2 different styles for the same Ocean Currents data source. \
            The base layer shows Ocean Currents velocity with color, while the vector lines indicate velocity and direction through the relative size and orientation of the arrows. \
            Here we see the north flowing Kuroshio Current as it collides with the cold subarctic Oyashio Current off the coast of Japan. \
            Together, these form the North Pacific Current, also referred to as the North Pacific Drift, which flows from east to west towards North America. \
            Eventually it splits again, with the Alaska Current flowing northward and the California Current going south.\
            ",
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
            Since 4 short-range forecasts are issued each day (at hours 00, 06, 12, and 18) and 4 days are available at once (the current day and 3 preceding ones) users can have up to 16 full 7-day global forecasts to choose from. \
            <br><br>\
            The animation above shows 2 different Spire WMS layers visualizing a 7-day forecast with 6-hour intervals. \
            Black contour lines depict Wind Gusts on top of Significant Wave Height in color. \
            The relationship between wind and waves is particularly evident here, with larger waves (the red areas) often forming in and following concentrated regions of strong winds. \
            The condensed area of heavy weather moving from top left to bottom right is actually showing Tropical Cyclone Harold as it travels from Fiji into the open ocean. \
            <br><br>\
            On the map, we see the same 2 data variables with their styles reversed, so the contour lines show Significant Wave Height with Wind Gusts in color underneath. \
            Use the time controls to navigate through an entire medium-range high-frequency 7-day forecast (1 hour intervals for the first 30 hours and 6 hour intervals afterwards).\
            ",
            location: {
                center: [-50, 50],
                zoom: 3.0,
                pitch: 0.00,
                bearing: 90.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer4',
                //     opacity: 0.80
                // },
                {
                    layer: 'vessels4',
                    opacity: 0.80
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer4',
                    opacity: 0
                },
                {
                    layer: 'vessels4',
                    opacity: 0
                }
            ]
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
                center: [-209.841277370518, -25.25693038289896],
                zoom: 2.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'layer5',
                    opacity: 1.
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer5',
                    opacity: 0
                }
            ]
        }
    ]
};
