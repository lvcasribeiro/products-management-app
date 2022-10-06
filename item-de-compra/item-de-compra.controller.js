(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("ItemController", function ($scope, ItemAPI, Itens, CompraAPI, Compras) {
        
        $scope.compras = Compras.data;
        $scope.itens = Itens.data;
    
        const init = function () {
            carregarItens();
            carregarCompras();
        }
    
        var carregarItens = function () {
            ItemAPI.getItens().then(function () {
                $scope.itens = Itens.data;
            });
        };
    
        $scope.adicionarItem = function (item) {
            ItemAPI.saveItem(item).then(function () {
                delete $scope.item;
                carregarItens();
            });
        };
    
        $scope.apagarItem = function (item) {
            ItemAPI.deleteItem(item.id).then(function () {
                delete $scope.item;
                carregarItens();
            });
        };
    
        var carregarCompras = function () {
            CompraAPI.getCompras().then(function () {
                $scope.compras = Compras.data;
            });
        };
    
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcao = !$scope.direcao;
        };
    
        init();
    });
})();
