Meteor.methods({
  newChat: function (otherId) {
    check(otherId, String);

    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to create a chat.');
    }

    var otherUser = Meteor.users.findOne(otherId);
    if (!otherUser) {
      throw Meteor.Error('user-not-exists', 'Chat\'s user not exists');
    }

    var chat = {
      userIds: [this.userId, otherId],
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

    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to send a message.');
    }

    message.timestamp = new Date();
    message.userId = this.userId;

    Messages.insert(message);
    return Chats.update(message.chatId, { $set: { lastMessage: message } });
  },

  updateName: function (name) {
    check(name, String);
    if (name.length === 0) {
      throw Meteor.Error('name-required', 'Must proive user name');
    }

    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his name.');
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
  },

  updatePicture: function (data) {
    check(data, String);

    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his picture.');
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.picture': data } });
  }
});
