'use strict';
angular.module('Frontend.services', [])

.factory('Spells', [ '$http', function($http) {
  console.log("spells service hit")
  var  Spells = {
    data: {
      spells: [
        { id: 0, name: 'expelliarmus' }
      ]

    }
  };

  Spells.all = function() {
    return Spells.data.spells;
  },
  Spells.get = function(spellId) {
    return _.findWhere(Spells.data.spells, {id: parseInt(spellId)});
  },
  Spells.initSpells = function() {
    $http.get('http://localhost:3000/spells.json').success( function(data){
      Spells.data.spells = data
    });
    return true;
  }
  return Spells;
  }
])

.factory('Stats', function() {
  // Might use a resource here that returns a JSON array
  console.log("stats service hit")
  // Some fake testing data
  var stats = [
    { id: 0, name: 'wins', value: 12 },
    { id: 1, name: 'losses', value: 13 },
    { id: 2, name: 'battles', value: 25 },

  ];

  return {
    all: function() {
      return stats;
    }
  };
})

.factory('Challengers', [ '$http', function($http) {
  console.log("Challenge service hit")
  var  Challengers = {
    data: {
      challengers: [
        { id: 0, name: 'bobcat'},
        { id: 1, name: 'jake'}
      ]

    }
  };
  Challengers.allChallengers = function() {
    return Challengers.data.challengers;
  },
  Challengers.getChallenger = function(challengerId){
    return _.findWhere(Challengers.data.challengers, {id: parseInt(challengerId)});
  },
  Challengers.initChallengers = function(){
    $http.get('http://localhost:3000/users.json').success( function(data){
      Challengers.data.challengers = data
    });
    return true;
  }
  return Challengers;
  }
])

.factory('Battle', [ '$http', function($http) {
  console.log("Battles service hit")
  var Battle = {
    data: {
      id: 0,
      challenger: { id: 0, name: 'bobcat', spellsChosen: []},
      challengee: { id: 1, name: 'jake', spellsChose: []}
    }
  };
  Battle.allChallengers = function() {
    return Battle.data.challengers;
  }
  return Battle;
  }
])
