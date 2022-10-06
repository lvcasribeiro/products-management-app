(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("ProfissaoController", function ($scope, ProfissaoAPI, Profissoes) {
        
        $scope.profissoes = Profissoes.data;
    
        const init = function () {
            carregarProfissoes();
        }
    
        var carregarProfissoes = function () {
            ProfissaoAPI.getProfissoes().then(function () {
                $scope.profissoes = Profissoes.data;
            });
        };
    
        $scope.adicionarProfissao = function (profissao) {
            ProfissaoAPI.saveProfissao(profissao).then(function () {
                delete $scope.profissao;
                carregarProfissoes();
            });
        };
    
        $scope.apagarProfissao = function (profissao) {
            ProfissaoAPI.deleteProfissao(profissao.id).then(function () {
                delete $scope.profissao;
                carregarProfissoes();
            });
        };
    
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcao = !$scope.direcao;
        };
    
        init();
    });
})();
