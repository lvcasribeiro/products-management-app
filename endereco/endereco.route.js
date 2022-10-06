(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/endereco", {
            templateUrl: "/endereco/endereco.html",
            controller: "EnderecoController",
            resolve: {
                Enderecos: function(EnderecoAPI){
                    return EnderecoAPI.getEnderecos();
                },
                Bairros: function (BairroAPI) {
                    return BairroAPI.getBairros();
                }
            }
        });
    
        $routeProvider.when("/alterar-endereco/:id", {
            templateUrl: "/endereco/alterar-endereco.html",
            controller: "AlterarEnderecoController",
            resolve: {
                Endereco: function(EnderecoAPI, $route){
                    return EnderecoAPI.getEndereco($route.current.params.id);
                },
                Bairros: function (BairroAPI) {
                    return BairroAPI.getBairros();
                }
            }
        });
    });
})();
