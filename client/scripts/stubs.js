Meteor.methods({
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
