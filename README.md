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
