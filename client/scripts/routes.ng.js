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

    .state('tab.chats.chat', {
      url: '/:id',
      views: {
        'tab-chats@tab': {
          templateUrl: 'client/templates/chat.ng.html',
          controller: 'ChatCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('tab/chats');
}
