(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/bairro", {
            templateUrl: "/bairro/bairro.html",
            controller: "BairroController",
            resolve: {
                Bairros: function (BairroAPI) {
                    return BairroAPI.getBairros();
                }
            }
        });
    
        $routeProvider.when("/alterar-bairro/:id", {
            templateUrl: "/bairro/alterar-bairro.html",
            controller: "AlterarBairroController",
            resolve: {
                Bairro: function(BairroAPI, $route){
                    return BairroAPI.getBairro($route.current.params.id);
                }
            }
        });
    });
})();
