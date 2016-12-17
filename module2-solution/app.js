(function () {
  'use strict';

angular.module('ShoppingListCheckOff', [])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
var function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  var toBuy = ShoppingListCheckOffService.toBuy();
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
var function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  var bought = ShoppingListCheckOffService.bought();
}

function ShoppingListCheckOffService() {
  var toBuy = [];
  var bought = [];
}
