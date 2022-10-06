(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").factory("PessoaAPI", function ($http, configUrl) {
        var urlPessoa = configUrl.baseUrl + "/pessoa";

        var _getPessoa = function (id) {
            return $http.get(urlPessoa + "/" + id);
        };
    
        var _getPessoas = function () {
            return $http.get(urlPessoa);
        };
    
        var _savePessoa = function (pessoa) {
            return $http.post(urlPessoa, pessoa)
        };
    
        var _deletePessoa = function (id) {
            return $http.delete(urlPessoa + "/" + id)
        };
    
        var _putPessoa = function (pessoa) {
            return $http.put(urlPessoa + "/" + pessoa.id, pessoa);
        };
    
        return {
            getPessoas: _getPessoas,
            getPessoa: _getPessoa,
            savePessoa: _savePessoa,
            deletePessoa: _deletePessoa,
            putPessoa: _putPessoa
        };
    });
})();
