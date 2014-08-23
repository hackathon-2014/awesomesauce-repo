'use strict';
angular.module('Frontend.controllers', [])

.controller('DashCtrl', function($scope, Spells, $ionicModal, $timeout) {
  console.log("DashCtrl called")
  //Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    // $scope.modal.show();
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }

})

.controller('SpellsCtrl', function($scope, Spells) {
  console.log("SpellsCtrl called")
  $scope.spells = Spells.data;
  Spells.initSpells();
})

.controller('SpellsDetailCtrl', function($scope, $stateParams, Spells) {
  console.log("SpellDetailCtrl called")
  $scope.spell = Spells.get($stateParams.spellId);
})

.controller('StatsCtrl', function($scope, Stats) {
  $scope.stats = Stats.all()
  console.log("StatsCtrl called")
})

.controller('ChallengeCtrl', function($scope, Challengers, Spells, $http) {
  console.log("ChallengersCtrl called")
  $scope.spells = Spells.data;
  $scope.challengers = Challengers.data;
  console.log($scope.challengers)
  Spells.initSpells()
  Challengers.initChallengers()
  $scope.sendChallengee = function(challengee){
    console.log("challenge sent!!!!!!!!!!!")
    var challenge = {
      challenger_id: 1,
      challengee_id: 2
    }
    $http.post('http://localhost:3000/challenge.json', {challenge: challenge}).success(function(data, status, headers, config){
      console.log("successfully sent user data")
    })

  }
})

.controller('ChooseSpellsCtrl', function($scope, $stateParams, Challengers, Spells) {
  console.log("ChooseSpellsCtrl called")
  Spells.initSpells()

  $scope.challenger = Challengers.getChallenger($stateParams.challengerId)
  $scope.spells = Spells.data;
  $scope.limit = 4;
  $scope.checked = 0;
  $scope.checkChanged = function(item){
    if(item.winner) $scope.checked++;
    else $scope.checked--;
  }
})

.controller('BattleCtrl', function($scope, Battle) {
  console.log("ChallengersCtrl called")
  // $scope.spells = Challenge.allSpells();
  // $scope.challengers = Challenge.allChallengers()
  
});
