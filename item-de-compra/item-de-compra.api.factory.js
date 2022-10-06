(function () {
    'use strict';
    
    angular.module("formulario-de-cadastros").factory("ItemAPI", function ($http, configUrl) {
        var urlItem = configUrl.baseUrl + "/item";

        var _getItem = function (id) {
            return $http.get(urlItem + "/" + id);
        };
    
        var _getItens = function () {
            return $http.get(urlItem);
        };
    
        var _saveItem = function (item) {
            return $http.post(urlItem, item)
        };
    
        var _deleteItem = function (id) {
            return $http.delete(urlItem + "/" + id)
        };
    
        var _putItem = function (item) {
            return $http.put(urlItem + "/" + item.id, item);
        };
    
        return {
            getItens: _getItens,
            getItem: _getItem,
            saveItem: _saveItem,
            deleteItem: _deleteItem,
            putItem: _putItem
        };
    });
})();
