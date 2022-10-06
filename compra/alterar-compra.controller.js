(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("AlterarCompraController", function ($scope, CompraAPI, Compra, $location, PessoaAPI, Pessoas) {
    
        $scope.compra = Compra.data;
        $scope.pessoas = Pessoas.data;
    
        const init = function () {
            carregarPessoas();
        }
    
        $scope.alterarCompra = function (compra) {
            CompraAPI.putCompra(compra).then(function () {
                delete $scope.compra;
                $location.path("/compra");
                carregarCompras();
            });
        };
    
        var carregarPessoas = function () {
            PessoaAPI.getPessoas().then(function () {
                $scope.pessoas = Pessoas.data;
            });
        };
    
        $scope.pessoas.forEach(function (elemento) {
            if (elemento.id === $scope.compra.pessoa.id) {
                $scope.compra.pessoa = elemento;
            }
        });
    
        init();
    });
})();
