(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").controller("AlterarPessoaController", function ($scope, PessoaAPI, Pessoa, $location, EnderecoAPI, Enderecos, ProfissaoAPI, Profissoes) {
        
        $scope.pessoa = Pessoa.data;
        $scope.enderecos = Enderecos.data;
        $scope.profissoes = Profissoes.data;
    
        const init = function () {
            carregarEnderecos();
            carregarProfissoes();
        }
    
        $scope.alterarPessoa = function (pessoa) {
            if (pessoa.necessidades == undefined || pessoa.necessidades == false) {
                pessoa.necessidades = 'Não';
            } else {
                pessoa.necessidades = 'Sim';
            }
            PessoaAPI.putPessoa(pessoa).then(function () {
                delete $scope.pessoa;
                $location.path("/pessoa");
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
    
        $scope.enderecos.forEach( function(elemento){
            if(elemento.id === $scope.pessoa.endereco.id){
                $scope.pessoa.endereco = elemento;
            }
        });
    
        $scope.profissoes.forEach( function(elemento){
            if(elemento.id === $scope.pessoa.profissao.id){
                $scope.pessoa.profissao = elemento;
            }
        });
    
        init();
    });
})();
