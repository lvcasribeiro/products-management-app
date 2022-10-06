(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").factory("EnderecoAPI", function ($http, configUrl) {
        var urlEndereco = configUrl.baseUrl + "/endereco";

        var _getEndereco = function (id) {
            return $http.get(urlEndereco + "/" + id);
        };
    
        var _getEnderecos = function () {
            return $http.get(urlEndereco);
        };
    
        var _saveEndereco = function (endereco) {
            return $http.post(urlEndereco, endereco)
        };
    
        var _deleteEndereco = function (id) {
            return $http.delete(urlEndereco + "/" + id)
        };
    
        var _putEndereco = function (endereco) {
            return $http.put(urlEndereco + "/" + endereco.id, endereco);
        };
    
        return {
            getEnderecos: _getEnderecos,
            getEndereco: _getEndereco,
            saveEndereco: _saveEndereco,
            deleteEndereco: _deleteEndereco,
            putEndereco: _putEndereco
        };
    });
})();
