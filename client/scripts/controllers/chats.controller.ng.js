angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope, $ionicModal) {
  $scope.chats = $scope.$meteorCollection(function () {
    return Chats.find({ userIds: Meteor.userId() });
  }, false);

  $ionicModal.fromTemplateUrl('client/templates/new-chat.ng.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.newChatModal = modal;
  });
  $ionicModal.fromTemplateUrl('client/templates/new-group.ng.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.newGroupModal = modal;
  });

  $scope.$on('$destroy', function () {
    $scope.newChatModal.remove();
    $scope.newGroupModal.remove();
  });

  $scope.openNewChatModal = openNewChatModal;
  $scope.openNewGroupModal = openNewGroupModal;

  ////////////

  function openNewChatModal () {
    $scope.newChatModal.show();
  }

  function openNewGroupModal () {
    $scope.newGroupModal.show();
  }
}
