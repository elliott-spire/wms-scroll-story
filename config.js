var OPACITY = 0.7;

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
            description: "\
            Web Map Service (WMS) layers are pre-styled, geo-referenced data visualizations. \
            They are provided in a standardized format developed by the international Open Geospatial Consortium (OGC), making them perfect for integrating with existing map software. \
            WMS is one of several standards specified by the OGC Web Services Context Document (OWS Context). \
            In the case of Spire’s WMS offering, the layers visualize data from Spire’s own global weather forecast model. \
            Here on the map are 2 different Spire WMS layers visualizing the same underlying data: 1 layer shows Air Temperature in color and 1 layer shows Air Temperature with contour lines. \
            ",
            location: {
                center: [-80, 70],
                zoom: 2.4,
                pitch: 0.0,
                bearing: 0.0
            },
            onChapterEnter: [
                {
                    layer: 'layer1',
                    opacity: OPACITY
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
            title: 'Creation of Distinct Data Views',
            image: './images/gustcontours.png',
            description: "\
            Although Spire’s WMS visualizations are automatically generated based on the chosen data variable, users have the option to choose each layer's style to compose different views. \
            In the previous Temperature example, the 2 layers both visualized the same data. \
            In the current example, there is a unique data variable shown by each layer. \
            Furthermore, the image above and the example on the map are both showing the same exact data styled in 2 different ways. \
            The map layers show Wind Speed with white wind barbs, on top of Wind Gusts in color. \
            The image above shows Wind Gusts as white contour lines on top of Wind Speed in color. \
            Wind forecasts are particularly important for the renewable energy industry. \
            ",
            location: {
                center: [20.91618, -50.33003],
                zoom: 2.7,
                pitch: 8.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'layer2',
                    opacity: OPACITY
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
            image: './images/precip_legend.png',
            description: "\
            With the exception of contour lines, Spire Weather's WMS styles do not display numerical data values within the visualizations themselves. \
            Instead, every WMS style and data combination has an associated legend to help users interpret the information conveyed. \
            Legends are provided as standard image assets that can be integrated with applications in a variety of ways. \
            In Esri's ArcGIS software, legend images are displayed in a sidebar along with information about the other visible layers. \
            In the image above, the legend image has been developed into a draggable UI component that can be moved around on the map itself to compare with the visualized Precipitation data. \
            In our current map view here, we instead see the Precipitation contour lines style layered on top of the Precipitation color style. \
            ",
            location: {
                center: [120, -10],
                zoom: 3.6,
                pitch: 30,
                bearing: -90
            },
            onChapterEnter: [
                {
                    layer: 'layer3',
                    opacity: OPACITY
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
            id: 'wms-style-options',
            title: 'Multiple Style Options',
            image: './images/relhum_whitecontour.png',
            description: "\
            As you may have noticed, previous examples showed secondary styles (e.g. contour lines, wind barbs) in both black and white. \
            This is an important feature to keep in mind when composing views with Spire WMS layers, since there are situations when one or the other will be preferable. \
            Sometimes this is dependent upon the base map that is being used - for instance whether it is a dark or light tileset - and other times it is dependent upon the underlying WMS layer. \
            In the image above, Relative Humidity is shown with white contour lines on top of Relative Humidity in color. \
            This looks fine for the darker regions depicting high humidity but is harder to distinguish against the lighter regions showing lower humidity. \
            In the map example, the black contour lines style has been selected instead, offering a more appropriate contrast for this color scheme. \
            Relative Humidity is particularly important in agricultural contexts. \
            ",
            location: {
                center: [-80, -20],
                zoom: 2.4,
                pitch: 10.00,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'layer4',
                    opacity: OPACITY
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer4',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wms-time',
            title: 'Time Enablement for Forecast Analysis',
            image: './images/SpireWMS_Waves+WindGustContours_12fps.gif',
            description: "\
            Multiple WMS visualizations are created for each weather forecast, and users can choose which time to show or play through all of them sequentially. \
            Furthermore, there are always multiple forecasts available at once, in cases when it is preferable to view an older forecast. \
            Since 4 short-range forecasts are issued each day (at hours 00, 06, 12, and 18) and 4 days are available at once (the current day and 3 preceding ones) users can have up to 16 full 7-day global forecasts to choose from. \
            The animation above shows 2 different Spire WMS layers visualizing a 7-day forecast with 6-hour intervals. \
            Black contour lines depict Wind Gusts on top of Significant Wave Height in color. \
            On the map, we see the same 2 data variables with their styles reversed, so the white contour lines show Significant Wave Height with Wind Gusts in color underneath. \
            ",
            location: {
                center: [-34, 51],
                zoom: 3.2,
                pitch: 50.00,
                bearing: -180.00
            },
            onChapterEnter: [
                {
                    layer: 'layer5',
                    opacity: OPACITY
                }
            ],
            onChapterExit: [
                {
                    layer: 'layer5',
                    opacity: 0
                }
            ]
        },
    ]
};
