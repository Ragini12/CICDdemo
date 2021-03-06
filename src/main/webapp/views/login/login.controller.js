﻿'use strict';
angular.module('loginApp')
          .controller('LoginController', [ '$scope', 'AuthenticationService', 'LoginService','$state','dataService','$rootScope','$stateParams', function ($scope, AuthenticationService, LoginService,$state,dataService,$rootScope,$stateParams) {
        var accessToken = sessionStorage.getItem('tokenId');


        var loginflagvalue = sessionStorage.getItem('loginflag');
        var Message = $stateParams.Message;
       if($stateParams.Message != null)
       {
           $scope.errorMessage = Message;
       }
        if(accessToken == null) {

            sessionStorage.clear();
            localStorage.clear();
            $scope.isValidUser = false;
            $state.go('/login');
        }
        else {
            $state.go('/welcome');
        }
            $scope.login = function () {
            $scope.vm.dataLoading = true;
            var request = "/" + $scope.vm.bidusername + "/" + $scope.vm.bidpassword;

                LoginService.loginCustomer(request).then(function (successData) {

                    sessionStorage.setItem('loginflag',successData.loginflag);
                    if ((successData.status === "success")&&(successData.loginflag === 1)) {

                        sessionStorage.setItem('userrole',successData.userrole );
                        sessionStorage.setItem('adminuser',successData.firstname+" "+ successData.lastname);
                        $scope.getAuthentionToken();
                    }
                    else if((successData.status === "success")&&(successData.loginflag != 1))
                    {
                        sessionStorage.setItem('username',successData.username );

                        $state.go('/reset');
                    }
                    else  {
                        $scope.isValidUser = true;
                        if (successData.status == "INVALIDCREDENTIALS") {
                            $scope.vm.error = "Invalid Credentials. Please try again";
                            $scope.vm.dataLoading = false;
                        }
                        else if (successData.status == "NOUSER") {
                            $scope.vm.error = "User is not registered. Please try again with valid user"
                            $scope.vm.dataLoading = false;
                        }

                        else {
                            $scope.vm.error = "Error . Please try again later";
                            $scope.vm.dataLoading = false;
                        }
                    }
                });

            };

            $scope.getAuthentionToken = function () {
                var requestOauth = 'password=' + btoa($scope.vm.bidpassword) + '&username=' + $scope.vm.heartkidusername + '&grant_type=password';
                AuthenticationService.getAuthention(requestOauth).then(function (successData) {
                    if (successData.access_token) {
                        sessionStorage.setItem('tokenId', successData.access_token);
                        $state.go('form.welcome');
                        $scope.vm.dataLoading = false;
                    }
                    else
                    {
                        var accessToken = sessionStorage.getItem('tokenId');
                        if(accessToken == null)
                        {
                            $state.go('/login');
                        }
                    }

                });
            }


        }]);


   /* LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();*/
