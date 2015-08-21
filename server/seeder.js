Meteor.startup(function() {

  var getRandomTime = function () {
      return moment()
              .subtract(_.random(0, 15), 'days')
              .hour(_.random(0, 23))
              .minute(_.random(0, 30))
              .toDate();
  };

  // Meteor.users.remove({});
  // Accounts.createUser({
  //   username: "scotchio",
  //   email: "scotch@example.com",
  //   password: "dummypassword"
  // });

  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    },
    // user: Meteor.users.findOne()._id,
    timestamp: getRandomTime,
    chatId: 'fake-chat'
  });

  Factory.define('chat', Chats, {
    name: function () {
      return Fake.word();
    },
    picture: function () {
      var category = _.sample(['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport']);
      return 'http://lorempixel.com/150/150/' + category;
    },
    // users
    lastMessage: {
      text: function () {
        return Fake.sentence();
      },
      // user: Meteor.users.findOne()._id,
      timestamp: getRandomTime
    }
  });

  // Add this if you want to remove all messages before seeding
  // Messages.remove({});
  // Chats.remove({})

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  }

  if (Chats.find({}).count() === 0) {
    _(6).times(function(n) {
      Factory.create('chat');
    });

    var fakeChat = _.extend(Factory.build('chat'), {
      _id: 'fake-chat',
      name: 'Fakeeerrr',
      lastMessage: Messages.findOne({}, { fields: { text: 1, timestamp: 1, userId: 1 } })
    });
    Chats.insert(fakeChat);
  }

});
