(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var list = this;
        list.toBuy = ShoppingListCheckOffService.getShoppingList();

        list.removeItem = function(itemIndex) {
          ShoppingListCheckOffService.removeItem(itemIndex);
        };
        list.isEmpty = function() {
          return list.toBuy.length < 1;
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var list = this;
      list.boughtItems = ShoppingListCheckOffService.getBoughtItems();
      list.isEmpty = function() {
        return list.boughtItems.length < 1;
      };
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuy = [
            '10 Apples',
            '11 Oranges',
            '5 Bananas',
            '9 Pears',
            '3 Melons'
        ];
        var bought = [];
        service.getShoppingList = function() {
            return toBuy;
        };
        service.removeItem = function(itemIndex) {
          var item = toBuy.splice(itemIndex, 1)[0];
          bought.push(item);
        }
        service.getBoughtItems = function () {
          return bought;
        }
    };
})();
