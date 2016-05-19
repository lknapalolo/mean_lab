"use strict";

(function(){
  angular
  .module("SecretMagicApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .controller("Index", IndexCtrl)
  .factory("Unicorn", UnicornFactoryFarm)

  Router.$inject = ["$stateProvider", "$locationProvider"];
  function Router($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("index", {
      url: "/unicorngrove",
      templateUrl: "/assets/html/unicorn-grove.html",
      controller: "Index",
      controllerAs: "IndexVm"
    })
  }

UnicornFactoryFarm.$inject = ["$resource"];
function UnicornFactoryFarm($resource){
  var SpecialMagicalUnicornRainbowGlitterConveyorBeltLisaFrank = $resource("/api/unicorns/:name", {}, {
    update: {method: "PUT"}
  });
  return SpecialMagicalUnicornRainbowGlitterConveyorBeltLisaFrank
}

IndexCtrl.$inject = ["Unicorn", "$stateParams", "$state"]
  function IndexCtrl(Unicorn, $stateParams, state){
    var vm = this;
    vm.unicorns = Unicorn.query();
  }
})();
