(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").factory("CompraAPI", function ($http, configUrl) {
        var urlCompra = configUrl.baseUrl + "/compra";

        var _getCompra = function (id) {
            return $http.get(urlCompra + "/" + id);
        };
    
        var _getCompras = function () {
            return $http.get(urlCompra);
        };
    
        var _saveCompra = function (compra) {
            return $http.post(urlCompra, compra)
        };
    
        var _deleteCompra = function (id) {
            return $http.delete(urlCompra + "/" + id)
        };
    
        var _putCompra = function (compra) {
            return $http.put(urlCompra + "/" + compra.id, compra);
        };
    
        return {
            getCompras: _getCompras,
            getCompra: _getCompra,
            saveCompra: _saveCompra,
            deleteCompra: _deleteCompra,
            putCompra: _putCompra
        };
    });
})();
