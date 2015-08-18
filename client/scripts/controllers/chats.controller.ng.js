angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope) {
  var imageCatergories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport'];

  $scope.chats = _.times(10, function () {
    var time = moment()
                .subtract(_.random(0, 15), 'days')
                .hour(_.random(0, 23))
                .minute(_.random(0, 30))
                .toDate();
    return {
      name: Fake.word(),
      logoUrl: 'http://lorempixel.com/150/150/' + _.sample(imageCatergories),
      lastMessage: {
        text: Fake.sentence(),
        timestamp: time
      }
    }
  });

  $scope.chats.push({
    name: Fake.word(),
    logoUrl: 'http://lorempixel.com/150/150/' + _.sample(imageCatergories),
    lastMessage: {
      text: Fake.sentence(),
      timestamp: moment().subtract(50, 'mintues').toDate()
    }
  })
}
