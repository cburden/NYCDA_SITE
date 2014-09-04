// JavaScript Document

(function(){
		  
	var app = angular.module('nycdaApp', ['SideNavLinks','SocialMediaLinks']);

	app.directive('footerBlock', function(){
		return {
			restrict: 'E',
			templateUrl: '../partials/footer.html',
			controller: function($scope, $sce){
				$scope.writeEmailAddressInfo = function(){
					var emailAddr=('in' + 'fo' + '@' + 'sf' + 't.edu');
					return $sce.trustAsHtml('<a href="mailto:' + emailAddr + '?subject=SFT Information Request">' + emailAddr + '</a>');
				};

				$scope.writePhoneNumber = function(){
					var phoneNumber=('888.' + '645' + '.0' + '030');
					return phoneNumber;
				};
			}
		};
	});

	app.directive('sideNav', function(){
		return {
			restrict: 'E',
			templateUrl: '../partials/sideNav.html',
			controller: function($scope, SideNavLinks, $sce, $location){
				var preNavLinks = SideNavLinks.mainNavLinks();


				function isCurrentLink(ref){
					var path = ref.match(/\/(.*)\/(.*.html)$/);
			   		var base = $location.absUrl().match(/http:\/\/(?:www.)?(?:.)+\/(.*)\/(.*.html)/);
			   		if (!path || !base) return;
			   		return (path[1] == base[1]) ? true : false;
				}



				$scope.navLinks = preNavLinks.map(function(pLink){
					return{
						'class' : pLink.class,
						'ref'	: pLink.ref,
						'text'	: $sce.trustAsHtml(pLink.text),
						'isCurrent' : isCurrentLink(pLink.ref)
					}
				});

			}
		};
	});

	app.directive('socialMedia', function(){
		return{
			restrict: 'E',
			templateUrl: '../partials/socialMedia.html',
			controller: function($scope){

			}
		};
	});

	app.directive('nycdaHeader', function(){
		return{
			restrict: 'E',
			templateUrl: '../partials/headerPartial.html',
			controller: function($scope){

			}
		};
	});

	app.directive('socialIcon', function(){
		return{
			restrict: 'E',
			templateUrl: '../partials/socialMediaIcon.html',
			controller: function($scope, SocialMediaLinks){
				
				SocialMediaLinks.links()
						.success(function(data){
								$scope.SocialMediaLinks = data;
						});
			}
		};
	});

	app.directive('columnLeft', function(){
		return{
			restrict: 'E',
			templateUrl: '../partials/columnLeft.html'
		};
	});
												 
})();