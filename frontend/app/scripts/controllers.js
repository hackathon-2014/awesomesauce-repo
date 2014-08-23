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

.controller('StatsCtrl', function($scope, Stats) {
  $scope.stats = Stats.all()
  console.log("StatsCtrl called")
})

.controller('ChallengeCtrl', function($scope, Challenge) {
  console.log("ChallengersCtrl called")
  $scope.spells = Challenge.allSpells();
  $scope.challengers = Challenge.allChallengers()
  
})

.controller('ChooseSpellsCtrl', function($scope, $stateParams, Challenge) {
  console.log("ChooseSpellsCtrl called")
  $scope.challenger = Challenge.getChallenger($stateParams.challengerId)
  $scope.spells = Challenge.allSpells();
  $scope.spellsChosen = []
  $scope.chooseSpell = function(spellId) {
    if($scope.spellsChosen.length <= 2) {
      var chosenSpell = _.flatten(_.filter($scope.spells, function(spell){
      return spell.id == spellId}))
      console.log("spell:", chosenSpell[0])
      $scope.spellsChosen.push(chosenSpell[0])
      console.log('spellschosen', $scope.spellsChosen)
    } else {
      console.log("three spells chosen")
    }
    
  }
});
