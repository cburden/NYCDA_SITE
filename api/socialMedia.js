// JavaScript Document

(function(){
	
	var app = angular.module('SocialMediaLinks', []);
	
	app.factory('SocialMediaLinks', function($http){
		
		return {
			'links' : function(){
				return $http.get('/api/social');
			}
		};
	
	});

})();