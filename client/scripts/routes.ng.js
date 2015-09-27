angular
  .module('Whatsapp')
  .config(config);

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'client/templates/login.ng.html',
      controller: 'LoginCtrl'
    })

    .state('confirmation', {
      url: '/confirmation/:phone',
      templateUrl: 'client/templates/confirmation.ng.html',
      controller: 'ConfirmationCtrl'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'client/templates/profile.ng.html',
      controller: 'ProfileCtrl',
      resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        }]
      }
    })

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.ng.html',
      resolve: {
        user: ['$meteor', function ($meteor) {
          return $meteor.requireUser();
        }],
        chats: ['$meteor', function ($meteor) {
          return $meteor.subscribe('chats');
        }]
      }
    })

    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chats.ng.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat-detail.ng.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'client/templates/settings.ng.html',
          controller: 'SettingsCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('tab/chats');
}
