angular
  .module('Whatsapp')
  .filter('chatName', chatName);

function chatName () {
  return function (chat) {
    if (!chat) return;

    var otherId = _.without(chat.userIds, Meteor.userId())[0];
    var otherUser = Meteor.users.findOne(otherId);
    return otherUser.profile ? otherUser.profile.name : 'PLACE HOLDER';
  }
}
