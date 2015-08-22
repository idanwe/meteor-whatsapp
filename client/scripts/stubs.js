Meteor.methods({
  newChat: function (otherId) {
    check(otherId, String);

    var otherUser = Meteor.users.findOne(otherId);
    if (!otherUser) {
      throw Meteor.Error('user-not-exists', 'Chat\'s user not exists');
    }

    var chat = {
      userIds: [Meteor.userId(), otherId],
      type: 'chat',
      createdAt: new Date()
    };

    return Chats.insert(chat);
  },

  newMessage: function (message) {
    check(message, {
      text: String,
      chatId: String
    });

    message.timestamp = new Date();
    message.userId = Meteor.userId();

    Messages.insert(message);
    return Chats.update(message.chatId, { $set: { lastMessage: message } });
  }
});
