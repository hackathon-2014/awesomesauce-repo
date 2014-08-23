'use strict';
angular.module('Frontend.controllers', [])

.controller('DashCtrl', function($scope) {
  console.log("DashCtrl called")
})

.controller('SpellsCtrl', function($scope, Spells) {
  console.log("SpellsCtrl called")
  $scope.spells = Spells.all();
})

.controller('SpellsDetailCtrl', function($scope, $stateParams, Spells) {
  console.log("SpellDetailCtrl called")
  $scope.spell = Spells.get($stateParams.spellId);
})

.controller('AccountCtrl', function($scope) {
  console.log("AccountCtrl called")
});
