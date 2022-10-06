(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").factory("ProfissaoAPI", function ($http, configUrl) {
        var urlProfissao = configUrl.baseUrl + "/profissao";

        var _getProfissao = function (id) {
            return $http.get(urlProfissao + "/" + id);
        };
    
        var _getProfissoes = function () {
            return $http.get(urlProfissao);
        };
    
        var _saveProfissao = function (profissao) {
            return $http.post(urlProfissao, profissao)
        };
    
        var _deleteProfissao = function (id) {
            return $http.delete(urlProfissao + "/" + id)
        };
    
        var _putProfissao = function (profissao) {
            return $http.put(urlProfissao + "/" + profissao.id, profissao)
        };
    
        return {
            getProfissoes: _getProfissoes,
            getProfissao: _getProfissao,
            saveProfissao: _saveProfissao,
            deleteProfissao: _deleteProfissao,
            putProfissao: _putProfissao
        };
    });
})();
