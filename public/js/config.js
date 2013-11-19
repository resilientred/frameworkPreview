//Setting up route
window.app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/index', { templateUrl: 'views/index.html'}).
	otherwise({redirectTo: '/index'});
}]);

//Setting up Restful Server
window.restful = {
	baseURL: "http://"+window.location.hostname+"\\:4000"
};

//Removing tomcat unspported headers
window.app.config(['$httpProvider', function($httpProvider, Configuration) {
	$httpProvider.defaults.withCredentials = true;
    //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
}]);