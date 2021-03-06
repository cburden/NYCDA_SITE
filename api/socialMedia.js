// JavaScript Document

(function(){
	
	var app = angular.module('SocialMediaLinks', []);
	
	app.factory('SocialMediaLinks', function($http){
		
		return {
			'links' : function(){
				return [
					{
						"ref" 	: "http://www.sft.edu/blog",
						"title" : "Blog",
						"img"	: "../_includes/images/iconmenu/icon1.png" 
					},
					{
						"ref" 	: "http://www.facebook.com/pages/The-New-York-Conservatory-for-Dramatic-Arts/56532786192",
						"title" : "Facebook",
						"img"	: "../_includes/images/iconmenu/icon2.png" 
					},
					{
						"ref" 	: "http://twitter.com/#!/nycondramarts",
						"title" : "Twitter",
						"img"	: "../_includes/images/iconmenu/icon3.png" 
					},
					{
						"ref" 	: "http://www.flickr.com/photos/nycda",
						"title" : "Flickr",
						"img"	: "../_includes/images/iconmenu/icon4.png" 
					},
					{
						"ref" 	: "http://www.youtube.com/user/NYConDramArts",
						"title" : "YouTube",
						"img"	: "../_includes/images/iconmenu/icon5.png" 
					},
					{
						"ref" 	: "http://vimeo.com/user3643660",
						"title" : "Vimeo",
						"img"	: "../_includes/images/iconmenu/icon6.png" 
					}
				];
			}
		};
	
	});

})();