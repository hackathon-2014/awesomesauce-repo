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
    return Spells.data.spells[spellId];
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

.factory('Challengers', function($http) {
  // Might use a resource here that returns a JSON array
  console.log("Challenge service hit")

  var Challengers = {
    data: {
      challengers: [
        { id: 0, name: 'bobcat'}
      ]
    }
  }



  Challengers.allChallengers = function() {
    return challengers;
  },
  Challengers.getChallenger = function(challengerId){
    return challengers[challengerId];
  },
  Challengers.allSpells = function(){
    return Challengers.data.spells;
  },
  Challengers.getSpell = function(){
    return Challengers.data.spells[spellId]
  },
  Challengers.initChallengers = function(){
    $http.get('http://localhost:3000/challengers.json').success( function(data){
      Challengers.data.challengers = data
    });
    return true;
  },
  Challengers.initSpells = function(){
    $http.get('http://localhost:3000/spells.json').success( function(data){
      Challengers.data.challengers = data
    });
    return true;
  }

  return Challengers
})

.factory('Battle', function() {
  // Might use a resource here that returns a JSON array
  console.log("Challenge service hit")
  // Some fake testing data
  var challengers = [
    { id: 0, name: 'bobcat'},
    { id: 1, name: 'nick'},
    { id: 2, name: 'kevin'},

  ];

  var spells = [
    { id: 0, name: 'expelliarmus' },
    { id: 1, name: 'leviticus' },
    { id: 2, name: 'america' },
    { id: 3, name: 'rock climbing' }
  ];

  var spellsChosen = []

  return {
    allChallengers: function() {
      return challengers;
    },
    getChallenger: function(challengerId){
      return challengers[challengerId];
    },
    allSpells: function(){
      return spells;
    },
    
  };
});
