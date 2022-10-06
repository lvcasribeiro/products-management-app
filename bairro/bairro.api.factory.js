(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").factory("BairroAPI", function ($http, configUrl) {
        var urlBairro = configUrl.baseUrl + "/bairro";

        var _getBairro = function (id) {
            return $http.get(urlBairro + "/" + id);
        };
    
        var _getBairros = function () {
            return $http.get(urlBairro);
        };
    
        var _saveBairro = function (bairro) {
            return $http.post(urlBairro, bairro)
        };
    
        var _deleteBairro = function (id) {
            return $http.delete(urlBairro + "/" + id)
        };
    
        var _putBairro = function (bairro) {
            return $http.put(urlBairro + "/" + bairro.id, bairro);
        };
    
        return {
            getBairros: _getBairros,
            getBairro: _getBairro,
            saveBairro: _saveBairro,
            deleteBairro: _deleteBairro,
            putBairro: _putBairro
        };
    });
})();
