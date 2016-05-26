"use strict";

(function(){
  angular
  .module("SecretMagicApp", [
    "ui.router",
    "ngResource"
  ])
  .config(Router)
  .controller("Index", IndexCtrl)
  .controller("Show", ShowCtrl)
  .factory("Unicorn", UnicornFactoryFarm)
  .directive("unicornNewAgeBirthingCenter", unicornWaterBirth);

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
    .state("show", {
      url: "/unicorngrove/:name",
      templateUrl: "/assets/html/unicorn-pedestal.html",
      controller: "Show",
      controllerAs: "ShowVm"
    });
  }

  function unicornWaterBirth(){
    return {
      templateUrl: "unicorn-new-age-birthing-center.html"
    };
  }

  UnicornFactoryFarm.$inject = ["$resource"];
  function UnicornFactoryFarm($resource){
    var SpecialMagicalUnicornRainbowGlitterConveyorBeltLisaFrank = $resource("/api/unicorns/:name", {}, {
      update: {method: "PUT"}
    });
    return SpecialMagicalUnicornRainbowGlitterConveyorBeltLisaFrank;
  }

  IndexCtrl.$inject = ["Unicorn", "$stateParams", "$state"];
  function IndexCtrl(Unicorn, $stateParams, state){
    var vm = this;
    vm.unicorns = Unicorn.query();

    vm.unigenesis = function(){
      Unicorn.save(vm.babyUnicorn, function(tiny_corn){
        vm.unicorns.push(tiny_corn);
      });
    };
  }

  ShowCtrl.$inject = ["Unicorn", "$stateParams", "$state"];
  function ShowCtrl(Unicorn, $stateParams, $state){
    var vm = this;
    vm.unicorn = Unicorn.get($stateParams);
  }
})();
