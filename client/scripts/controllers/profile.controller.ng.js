angular
  .module('Whatsapp')
  .controller('ProfileCtrl', ProfileCtrl);

function ProfileCtrl ($scope, $state, $meteor) {

  var user = Meteor.user();
  var name = user && user.profile ? user.profile.name : '';
  $scope.data = {
    name: name
  };

  $scope.updateName = updateName;

  ////////////

  function updateName () {
    if (_.isEmpty($scope.data.name)) {
      return;
    }

    $meteor.call('updateName', $scope.data.name)
      .then(function () {
        $state.go('tab.chats');
      })
      .catch(function (err) {
        $ionicPopup.alert({
          title: err.reason || 'Save failed',
          template: 'Please try again',
          okType: 'button-positive button-clear'
        });
      });
  }
}
