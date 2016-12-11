//CONTROLLERS
weatherApp.controller("homeController", ['$scope', '$location', '$cityService', function($scope, $location, $cityService){
    $scope.city = $cityService.city;
    $scope.$watch('city', function(){
        $cityService.city = $scope.city;
    });

    $scope.submit = function(){
        $location.path('/forecast');
    }

}])

weatherApp.controller("forecastController", ['$scope', '$filter', '$routeParams', '$cityService', '$weatherService', '$utilityService', function($scope, $filter, $routeParams, $cityService, $weatherService, $utilityService){
    $scope.city = $cityService.city;
    $scope.days = $routeParams.days || '7';    
    $scope.weatherResult = $weatherService.GetWeather($scope.city, $scope.days);
    
    //function to Farhenheit
    $scope.convertToFarhenheit = function(degK){
        return $utilityService.convertToFarhenheit(degK);
    }

    //function to Date
    $scope.convertToDate = function(dt){
        return $utilityService.convertToDate(dt);
    }
}])


weatherApp.controller("ssoController", ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){
    console.log($routeParams);
    $scope.name = $routeParams.name;
}])