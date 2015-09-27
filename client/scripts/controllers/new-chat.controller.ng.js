angular
  .module('Whatsapp')
  .controller('NewChatCtrl', NewChatCtrl);

function NewChatCtrl ($scope, $state, $meteor) {
  $scope.$meteorSubscribe('users').then(function () {
    $scope.users = $scope.$meteorCollection(function () {
      return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    }, false);
  });

  $scope.hideModal = hideModal;
  $scope.newChat = newChat;

  ////////////

  function hideModal () {
    $scope.modal.hide();
  }

  function newChat (userId) {
    var chat = Chats.findOne({ type: 'chat', userIds: { $all: [Meteor.userId(), userId] } });
    if (chat) {
      return goToChat(chat._id);
    }

    $meteor.call('newChat', userId).then(goToChat);
  }

  function goToChat (chatId) {
    hideModal();
    return $state.go('tab.chat-detail', { chatId: chatId });
  }
}
