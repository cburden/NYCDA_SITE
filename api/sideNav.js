// JavaScript Document

(function(){
	
	var app = angular.module('SideNavLinks', []);
	
	app.factory('SideNavLinks', function($http){
		
		return {
			'mainNavLinks' : function(){
				return [
					{
						'class' : 'about-us-links',
						'ref'	: '../aboutus/ourAdvantages.html',
						'text'	: 'About Us'
					},
					{
						'class' : 'two-year-links',
						'ref'	: '../programs/twoYearProgram.html',
						'text'	: 'Professional<span class="line-break">Training Programs</span>'
					},
					{
						'class' : 'summer-program-links',
						'ref'	: '../programs/summerProgram.html',
						'text'	: 'Summer Program'
					},
					{
						'class' : 'apply-links',
						'ref'	: 'https://admission.sft.edu/Datatel.ERecruiting.Web.External/Pages/createaccount.aspx?f=30f00b68-a81c-4942-8c0e-22e71bff9038',
						'text'	: 'Apply Now'
					},
					{
						'class' : 'audition-links',
						'ref'	: '../auditions/auditions.html',
						'text'	: 'Audition Schedule'
					},
					{
						'class' : 'scholarships-links',
						'ref'	: '../scholarships/scholarships.html',
						'text'	: 'Scholarships &#43;<span class="line-break">Financial Aid</span>'
					},
					{
						'class' : 'alumni-links',
						'ref'	: '../alumni/alumni.html',
						'text'	: 'Alumni'
					},
					{
						'class' : 'catalog-links',
						'ref'	: 'https://admission.sft.edu/Datatel.eRecruiting.Web.External/Pages/createaccount.aspx?f=30f00b68-a81c-4942-8c0e-22e71bff9038',
						'text'	: 'Request Information'
					},
					{
						'class' : 'student-links',
						'ref'	: '../studentservices/bookstore.html',
						'text'	: 'Student Services'
					},
					{
						'class' : 'generalinfo-links',
						'ref'	: '../generalinfo/generalInformationPolicies.html',
						'text'	: 'General Information/<span class="line-break">Policies'
					},
					{
						'class' : 'tips-links',
						'ref'	: '../tips/tips.html',
						'text'	: 'Acting Tips'
					},
					{
						'class' : 'contactus-links',
						'ref'	: '../contactus/contactus.html',
						'text'	: 'Contact Us'
					},
					{
						'class' : 'jobseekers-links',
						'ref'	: '../jobseekers/jobSeekers.html',
						'text'	: 'Job Seekers'
					},
					{
						'class' : 'onlinestore-links',
						'ref'	: 'http://www.zazzle.com/nycondramarts',
						'text'	: 'Online Store'
					}
				];
			}
		};
	
	});

})();