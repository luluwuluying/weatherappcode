var canvas;
var base_url = "http://api.wunderground.com/api/c0fea6bb98bd7026/conditions/q/CA/San_Francisco.json"; 
var citySelect;
var temp1;
var uv1;
var humidity1;
var wind1;
var weather1;
var weathericon;
var boy;
var boy3;
var boy2;
var girl;
var girl3;
var girl2;
var sun;
var cloud;
var rain;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    citySelect = select('#cities');
    temp1 = select('#temp1');
    uv1 = select('#uv1');
    humidity1 = select('#humidity1');
    wind1 = select('#wind1');
    sun = select('#sun');
    rain = select('#rain');
    cloud = select('#cloud');
    boy = select('#boy');
    boy3 = select('#boy3');
    boy2 = select('#boy2');
    girl = select('#girl');
    girl3 = select('#girl3');
    girl2 = select('#girl2');
    weathericon = select('#weathericon');
    
    
} 

$(document).ready(function(){
    $(".abc").click(function() {
//        console.log("78");
        weatherLookup();
    });
});

function weatherLookup() {
  var basicurl = "http://api.wunderground.com/api/c0fea6bb98bd7026/conditions/q/";
  var url=basicurl + $("#cities").val() + ".json";

  loadJSON(url, gotWeather);
}

function gotWeather(weather){
    
     var weather1 = select('#weather1');
     weather1.html(weather.current_observation.weather);

     var temp1 = select("#temp1");
     temp1.html("Temperature:"+weather.current_observation.temp_f+"&#176F");
    
    
     var uv1 = select("#uv1");
     uv1.html("UV Index:"+weather.current_observation.UV);
     
     var humidity1 = select('#humidity1');
     humidity1.html("Humidity:"+weather.current_observation.relative_humidity);
     
     var wind1 = select('#wind1');
     wind1.html("Wind:"+weather.current_observation.wind_degrees+"m/h");
    
      var weathername;
      var weatherboy = "hi";
      var weathergirl;
    
    
    if (weather.current_observation.weather == "Clear"){

           weathername='sun';
//           weatherboy='boy';
//           weathergirl='girl';
       }

      
        
      if (weather.current_observation.weather == "Overcast"||
          weather.current_observation.weather == "Partly Cloudy" ||
          weather.current_observation.weather == "Scattered Clouds" ||
          weather.current_observation.weather == "Mostly Cloudy"){
            
          weathername='cloud';
//          weatherboy='boy2';
//          weathergirl='girl2';
              
          }


      if(weather.current_observation.weather == "Rain"||
        weather.current_observation.weather == "Light Rain" ){
          
          weathername='rain';
//          weatherboy='boy2';
//          weathergirl='girl2';
      }
      
     if(weather.current_observation.temp_f<40 ){
          weatherboy='boy3';
          weathergirl='girl3';
         
     } 
     if(weather.current_observation.temp_f>80 ){
        weatherboy='boy';
         weathergirl='girl';
    }
    if(weather.current_observation.temp_f<80 &&   weather.current_observation.temp_f >40 ){
           weatherboy='boy2';
          weathergirl='girl2';
      }
    
        

        console.log("Weather Icon: " + weather.current_observation.weather);
 
         weathericon.html('<img src="images/'+weathername+'.svg" alt="'+weathericon+'">');
         boy.html('<img src="images/'+weatherboy+'.svg" alt="'+weatherboy+'">');
         girl.html('<img src="images/'+weathergirl+'.svg" alt="'+weathergirl+'">');
         boy.show();
         girl.show();
         weathericon.show();
    
   
     
}



   

        
    