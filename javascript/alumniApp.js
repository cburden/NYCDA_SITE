// JavaScript Document

(function(){
	
	var app = angular.module('alumniApp', ['nycdaApp']);
	
	app.factory('alumniData', function($http){
		
		return {
			'alumn' : function(){
				return $http.get('/api/alumni');
			}
		};
	
	});


	app.directive('alumniList', function(){
		return {
			restrict: 'E',
			templateUrl: '../partials/alumniBioList.html',
			controller: function($scope, alumniList, $sce){

				alumniList.alumn()
					.success(function(data){
						$scope.alumni = alumniList.alumn();
					});

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