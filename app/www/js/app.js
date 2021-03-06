'use strict';

angular.module('onion', ['ionic', 'onion.controllers', 'onion.services', 'onion.config'])
  .run(function ($ionicPlatform, $httpBackend) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });


    //// Mocking code used for simulation purposes (using ngMockE2E module)
    //var authorized = false;
    //var customers = [{name: 'John Smith'}, {name: 'Tim Johnson'}];
    //
    //// returns the current list of customers or a 401 depending on authorization flag
    //$httpBackend.whenGET('http://meetings').respond(function (method, url, data, headers) {
    //  return authorized ? [200, customers] : [401];
    //});
    //
    //$httpBackend.whenPOST('http://login').respond(function (method, url, data) {
    //  authorized = true;
    //  return [200, {authorizationToken: "NjMwNjM4OTQtMjE0Mi00ZWYzLWEzMDQtYWYyMjkyMzNiOGIy"}];
    //});
    //
    //$httpBackend.whenPOST('http://logout').respond(function (method, url, data) {
    //  authorized = false;
    //  return [200];
    //});

    //// All other http requests will pass through
    //$httpBackend.whenGET(/.*/).passThrough();


  })

  .config(function ($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

      // Each tab has its own nav history stack:

      .state('tab.meetings', {
        url: '/meetings',
        views: {
          'tab-meeting': {
            templateUrl: 'templates/meetings.html',
            controller: 'MeetingsCtrl'
          }
        }
      })
      .state('tab.meeting', {
        url: '/meetings/:meetingId',
        views: {
          'tab-meeting': {
            templateUrl: 'templates/meeting.html',
            controller: 'MeetingCtrl'
          }
        }
      })

      
      
      
      


      .state('tab.logout', {
        url: "/logout",
        views: {
          'tab-meeting': {
            templateUrl: "templates/meetings.html",
            controller: "LogoutCtrl"
          }
        }
      })

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.friends', {
        url: '/friends',
        views: {
          'tab-friends': {
            templateUrl: 'templates/tab-friends.html',
            controller: 'FriendsCtrl'
          }
        }
      })
      .state('tab.friend-detail', {
        url: '/friend/:friendId',
        views: {
          'tab-friends': {
            templateUrl: 'templates/friend-detail.html',
            controller: 'FriendDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/meetings');
  });
