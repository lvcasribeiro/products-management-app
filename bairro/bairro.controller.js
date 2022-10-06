(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("BairroController", function ($scope, BairroAPI, Bairros) {
        
        $scope.bairros = Bairros.data;
    
        const init = function () {
            carregarBairros();
        }
    
        var carregarBairros = function () {
            BairroAPI.getBairros().then(function () {
                $scope.bairros = Bairros.data;
            });
        };
    
        $scope.adicionarBairro = function (bairro) {
            BairroAPI.saveBairro(bairro).then(function () {
                delete $scope.bairro;
                carregarBairros();
            });
        };
    
        $scope.apagarBairro = function (bairro) {
            BairroAPI.deleteBairro(bairro.id).then(function () {
                delete $scope.bairro;
                carregarBairros();
            });
        };
    
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcao = !$scope.direcao;
        };
    
        init();
    });
})();
