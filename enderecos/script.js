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
hs.properties.fill = am4core.color("#ccedc4");

// Create active state
var as = polygonTemplate.states.create("active");
as.properties.fill = am4core.color("#80b3ff");

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
circle.radius = 2;
circle.propertyFields.fill = "color";

var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle2.radius = 2;
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
  "title": "Sede, INPI (Rio de Janeiro, RJ)",
  "latitude": -22.9110137,
  "longitude": -43.2093727,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (São Paulo, SP)",
  "latitude": -23.5506507,
  "longitude": -46.6333824,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Brasília, DF)",
  "latitude": -15.7934036,
  "longitude": -47.8823172,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Goiânia, GO)",
  "latitude": -16.680882,
  "longitude": -49.2532691,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Recife, PE)",
  "latitude": -8.04255435,
  "longitude": -34.92770629,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Fortaleza, CE)",
  "latitude": -3.7304512,
  "longitude": -38.5217989,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (João Pessoa, PB)",
  "latitude": -7.15181265,
  "longitude": -34.85239128,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Aracaju, SE)",
  "latitude": -11.01868955,
  "longitude": -37.0944378,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Belo Horizonte, MG)",
  "latitude": -19.9227318,
  "longitude": -43.9450948,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Vitória, ES)",
  "latitude": -20.2872412,
  "longitude": -40.32680602,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Porto Alegre, RS)",
  "latitude": -30.10091665,
  "longitude": -51.18878819,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Curitiba, PR)",
  "latitude": -25.4295963,
  "longitude": -49.2712724,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "Regional, INPI (Florianópolis, SC)",
  "latitude": -27.5973002,
  "longitude": -48.5496098,
  "url": "http://www.inpi.gov.br/",
  "color":colorSet.next()
}, {
  "title": "DINAPI (Assunção, PY)",
  "latitude": -25.2800459,
  "longitude": -57.6343814,
  "url": "https://www.dinapi.gov.py/",
  "color":colorSet.next()
}, {
  "title": "DNPI (Montevidéu, UY)",
  "latitude": -34.9059039,
  "longitude": -56.1913569,
  "url": "https://www.miem.gub.uy/marcas-y-patentes",
  "color":colorSet.next()
}, {
  "title": "INPI (Buenos Aires, AR)",
  "latitude": -34.6075682,
  "longitude": -58.4370894,
  "url": "https://www.argentina.gob.ar/inpi",
  "color":colorSet.next()
}, {
  "title": "SENAPI (La Paz, BO)",
  "latitude": -16.4955455,
  "longitude": -68.1336229,
  "url": "https://www.senapi.gob.bo/",
  "color":colorSet.next()
}, {
  "title": "INAPI (Santiago, CL)",
  "latitude": -33.4377968,
  "longitude": -70.6504451,
  "url": "https://inapi.cl/",
  "color":colorSet.next()
}, {
  "title": "INPI (Paris, FR)",
  "latitude": 48.8588897,
  "longitude": 2.32004103,
  "url": "https://www.inpi.fr/",
  "color":colorSet.next()
}, {
  "title": "UKIPO (Londres, GB)",
  "latitude": 51.5073219,
  "longitude": -0.1276474,
  "url": "https://www.gov.uk/government/organisations/intellectual-property-office",
  "color":colorSet.next()
}, {
  "title": "JPO (Tóquio, JP)",
  "latitude": 35.6828387,
  "longitude": 139.7594549,
  "url": "https://www.jpo.go.jp/e/",
  "color":colorSet.next()
}, {
  "title": "CNIPA (Beijing, CN)",
  "latitude": 39.906217,
  "longitude": 116.3912757,
  "url": "http://english.sipo.gov.cn/",
  "color":colorSet.next()
}, {
  "title": "ROSPATENT (Moscou, RU)",
  "latitude": 55.7504461,
  "longitude": 37.6174943,
  "url": "https://rupto.ru/en",
  "color":colorSet.next()
}, {
  "title": "DKPTO (Copenhage, DK)",
  "latitude": 55.6867243,
  "longitude": 12.5700724,
  "url": "https://www.dkpto.org/",
  "color":colorSet.next()
}, {
  "title": "INDECOPI (Lima, PE)",
  "latitude": -12.0621065,
  "longitude": -77.0365256,
  "url": "https://indecopi.gob.pe/",
  "color":colorSet.next()
}, {
  "title": "SENADI (Quito, EC)",
  "latitude": -0.2201641,
  "longitude": -78.5123274,
  "url": "https://www.derechosintelectuales.gob.ec/",
  "color":colorSet.next()
}, {
  "title": "IPOS (Singapura, SG)",
  "latitude": 1.340863,
  "longitude": 103.83039182,
  "url": "https://www.ipos.gov.sg/",
  "color":colorSet.next()
}, {
  "title": "KIPO (Seul, CL)",
  "latitude": 37.5666791,
  "longitude": 126.9782914,
  "url": "https://www.kipo.go.kr/en/",
  "color":colorSet.next()
}, {
  "title": "IPOS (Singapura, SG)",
  "latitude": 1.340863,
  "longitude": 103.83039182,
  "url": "https://www.ipos.gov.sg/",
  "color":colorSet.next()
}, {
  "title": "KIPO (Seul, CL)",
  "latitude": 37.5666791,
  "longitude": 126.9782914,
  "url": "https://www.kipo.go.kr/en/",
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
lineSeries.mapLines.template.stroke = am4core.color("#ffff00");
lineSeries.mapLines.template.nonScalingStroke = true;

var line = lineSeries.mapLines.create();
line.multiGeoLine = [[
  { "latitude": 48.856614, "longitude": 2.352222 },
  { "latitude": 40.712775, "longitude": -74.005973 },
  { "latitude": 49.282729, "longitude": -123.120738 }
]];

var line = lineSeries.mapLines.create();
line.multiGeoLine = [[
  { "latitude": -22.9110137, "longitude": -43.2093727 },
  { "latitude": -23.5506507, "longitude": -46.6333824 }
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
