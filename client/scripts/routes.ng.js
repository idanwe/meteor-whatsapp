angular
  .module('Whatsapp')
  .config(config);

function config ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.ng.html'
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
