(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/item", {
            templateUrl: "/item-de-compra/item-de-compra.html",
            controller: "ItemController",
            resolve: {
                Itens: function (ItemAPI) {
                    return ItemAPI.getItens();
                },
                Compras: function(CompraAPI){
                    return CompraAPI.getCompras();
                }
            }
        });
        
        $routeProvider.when("/alterar-item/:id", {
            templateUrl: "/item-de-compra/alterar-item-de-compra.html",
            controller: "AlterarItemController",
            resolve: {
                Item: function(ItemAPI, $route){
                    return ItemAPI.getItem($route.current.params.id);
                },
                Compras: function(CompraAPI){
                    return CompraAPI.getCompras();
                }
            }
        });
    });
})();
