(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/profissao", {
            templateUrl: "/profissao/profissao.html",
            controller: "ProfissaoController",
            resolve: {
                Profissoes: function(ProfissaoAPI){
                    return ProfissaoAPI.getProfissoes();
                }
            }
        });
    
        $routeProvider.when("/alterar-profissao/:id", {
            templateUrl: "/profissao/alterar-profissao.html",
            controller: "AlterarProfissaoController",
            resolve: {
                Profissao: function(ProfissaoAPI, $route){
                    return ProfissaoAPI.getProfissao($route.current.params.id);
                }
            }
        });
    });
})();
