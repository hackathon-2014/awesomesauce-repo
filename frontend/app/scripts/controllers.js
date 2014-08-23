'use strict';
angular.module('Frontend.controllers', [])

.controller('DashCtrl', function($http, $scope, $location, Spells, $ionicModal, $timeout) {
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
    if(!($scope.isLoggedIn())){
      console.log('logged in is false')
      $scope.login()
    }
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


  $scope.isLoggedIn = function(){
    return false;
  }


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $http.post('http://localhost:3000/users', {login_info: $scope.loginData}).success(function(resp){
      console.log("user logged in, resp:", resp)
      $scope.closeLogin();
      
    })
    
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
  $scope.checkChanged = function(spell){
    console.log(spell)
    console.log($scope.spellsChosen)
    // if(item.winner) $scope.checked++;
    // else $scope.checked--;
  }

  $scope.sendChallenge = function(challengerId){
    console.log("challenge data sent")
    $http.post('http://localhost:3000/battles.json', {battle: window.challenge}).success(function(data, status, headers, config){
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
