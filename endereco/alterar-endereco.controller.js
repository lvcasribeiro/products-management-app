(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("AlterarEnderecoController", function ($scope, EnderecoAPI, BairroAPI, Bairros, Endereco, $location) {
        
        $scope.endereco = Endereco.data;
        $scope.bairros = Bairros.data;
    
        const init = function () {
            carregarBairros();
        }
    
        $scope.alterarEndereco = function (endereco) {
            EnderecoAPI.putEndereco(endereco).then(function () {
                delete $scope.endereco;
                $location.path("/endereco");
                carregarEnderecos();
            });
        };
    
        var carregarBairros = function () {
            BairroAPI.getBairros().then(function () {
                $scope.Bairros = Bairros.data;
            });
        };
    
        $scope.bairros.forEach( function(elemento){
            if(elemento.id === $scope.endereco.bairro.id){
                $scope.endereco.bairro = elemento;
            }
        });
    
        init();
    });
})();
