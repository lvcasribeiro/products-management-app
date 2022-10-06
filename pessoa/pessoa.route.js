(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").config(function ($routeProvider) {
        
        $routeProvider.when("/pessoa", {
            templateUrl: "/pessoa/pessoa.html",
            controller: "PessoaController",
            resolve: {
                Pessoas: function(PessoaAPI){
                    return PessoaAPI.getPessoas();
                },
                Enderecos: function(EnderecoAPI){
                    return EnderecoAPI.getEnderecos();
                },
                Profissoes: function(ProfissaoAPI){
                    return ProfissaoAPI.getProfissoes();
                }
            }
        });
    
        $routeProvider.when("/alterar-pessoa/:id", {
            templateUrl: "/pessoa/alterar-pessoa.html",
            controller: "AlterarPessoaController",
            resolve: {
                Pessoa: function(PessoaAPI, $route){
                    return PessoaAPI.getPessoa($route.current.params.id);
                },
                Enderecos: function(EnderecoAPI){
                    return EnderecoAPI.getEnderecos();
                },
                Profissoes: function(ProfissaoAPI){
                    return ProfissaoAPI.getProfissoes();
                }
            }
        });
    });
})();
