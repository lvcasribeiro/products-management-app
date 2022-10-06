(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/compra", {
            templateUrl: "/compra/compra.html",
            controller: "CompraController",
            resolve: {
                Compras: function (CompraAPI) {
                    return CompraAPI.getCompras();
                },
                Pessoas: function(PessoaAPI){
                    return PessoaAPI.getPessoas();
                }
            }
        });
        
        $routeProvider.when("/alterar-compra/:id", {
            templateUrl: "/compra/alterar-compra.html",
            controller: "AlterarCompraController",
            resolve: {
                Compra: function(CompraAPI, $route){
                    return CompraAPI.getCompra($route.current.params.id);
                },
                Pessoas: function(PessoaAPI){
                    return PessoaAPI.getPessoas();
                }
            }
        });
    });
})();
