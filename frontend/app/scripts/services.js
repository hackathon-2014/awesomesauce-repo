'use strict';
angular.module('Frontend.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Spells', function($http) {
  // Might use a resource here that returns a JSON array
  console.log("spells service hit")
  // Some fake testing data
  var spells = [
    { id: 0, name: 'expelliarmus' },
    { id: 1, name: 'leviticus' },
    { id: 2, name: 'america' },
    { id: 3, name: 'rock climbing' }
  ];

  return {
    all: function() {
      return spells;
    },
    get: function(spellId) {
      // Simple index lookup
      return spells[spellId];
    },
    initSpells: function() {
      $http.get('/spells.json').success( function(data){
        Spells.spells = data
      });
    }
  };
})

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

.factory('Challenge', function() {
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
