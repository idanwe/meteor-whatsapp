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
    $scope.modal = modal;
  });

  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  $scope.openNewChatModal = openNewChatModal;

  ////////////

  function openNewChatModal () {
    $scope.modal.show();
  }
}
