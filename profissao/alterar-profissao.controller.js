(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("AlterarProfissaoController", function ($scope, ProfissaoAPI, Profissao, $location) {
        
        $scope.profissao = Profissao.data;
    
        $scope.alterarProfissao = function (profissao) {
            ProfissaoAPI.putProfissao(profissao).then(function () {
                delete $scope.profissao;
                $location.path("/profissao");
                carregarProfissoes();
            });
        };
    });
})();
