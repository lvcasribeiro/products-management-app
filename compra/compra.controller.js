(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("CompraController", function ($scope, CompraAPI, Compras, PessoaAPI, Pessoas) {
        
        $scope.compras = Compras.data;
        $scope.pessoas = Pessoas.data;
    
        const init = function () {
            carregarCompras();
            carregarPessoas();
        }
    
        var carregarCompras = function () {
            CompraAPI.getCompras().then(function () {
                $scope.compras = Compras.data;
            });
        };
    
        $scope.adicionarCompra = function (compra) {
            CompraAPI.saveCompra(compra).then(function () {
                delete $scope.compra;
                carregarCompras();
            });
        };
    
        $scope.apagarCompra = function (compra) {
            CompraAPI.deleteCompra(compra.id).then(function () {
                delete $scope.compra;
                carregarCompras();
            });
        };
    
        var carregarPessoas = function () {
            PessoaAPI.getPessoas().then(function () {
                $scope.pessoas = Pessoas.data;
            });
        };
    
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcao = !$scope.direcao;
        };
    
        init();
    });
})();
