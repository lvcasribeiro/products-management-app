(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("EnderecoController", function ($scope, EnderecoAPI, BairroAPI, Enderecos, Bairros) {
        
        $scope.enderecos = Enderecos.data;
        $scope.bairros = Bairros.data;
    
        const init = function () {
            carregarEnderecos();
            carregarBairros();
        }
    
        var carregarEnderecos = function () {
            EnderecoAPI.getEnderecos().then(function () {
                $scope.enderecos = Enderecos.data;
            });
        };
    
        $scope.adicionarEndereco = function (endereco) {
            EnderecoAPI.saveEndereco(endereco).then(function () {
                delete $scope.endereco;
                carregarEnderecos();
            });
        };
    
        $scope.apagarEndereco = function (endereco) {
            EnderecoAPI.deleteEndereco(endereco.id).then(function () {
                delete $scope.endereco;
                carregarEnderecos();
            });
        };
    
        var carregarBairros = function () {
            BairroAPI.getBairros().then(function () {
                $scope.bairros = Bairros.data;
            });
        };
    
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcao = !$scope.direcao;
        };
    
        init();
    });
})();
