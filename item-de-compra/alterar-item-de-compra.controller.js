(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("AlterarItemController", function ($scope, ItemAPI, Item, CompraAPI, Compras, $location) {
        
        $scope.item = Item.data;
        $scope.compras = Compras.data;
    
        const init = function () {
            carregarCompras();
        }
    
        $scope.alterarItem = function (item) {
            ItemAPI.putItem(item).then(function () {
                delete $scope.item;
                $location.path("/item");
                carregarItens();
            });
        };
    
        var carregarCompras = function () {
            CompraAPI.getCompras().then(function () {
                $scope.compras = Compras.data;
            });
        };
    
        $scope.compras.forEach( function(elemento){
            if(elemento.id === $scope.item.compra.id){
                $scope.item.compra = elemento;
            }
        });
    
        init();
    });
})();
