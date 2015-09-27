 Meteor Whatsapp
==============

### Step 1 - Create the project

1. Install meteor `$ curl https://install.meteor.com/ | sh`
2. Create meteor project `$ meteor create whatsapp`
3. Add angular and ionic `$ meteor add angular driftyco:ionic`
4. Create project structure
    * /client
        - /scripts
            + /lib
                + app.js
        - /styles
        - /templates
        - index.html
    * /server
    * /public 

### Step 2 - Mock chats view

1. Add tabs and routes
    * Add `tabs.ng.html`
    * Add `routes.ng.js`
2. Mock chats view
    * Add ChatsCtrl
    * Add `chats.ng.html`
    * Add calendar filters
        - Add moment `$ meteor add momentjs:moment`
3. Setup sass
    * Add sass `$ meteor add fourseven:scss`
    * Add `chats.scss`

### Step 3 - Add Collections

1. Add Messages and Chats collections 
    * Add /lib/collections.js
2. Add /server/boostrap.js
3. Use angular meteor collection and remove() function

### Step 4 - Add chat view

1. Add chat detail view
    * Add `chat-details.ng.html`
    * Add `chat-details.scss`
    * Add pictures: `chat-background.png`, `message-other.png`, `message-mine.png`
        - images paths are absolute from the `public` folder
    * Add angular moment 
        - `$ meteor add jasonaibrahim:angular-moment`
        - Add `'angularMoment'` to the app dependencies
    * Add `input` directive for better mobile experience - `directives/input.directive.ng.js`
2. Add `'newMessage` method
    * Add `lib/methods.js`
    * `$ meteor add check`

### Step 5 - Add users

1. Add login with phone number
    * `$ meteor add okland:accounts-phone`
    * Add `server/sms.js` and `settings.json`
2. Add login flow:
    * Add `'login'`, `'confirmation'`, `'profile'` states
    * Server: Add `'updateName'` method 
    * Add 'login', 'profile' style files
3. Ensure that user is logged in:
    * Ensure user before 'tab', 'profile' states - resolve `$meteor.requireUser()`
    * Redirect to login route - `auth.js`
    * Server: Ensure that user logged in before preform methods
4. Server: Add `userId` to message 
5. Add `'settings'` tab with logout button
    * Add controller and template

### Step 6 - Create and remove chat

1. Add new chat modal view - add controller and template
2. Add `'newChat'` method and stub
3. Add `chatName` and `chatPicture` filters to get data by user _id
4. `$ meteor remove insecure`
5. Add `'removeChat'` method and change in `ChatsCtrl`

### Step 7 - Publish and subscribe

1. `$ meteor remove autopublish`
2. Add `'chats'` publish 
    * `$ meteor add reywood:publish-composite`
    * `$ touch publications.js`
    * Subscribe at the 'tab' state - resolve `$meteor.subscribe('chats');`
3. Add `'users'` publish
    * Subscribe at new chat controller

### Step 8 - Add profile picture

1. `$ meteor add okland:camera-ui`
2. Add `'updatePicture'` method
3. Add link to profile in settings

### Step 9 - Send picutre

1. Refactor `'sendMessage'` function to picture message
2. Add `message.type`
    * Run `db.messages.update({ type: { $exists: false } }, { $set: { type: 'text' } }, { multi: true })`
3. Adjust `chats` and `chat-detail` templates and style
