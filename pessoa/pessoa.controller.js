(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("PessoaController", function ($scope, PessoaAPI, Pessoas, EnderecoAPI, Enderecos, ProfissaoAPI, Profissoes) {
        
        $scope.pessoas = Pessoas.data;
        $scope.enderecos = Enderecos.data;
        $scope.profissoes = Profissoes.data;
    
        const init = function () {
            carregarPessoas();
            carregarEnderecos();
            carregarProfissoes();
        }
    
        var carregarPessoas = function () {
            PessoaAPI.getPessoas().then(function () {
                $scope.pessoas = Pessoas.data;
            });
        };
    
        $scope.adicionarPessoa = function (pessoa) {
            if (pessoa.necessidades == undefined) {
                pessoa.necessidades = 'Não';
            } else {
                pessoa.necessidades = 'Sim';
            }
            PessoaAPI.savePessoa(pessoa).then(function () {
                delete $scope.pessoa;
                carregarPessoas();
            });
        };
    
        $scope.apagarPessoa = function (pessoa) {
            PessoaAPI.deletePessoa(pessoa.id).then(function () {
                delete $scope.pessoa;
                carregarPessoas();
            });
        };
    
        var carregarEnderecos = function () {
            EnderecoAPI.getEnderecos().then(function () {
                $scope.enderecos = Enderecos.data;
            });
        };
    
        var carregarProfissoes = function () {
            ProfissaoAPI.getProfissoes().then(function () {
                $scope.profissoes = Profissoes.data;
            });
        };
    
        init();
    });
})();
