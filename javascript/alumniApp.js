// JavaScript Document

(function(){
	
	var app = angular.module('alumniApp', ['nycdaApp', 'alumniData']);
	
	app.directive('alumniList', function(){
		return {
			restrict: 'E',
			templateUrl: '../partials/alumniBioList.html',
			controller: function($scope, alumniList, $sce){
				$scope.alumni = alumniList.alumn();

			}
		};
	});

	app.directive('alumniPost', function(){
		return{
			restrict: 'E',
			templateUrl: '../partials/alumniBioPost.html',
			controller: function($scope, $sce){
				$scope.alumnText = $sce.trustAsHtml($scope.person.bio);
			}
		};
	});

})();