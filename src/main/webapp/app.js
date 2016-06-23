
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ui.router'])

// configuring our routes
// =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

           .state('form', {
                    url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })
           .state('form.login', {
                url: '/research',
                controller:'personalInfoContrler',
                templateUrl: 'views/login.view.html'
            })
		   .state('form.deal', {
                url: '/research',
                controller:'personalInfoContrler',
                templateUrl: 'views/form-deal.html'
            })
			
            
        $urlRouterProvider.otherwise('/form/research');
    })

    .directive('ngHover', function() {
        return {
            link: function(scope, element) {
                element.bind('mouseenter', function() {
                    angular.element(
                        element.children()[0]).addClass('redclass')
                })
            }
        }
    })

    .directive('windowExit', function($window) {
        return {
            restrict: 'AE',

            compile: function(element, attrs){
                var myEvent = $window.attachEvent || $window.addEventListener,
                    chkevent = $window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compatable

                myEvent(chkevent, function (e) { // For >=IE7, Chrome, Firefox
                    var confirmationMessage = ' ';  // a space
                    (e || $window.event).returnValue = "Please complete the survey before exiting. You may just need 10-15 minutes of time. Thank You";
                    return confirmationMessage;
                });
            }
        };
    })

    .controller('formController', function($scope) {


        $scope.formData = {};

        // function to process the form
       $scope.submit = function(){
       
       };

    })

    .service('dataService', function() {


        var _dataObj;

        this.dataObj = _dataObj;
    })

   .controller('personalInfoContrler', function ($scope, $http, dataService,$state) {

        $scope.formData.referencenumber = dataService.dataObj;

        $scope.showcarerdetails = 'false';

			var progress = setInterval(function () {
            var $bar = $('.bar');
            if ($bar.width() >= 400) {
                clearInterval(progress);
                $('.progress').removeClass('active');
            } else {
                $bar.width($bar.width() + 40);
            }
            $bar.text($bar.width() / 4 + "%");
        }, 800);

        $scope.subverticalArray = ["Travel", "Transport","Hospitability"];
        $scope.geographyArray = ["ANZ","Belgium","Canada","Germany","France","India","Netherlands","Portugal","Spain","Switzerland","US","UK"];
        $scope.titleArray = ["Australia","Belgium","Canada","Germany","France","India","Netherlands",,"Switzerland","US","UK","","",""];
		$scope.dealStatus = ["InProgress","Lost","WON","Disqualified","Lost","closed"];
		$scope.dealType = ["AD","ADM","AM","Assurance","ADM BPO","SOL IMPL","BPO","IT IS","IS","ITO"];
		$scope.dealSize = ["Small","Large","Medium","Very Large","Very Small"];
		$scope.throughCustomerArray = ["Customer Connect","Public Domain"];
		$scope.serviceLineArray = ["SAP Finance implementation","ADM","BI","ERP-Oracle implementation","Oracle ERP"];
		$scope.crmStageArray = ["Contract Negotiation","Closed/Shelved","RFP in Progress","RFI/EOI in progress","RFI/EOI submitted","Closed/ Scrapped","Prospecting","Shortlisted","Selected","Suspecting","Closed/Submitted","RFP submitted","Closed/Lost","Closed/Disqualified","Closed/WON"];
		$scope.showcontactvia = 'true' ;

        $scope.keydownpstcde = function()
        {
            var n = $scope.formData.postcode;


            if (n >= 1000 && n <= 2999)
                $scope.formData.state = 'New South Wales';
                if ((n >= 3000 && n <= 3999) || (n >= 8000 && n <= 8999))
                    $scope.formData.state = 'Victoria';
                    if ((n >= 4000 && n <= 4999)|| (n >= 9000 && n <= 9999))
                        $scope.formData.state = 'Queensland';
                        if (n >= 5000 && n <= 5999)
                            $scope.formData.state = 'South Australia';
                            if (n >= 6000 && n <= 6999)
                                $scope.formData.state = 'Western Australia';
                                if (n >= 7000 && n <= 7999)
                                    $scope.formData.state = 'Tasmania';
                                    if (n >= 0800 && n <= 0999)
                                        $scope.formData.state = 'Northern Territory';
            if ((n >= 0200 && n <= 0299 ))
                $scope.formData.state = 'Australian Capital Territory';
        }

    });

