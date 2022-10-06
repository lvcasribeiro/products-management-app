(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/", {
            templateUrl: "/comum/html/card-de-boas-vindas.html",
        });
    
        $routeProvider.otherwise({
            redirectTo: "/"
        });
    });
})();
