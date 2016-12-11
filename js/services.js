//SERVICE
weatherApp.service('$cityService', function(){
    var self = this;
    this.city = "Chesterfield, MO";       
});

//GETWEATHER SERVICE
weatherApp.service('$weatherService', ['$resource', function($resource){
   
    this.GetWeather = function(city, days){
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=34894210df19b03a62f078ab03b1ef31', {callback: "JSON_CALLBACK"}, {get: {method: 'JSONP'}} )
    
        return weatherAPI.get({q: city, cnt: days});
    }
    
}])

weatherApp.service('$utilityService', ['$filter', function($filter){
    //function to Farhenheit
    this.convertToFarhenheit = function(degK){
        return Math.round((1.8 * (degK -273)) + 32);
    }

    //function to Date
    this.convertToDate = function(dt){
        var formattedDate = $filter('date')(new Date(dt*1000));
        return formattedDate;
    }
    
}])