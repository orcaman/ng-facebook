# ng-facebook

Simple Facebook Service Provider for Angular.js. Used on https://github.com/orcaman/CardsFeed

## HOW TO:

See demoApp.js. Basically, you need to set your facebook's app ID and permissions scope and that's it. 

## Methods exposed:

facebook.graph(string, callback): get any result set from FB Graph API. 
```
facebook.graph('/me/notifications', onNotificationsGotten);
```

facebook.login(callback): start the OAuth2 authentication and authorization flow. this is where the user approves your app / logs in.
```
$scope.connectToFB = function() {
    facebook.login(function(result) {
      if (result.expiresIn && result.expiresIn > 0) {
        statusChangeCallback({"status" : "connected"})
      }
    });
  }
```

configure your app's ID and required permissions on the config section:
```
angular.module('<YOUR_ANGULAR_APP>').config(function(facebookProvider){
  facebookProvider.setAppID('<YOUR_FACEBOOK_APPID>');
  facebookProvider.setScope('<YOUR_FACEBOOK_APP_PERMISSIONS_SCOPE>');
})
```

Replace these values with the values that correspond to your app:

"YOUR_ANGULAR_APP"    - your angular app ID (ng-app)
"YOUR_FACEBOOK_APPID" - your facebook app ID (for example: "234229944")
"YOUR_FACEBOOK_APP_PERMISSIONS_SCOPE" - permissions required by your app (for example: "manage_notifications")