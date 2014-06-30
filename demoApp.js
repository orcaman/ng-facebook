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