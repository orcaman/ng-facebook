# ng-facebook

Simple Facebook Service Provider for Angular.js. Used on https://github.com/orcaman/CardsFeed

## HOW TO:

See demoApp.js. Basically, you need to set your facebook's app ID and permissions scope and that's it.
<YOUR_ANGULAR_APP>    - your angular app ID (ng-app)
<YOUR_FACEBOOK_APPID> - your facebook app ID (for example: "234229944")
<YOUR_FACEBOOK_APP_PERMISSIONS_SCOPE> - permissions required by your app (for example: "manage_notifications")

```
'use strict';

angular.module('<YOUR_ANGULAR_APP>').config(function(facebookProvider){
  facebookProvider.setAppID('<YOUR_FACEBOOK_APPID>');
  facebookProvider.setScope('<YOUR_FACEBOOK_APP_PERMISSIONS_SCOPE>');
})
.controller('MainCtrl', function ($scope, $timeout, $http, facebook) {
  function statusChangeCallback(response) {
    if (response.status != 'connected') {
    } else {
      facebook.graph('/me/notifications', onNotificationsGotten);
    }
  }
  $scope.connectToFB = function() {
    facebook.login(function(result) {
      if (result.expiresIn && result.expiresIn > 0) {
        statusChangeCallback({"status" : "connected"})
      }
    });
  }
  facebook.getLoginStatus(statusChangeCallback);
});
```
