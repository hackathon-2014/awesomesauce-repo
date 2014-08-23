'use strict';
angular.module('Frontend.controllers', [])

.controller('DashCtrl', function($scope, $location, Spells, $ionicModal, $timeout, $cordovaDialogs) {
  console.log("DashCtrl called")
  //Form data for the login modal
  // console.log("dialogs", $cordovaDialogs)
  // $cordovaDialogs.beep(2)
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
  };

  $scope.challengeWizard = function() {
    $location.url("/tab/challenge")
  }

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

.controller('SpellsCtrl', function($scope, $location, Spells) {
  console.log("SpellsCtrl called")
  $scope.spells = Spells.data;
  Spells.initSpells();
})

.controller('SpellsDetailCtrl', function($scope, $location, $stateParams, Spells) {
  console.log("SpellDetailCtrl called")
  $scope.spell = Spells.get($stateParams.spellId);
})

.controller('StatsCtrl', function($scope, $location, Stats) {
  $scope.stats = Stats.all()
  console.log("StatsCtrl called")
})

.controller('ChallengeCtrl', function($scope, $location,Challengers, Spells, $http, Battle) {
  console.log("ChallengersCtrl called")
  $scope.spells = Spells.data;
  $scope.challengers = Challengers.data;
  console.log($scope.challengers)
  Spells.initSpells()
  Challengers.initChallengers()
  $scope.setChallengeData = function(challengee){
    console.log("challenge set globally")
    window.challenge = {
      // change this to reference current user's id
      challenger_id: 1,
      challengee_id: 2
    }
  }

  $scope.wizardSelected = function(challengerId) {
    console.log("hi")
    Battle.data.challenger.id = 1
    Battle.data.challengee.id = challengerId
    $location.url("/tab/challenge/" + challengerId + "/choose-spells")
  }
})

.controller('ChooseSpellsCtrl', function($http, $location, $scope, $stateParams, Challengers, Spells, Battle) {
  console.log("ChooseSpellsCtrl called")
  Spells.initSpells()

  $scope.challenger = Challengers.getChallenger($stateParams.challengerId)
  $scope.spells = Spells.data;
  $scope.limit = 4;
  $scope.checked = 0;
  $scope.spellsChosen = []
  $scope.toggleSelection = function(spell){
    var idx = $scope.spellsChosen.indexOf(spell);
    if(idx > -1) {
      $scope.spellsChosen.splice(idx, 1);
      console.log($scope.spellsChosen)
    }
    else {
      $scope.spellsChosen.push(spell)
      console.log($scope.spellsChosen)
    }
  }

  $scope.maxSelected = function() {
    return $scope.spellsChosen.length > 3;
  }

  $scope.sendChallenge = function(challengerId){
    console.log("challenge data sent")
    var newBattle = {battle:{
      challenger_id: Battle.data.challenger.id,
      challengee_id: Battle.data.challengee.id
    }}
    $http.post('http://localhost:3000/battles.json',newBattle).success(function(data, status, headers, config){
      Battle.data = data;
      Battle.data.challengee.spellsChosen = []
      Battle.data.challenger.spellsChosen = []
      $location.url("/tab/challenge/" + challengerId + "/battle")
    })
  }
})

.controller('BattleCtrl', function($scope, Battle) {
  console.log("ChallengersCtrl called")
  console.log(Battle.data);
  $scope.battle = Battle.data;
  // $scope.challengers = Challenge.allChallengers()
  
});
