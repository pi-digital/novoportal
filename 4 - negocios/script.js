/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;
chart.geodataNames = am4geodata_lang_PT;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.polygon.fillOpacity = 0.6;


// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0);

// Add image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{title}";
imageSeries.mapImages.template.propertyFields.url = "url";

var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 3;
circle.propertyFields.fill = "color";

var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle2.radius = 3;
circle2.propertyFields.fill = "color";

circle2.events.on("inited", function(event){
  animateBullet(event.target);
})

function animateBullet(circle) {
    var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
      animateBullet(event.target.object);
    })
}

var colorSet = new am4core.ColorSet();

imageSeries.data = [ {
  "title": "Brussels",
  "latitude": 50.8371,
  "longitude": 4.3676,
  "color":"#e03e96",
  "radius": 20
}, {
  "title": "Copenhagen",
  "latitude": 55.6763,
  "longitude": 12.5681,
  "color":colorSet.next()
}, {
  "title": "Paris",
  "latitude": 48.8567,
  "longitude": 2.3510,
  "color":colorSet.next()
}, {
  "title": "Reykjavik",
  "latitude": 64.1353,
  "longitude": -21.8952,
  "color":colorSet.next()
}, {
  "title": "Moscow",
  "latitude": 55.7558,
  "longitude": 37.6176,
  "color":colorSet.next()
}, {
  "title": "Madrid",
  "latitude": 40.4167,
  "longitude": -3.7033,
  "color":colorSet.next()
}, {
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "url": "http://www.google.co.uk",
  "color":colorSet.next()
}, {
  "title": "Peking",
  "latitude": 39.9056,
  "longitude": 116.3958,
  "color":colorSet.next()
}, {
  "title": "New Delhi",
  "latitude": 28.6353,
  "longitude": 77.2250,
  "color":colorSet.next()
}, {
  "title": "Tokyo",
  "latitude": 35.6785,
  "longitude": 139.6823,
  "url": "http://www.google.co.jp",
  "color":colorSet.next()
}, {
  "title": "Ankara",
  "latitude": 39.9439,
  "longitude": 32.8560,
  "color":colorSet.next()
}, {
  "title": "Buenos Aires",
  "latitude": -34.6118,
  "longitude": -58.4173,
  "color":colorSet.next()
}, {
  "title": "Brasilia",
  "latitude": -15.7801,
  "longitude": -47.9292,
  "color":colorSet.next()
}, {
  "title": "Ottawa",
  "latitude": 45.4235,
  "longitude": -75.6979,
  "color":"#e03e96"
}, {
  "title": "Washington",
  "latitude": 38.8921,
  "longitude": -77.0241,
  "color":colorSet.next()
}, {
  "title": "Kinshasa",
  "latitude": -4.3369,
  "longitude": 15.3271,
  "color":colorSet.next()
}, {
  "title": "Cairo",
  "latitude": 30.0571,
  "longitude": 31.2272,
  "color":colorSet.next()
}, {
  "title": "Pretoria",
  "latitude": -25.7463,
  "longitude": 28.1876,
  "color":colorSet.next()
} ];

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#cccccc");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add some data
polygonSeries.data = [{
  "id": "US",
  "name": "United States",
  "value": 100
}, {
  "id": "FR",
  "name": "France",
  "value": 50
}];

// Add line series
var lineSeries = chart.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.strokeWidth = 1;
lineSeries.mapLines.template.stroke = am4core.color("#e03e96");
lineSeries.mapLines.template.nonScalingStroke = true;

var line = lineSeries.mapLines.create();
line.multiGeoLine = [[
  { "latitude": 48.856614, "longitude": 2.352222 },
  { "latitude": 40.712775, "longitude": -74.005973 },
  { "latitude": 49.282729, "longitude": -123.120738 }
]];
line.id = "myline";
line.setClassName();

// Add some custom data
polygonSeries.data = [{
  "id": "US",
  "color": am4core.color("grey"),
  "description": "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking."
}, {
  "id": "CA",
  "color": am4core.color("grey"),
  "description": "Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montréal and Québec City, and capital city Ottawa. Canada's vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It's also home to Niagara Falls, a famous group of massive waterfalls."
}, {
  "id": "MX",
  "color": am4core.color("grey"),
  "description": "Mexico is a country between the U.S. and Central America that's known for its Pacific and Gulf of Mexico beaches and its diverse landscape of mountains, deserts and jungles. Ancient ruins such as Teotihuacán and the Mayan city of Chichén Itzá are scattered throughout the country, as are Spanish colonial-era towns. In capital Mexico City, upscale shops, renowned museums and gourmet restaurants cater to modern life."
}]

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#cccccc");
polygonTemplate.propertyFields.fill = "color";
polygonTemplate.events.on("hit", function(ev) {
  var data = ev.target.dataItem.dataContext;
  var info = document.getElementById("info");
  info.innerHTML = "<h3>" + data.name + " (" + data.id  + ")</h3>";
  if (data.description) {
    info.innerHTML += data.description;
  }
  else {
    info.innerHTML += "<i>No description provided.</i>"
  }
});