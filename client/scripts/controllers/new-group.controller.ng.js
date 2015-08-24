angular
  .module('Whatsapp')
  .controller('NewGroupCtrl', NewGroupCtrl);

function NewGroupCtrl ($scope, $state, $meteor) {
  $scope.users = $scope.$meteorCollection(function () {
    return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
  }, false);

  $scope.hideModal = hideModal;
  $scope.newGroup = newGroup;
  $scope.addPicture = addPicture;

  ////////////

  function hideModal () {
    $scope.newGroupModal.hide();
  }

  function newGroup (userId) {
    $meteor.call('newGroup', userId).then(goToChat);
  }

  function addPicture () {
    MeteorCameraUI.getPicture({ width: 60, height: 60 }, function (err, data) {
      if (err && err.error == 'cancel') {
        return;
      }

      if (err) {
        return handleError(err);
      }

      $scope.data.picture = data;
    });
  }

  function goToChat (chatId) {
    hideModal();
    return $state.go('tab.chats.chat', { id: chatId });
  }

  function handleError (err) {
    $log.error('new group error ', err);
    $ionicPopup.alert({
      title: err.reason || 'Create group failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}
