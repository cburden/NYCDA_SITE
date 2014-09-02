// JavaScript Document

(function(){
		  
	var app = angular.module('facultyApp', ['nycdaApp','SideNavLinks','SocialMediaLinks']);

	app.factory('facultyList', function($http){
		
		return {
			'bios' : function(){
				return $http.get('/api/');
			}
		};
	
	});


	app.directive('facultyBios', function(){
		return {
			restrict: 'E',
			templateUrl: '../partials/facultyBios.html',
			controller:  function($scope, facultyList){
				$scope.title = "Faculty";
								
				facultyList.bios()
					.success(function(data){
						$scope.people = data;

					});		
			},
			controllerAs: 'faculty'
		};
	});
	
	app.directive('bioPost', function(){
		return {
			restrict: 'E',
			templateUrl: '../partials/bios.html',
			controller: function($scope, $sce){
				$scope.bioText = $sce.trustAsHtml($scope.staff.bio);
			}
		};
	});

												 
})();