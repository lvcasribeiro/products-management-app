(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("AlterarBairroController", function ($scope, BairroAPI, Bairro, $location) {
        
        $scope.bairro = Bairro.data;
    
        $scope.alterarBairro = function (bairro) {
            BairroAPI.putBairro(bairro).then(function () {
                delete $scope.bairro;
                $location.path("/bairro");
                carregarBairros();
            });
        };
    });
})();
