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
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat-detail.ng.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('tab/chats');
}
