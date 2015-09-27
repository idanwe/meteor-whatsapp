Meteor.publish('users', function () {
  return Meteor.users.find({}, { fields: { profile: 1 } });
});

Meteor.publishComposite('chats', function () {
  if (! this.userId) {
    return;
  }

  return {
    find: function () {
      return Chats.find({ userIds: this.userId });
    },
    children: [
      {
        find: function (chat) {
          return Messages.find({ chatId: chat._id });
        }
      },
      {
        find: function (chat) {
          var query = { _id: { $in: chat.userIds } };
          var options = { fields: { profile: 1 } };

          return Meteor.users.find(query, options);
        }
      }
    ]
  }
});

