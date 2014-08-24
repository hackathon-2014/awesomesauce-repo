'use strict';
angular.module('PotterBattle.controllers', [])

.controller('DashCtrl', function($rootScope, $http, $scope, $location, Spells, $ionicModal, $timeout, Battle) {
  console.log("DashCtrl called, rootScope is", $rootScope)
  //Form data for the login modal
  // console.log("dialogs", $cordovaDialogs)
  // $cordovaDialogs.beep(2)
  $scope.loginData = {};
  $scope.challenged = false;

  
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    // $scope.modal.show();
    if($rootScope.loginInfo){
      console.log('logged in')
    } else {
      console.log('logged in is false')
      $scope.login()

    }
  });

  $scope.challengePing = function() {
    var challengeInt = setInterval(function(){
      console.log("timeout fired")
      $http.post('http://localhost:3000/battles/detect_challenge.json', {user_id: $rootScope.loginInfo.id}).success(function(resp){
        console.log(resp)
        if(resp){
          // need challenger.id
          if(resp == " "){}
          else{
          Battle.data = resp
        }
          $scope.challenged = true; 
          // $location.path('/tab/challenge/id/choose-spells')
          clearInterval(challengeInt)

        }
      })
    }, 1000)
    
  }

  $scope.challengeeChallenge = function() {
    $location.url("/tab/challengee/" + Battle.data.id + "/choose-challengee-spells")
  }
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
    $http.post('http://localhost:3000/create_user.json', {login_info: $scope.loginData}).success(function(resp){
      console.log("user logged in, resp:", resp)
      // $rootScope.currentUser = resp
      $scope.closeLogin();
      $scope.isLoggedIn = true
      $rootScope.loginInfo = resp
      $scope.challengePing()
      
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

.controller('ChallengeCtrl', function($scope, $rootScope, $location,Challengers, Spells, $http, Battle) {
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
    console.log($rootScope.loginInfo)
    Battle.data.challenger.id = $rootScope.loginInfo.id
    Battle.data.challengee.id = challengerId
    $location.url("/tab/challenge/" + challengerId + "/choose-spells")
  }
})

.controller('ChooseSpellsCtrl', function($rootScope, $http, $location, $scope, $stateParams, Challengers, Spells, Battle) {
  console.log("ChooseSpellsCtrl called")
  Spells.initSpells()
  console.log('coool:', $rootScope.idstuff)
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
      challenger_spells: $scope.spellsChosen,
      challengee_id: Battle.data.challengee.id,
      challengee_spells: [],
      challenger_hp: 50,
      challengee_hp: 50
    }}
    $http.post('http://localhost:3000/battles.json',newBattle).success(function(data, status, headers, config){
      Battle.data = data;
      Battle.data.challengee.spellsChosen = []
      Battle.data.challenger.spellsChosen = []
      $location.url("/tab/challenge/" + Battle.data.id + "/battle")
    })
  }
})

.controller('ChooseChallengeeSpellsCtrl', function($rootScope, $http, $location, $scope, $stateParams, Challengers, Spells, Battle) {
  console.log("ChooseChallengeeSpellsCtrl called")
  Spells.initSpells()
  console.log('coool:', $rootScope.idstuff)
  $scope.challenger = Challengers.getChallenger($stateParams.challengerId)
  $scope.spells = Spells.data;
  $scope.limit = 4;
  $scope.checked = 0;
  $scope.spellsChosen = []
  $scope.battleId = $stateParams.battleId;
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

  $scope.updateChallengeeChallenge = function(challengeId){
    console.log("challenge data sent")
    var newBattle = {
      challengee_id: $rootScope.loginInfo.id,
      challengee_spells: $scope.spellsChosen
    }
    $http.put("http://localhost:3000/battles/" + $scope.battleId +"/update_battle.json",newBattle).success(function(data, status, headers, config){
      Battle.data = data;
      $location.url("/tab/challengee/" + $scope.battleId + "/battle")
    })
  }
})

.controller('BattleCtrl', function($scope, $stateParams, Battle, $http, $rootScope, $location) {
  console.log("ChallengersCtrl called")
  console.log(Battle.data);
  $scope.battle = Battle.data;
  $scope.someone_won = false;
  $scope.winner = "sup";  
  // $scope.challengers = Challenge.allChallengers()
  $scope.challengePing = function() {
    var challengeInt = setInterval(function(){
      console.log("timeout fired")
      $http.get('http://localhost:3000/battles/' + $stateParams.challengeId + '/get_challenge_data.json').success(function(resp){
        console.log(resp)
        Battle.data = resp;
        $scope.battle = resp;
        if($scope.battle.challenger.challenger_hp <= 0) {
          $scope.someone_won = true;
          $scope.winner = "You lost!"
          clearInterval(challengeInt)
          $http.post("http://localhost:3000/battles/" + resp.id + "/end_battle")
        }else if($scope.battle.challengee.challengee_hp <= 0){
          $http.post("http://localhost:3000/battles/" + resp.id + "/end_battle")
          $scope.someone_won = true;
          $scope.winner = "You won!"
          clearInterval(challengeInt)
        }

      })
    }, 1000)
  };
  $scope.challengePing();
  $scope.castSpell = function(spell,damage_person) {
    var castSpellData = {
      user_id: damage_person,
      battle_id: $scope.battle.id
    }
    $http.post('http://localhost:3000/spells/' + spell.id + '/cast_spell.json', castSpellData).success( function() {
      console.log("success")
    })
    console.log("You cast " + spell.name)
  }  
  $scope.backHome = function() {
    $location.url('/');
  }

})

.controller('ChallengeeBattleCtrl', function($scope, $stateParams, Battle, $http, $rootScope, $location) {
  console.log("ChallengeesCtrl called")
  console.log(Battle.data);
  $scope.battle = Battle.data;
  $scope.someone_won = false;
  $scope.winner = "";
  // $scope.challengers = Challenge.allChallengers()
  $scope.challengePing = function() {
    var challengeInt = setInterval(function(){
      console.log("timeout fired")
      $http.get('http://localhost:3000/battles/' + $stateParams.battleId + '/get_challenge_data.json').success(function(resp){
        console.log(resp)
        Battle.data = resp;
        $scope.battle = resp;
        if($scope.battle.challenger.challenger_hp <= 0) {
          $scope.someone_won = true;
          $scope.winner = "You won!"
          clearInterval(challengeInt)
          $http.post("http://localhost:3000/battles/" + resp.id + "/end_battle")
        }else if($scope.battle.challengee.challengee_hp <= 0){
          $scope.someone_won = true;
          $scope.winner = "You lost!"
          $http.post("http://localhost:3000/battles/" + resp.id + "/end_battle")
          clearInterval(challengeInt)
        }
        
      })
    }, 1000)
  };
  $scope.challengePing();

  $scope.castSpell = function(spell, damage_person) {
    var castSpellData = {
      user_id: damage_person,
      battle_id: $scope.battle.id
    }
    $http.post('http://localhost:3000/spells/' + spell.id + '/cast_spell.json', castSpellData).success( function() {
      console.log("success")
    })
    console.log("You cast " + spell.name)
  }
  $scope.backHome = function() {
    $location.url('/');
  }
  
});
