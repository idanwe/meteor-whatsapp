angular
  .module('Whatsapp')
  .controller('ConfirmationCtrl', ConfirmationCtrl);

function ConfirmationCtrl ($scope, $state, $ionicPopup, $log) {

  $scope.phone = $state.params.phone;
  $scope.data = {};

  $scope.verify = verify;

  ////////////

  function verify () {
    if (_.isEmpty($scope.data.code)) {
      return;
    }

    Accounts.verifyPhone($scope.phone, $scope.data.code, function (err) {
      if (err) {
        return handleError(err);
      }

      $state.go('profile');
    });
  }

  function handleError (err) {
    $log.error('Verfication error ', err);

    $ionicPopup.alert({
      title: err.reason || 'Verfication failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
   });
  }
}
