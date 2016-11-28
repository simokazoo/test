( function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.itemsBuy = ShoppingListCheckOffService.itemsBuy();

  toBuyList.buy = function(index){ 
    ShoppingListCheckOffService.buy(index);
  };

  toBuyList.isEmpty = function(){
    return toBuyList.itemsBuy.length === 0;
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBoughtList = this;
  alreadyBoughtList.itemsBought = ShoppingListCheckOffService.itemsBought();

  alreadyBoughtList.isEmpty = function(){ 
    return alreadyBoughtList.itemsBought.length === 0;
  };
}

function ShoppingListCheckOffService(){
  var service = this;

  var buy = [
    {name:"Milk", quantity:"2"},
    {name:"Granola", quantity:"1"},
    {name:"Banana", quantity:"5"},
    {name:"Egg", quantity:"5"},
    {name:"Hemp Seed", quantity:"1"}
  ];

  var bought = [];

  service.itemsBuy = function(){
    return buy;
  };

  service.itemsBought = function(){
    return bought;
  };

  service.buy = function(index){
    var value = buy[index];
    bought.push(value);
    buy.splice(index, 1);
  };
}


})();