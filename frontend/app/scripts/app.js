'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('Frontend', ['ionic', 'config', 'Frontend.controllers', 'Frontend.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.spells', {
      url: '/spells',
      views: {
        'tab-spells': {
          templateUrl: 'templates/tab-spells.html',
          controller: 'SpellsCtrl'
        }
      }
    })
    .state('tab.spell-detail', {
      url: '/spells/:spellId',
      views: {
        'tab-spells': {
          templateUrl: 'templates/spell-detail.html',
          controller: 'SpellsDetailCtrl'
        }
      }
    })

    .state('tab.stats', {
      url: '/stats',
      views: {
        'tab-stats': {
          templateUrl: 'templates/tab-stats.html',
          controller: 'StatsCtrl'
        }
      }
    })

    .state('tab.challenge', {
      url: '/challenge',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-challengers.html',
          controller: 'ChallengeCtrl'
        }
      }
    })

    .state('tab.choose-spells', {
      url: '/challenge/:challengerId/choose-spells',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-choose-spells.html',
          controller: 'ChooseSpellsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

