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
hs.properties.fill = am4core.color("#1351b4");

// Create active state
var as = polygonTemplate.states.create("active");
as.properties.fill = am4core.color("#0c326f");

chart.events.on("ready", function(ev) {
  var brazil = polygonSeries.getPolygonById("BR");
  
  // Pre-zoom
  chart.zoomToMapObject(brazil);
  
  // Set active state
  setTimeout(function() {
    brazil.isActive = true;
  }, 1000);
});

// Add image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{title}";
imageSeries.mapImages.template.propertyFields.url = "url";

var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 1;
circle.stroke = am4core.color("#000");
circle.propertyFields.fill = am4core.color("#1351b4");

var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle2.radius = 1;
circle2.stroke = am4core.color("#fff");
circle2.propertyFields.fill = am4core.color("#1351b4");

circle2.events.on("inited", function(event){
  animateBullet(event.target);
})

function animateBullet(circle) {
    var animation = circle.animate([{ property: "scale", from: 1, to: 3 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
      animateBullet(event.target.object);
    })
}

imageSeries.data = [ {
  "title": "Sede, INPI (Rio de Janeiro, RJ)",
  "latitude": -22.9110137,
  "longitude": -43.2093727,
}, {
  "title": "Regional, INPI (São Paulo, SP)",
  "latitude": -23.5506507,
  "longitude": -46.6333824,
}, {
  "title": "Regional, INPI (Brasília, DF)",
  "latitude": -15.7934036,
  "longitude": -47.8823172,
}, {
  "title": "Regional, INPI (Goiânia, GO)",
  "latitude": -16.680882,
  "longitude": -49.2532691,
}, {
  "title": "Escritório Regional - Recife, PE",
  "latitude": -8.04255435,
  "longitude": -34.92770629,
}, {
  "title": "Escritório Regional - Fortaleza, CE",
  "latitude": -3.7304512,
  "longitude": -38.5217989,
}, {
  "title": "Escritório Regional - Campina Grande, PB",
  "latitude": -7.2233728,
  "longitude": -35.88797621,
}, {
  "title": "Escritório Regional, INPI - Aracaju, SE",
  "latitude": -11.01868955,
  "longitude": -37.0944378,
}, {
  "title": "Escritório Regional, INPI - Belo Horizonte, MG",
  "latitude": -19.9227318,
  "longitude": -43.9450948,
}, {
  "title": "Escritório Regional, INPI - Vitória, ES",
  "latitude": -20.2872412,
  "longitude": -40.32680602,
}, {
  "title": "Regional, INPI - Porto Alegre, RS",
  "latitude": -30.10091665,
  "longitude": -51.18878819,
}, {
  "title": "Regional, INPI - Curitiba, PR",
  "latitude": -25.4295963,
  "longitude": -49.2712724,
}, {
  "title": "Regional, INPI - Florianópolis, SC",
  "latitude": -27.5973002,
  "longitude": -48.5496098,
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
lineSeries.mapLines.template.stroke = am4core.color("#ffff00");
lineSeries.mapLines.template.nonScalingStroke = true;

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
