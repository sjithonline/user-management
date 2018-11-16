(function ()
{
    var app = angular.module('userModule', ["ui.bootstrap"]);

    app.controller('userMgntCtrl', function($scope, $rootScope, $http,$routeParams, $route,$uibModal) {
        
        $scope.apps =["Facebook","Youtube","Twitter","Wirestream"];
        
        //Get User list
        $scope.getUsers = function() {
            //$http.get('/user-management/json/users.json')
            $("#divLoading").show();
            $http.get('/user-management/api/users')
                    .success(function(data)
                    {
                        $("#divLoading").hide();
                        $scope.users = data;
                    }
                    )
                    .error(function(data, status, headers)
                    {
                        $("#divLoading").hide();
                        console.log(data);
                    });
        };

        $scope.addUserpopup = function () {
            var modalInstance = null;
            $scope.userInfo={};
            function open() {
                if (modalInstance !== null) {
                    return;
                }
                modalInstance = $uibModal.open({
                    scope: $scope,
                    animation: true,
                    /*size: 'lg',*/
                    windowClass: 'video-modal-window',
                    templateUrl: 'usermgnt-add-user.html',
                    controller: ['$scope', '$rootScope', '$uibModalInstance', function ($scope, $rootScope, $uibModalInstance) {
                        $scope.cancel = function () {
                            $uibModalInstance.dismiss('cancel');
                        };
                        $scope.accept = function () {
                            $uibModalInstance.close();
                        };
                        $scope.addUser =function(){
                            console.log($scope.userInfo);
                            $scope.$parent.addUser($scope.userInfo);
                            $scope.accept();
                        }
                   }]
                });
            }

            open();
        };



        //API to create a new user
        $scope.addUser = function(userObj) {
            //Call dummy create user API (Not a functional one)
            $("#divLoading").show();
            $http.post('/user-management/api/user',userObj)
                    .success(function(data)
                    {
                        $("#divLoading").hide();
                        $scope.users.push(userObj);
                    }
                    )
                    .error(function(data, status, headers)
                    {
                        $("#divLoading").hide();
                        console.log(data);
                    });

        };
        
        $scope.deleteUser =function(index){
            
            $("#divLoading").show();
            //Call dummy API deleteUser (passing index as userId for now)
            $http.delete('/user-management/api/user?id='+index)
                    .success(function(data)
                    {
                         $("#divLoading").hide();
                         $scope.users.splice(index, 1);
                    }
                    )
                    .error(function(data, status, headers)
                    {
                        $("#divLoading").hide();
                        console.log(data);
                    });
        };
        
        //show add user popup

        $scope.initEditPopup =function(index,user){
            var modalInstance = null;
            function open() {
                if (modalInstance !== null) {
                    return;
                }
                modalInstance = $uibModal.open({
                    scope: $scope,
                    animation: true,
                    /*size: 'lg',*/
                    templateUrl: 'usermgnt-edit-user.html',
                    controller: ['$scope', '$rootScope', '$uibModalInstance', function ($scope, $rootScope, $uibModalInstance) {
                        $scope.userInfoTmp =  jQuery.extend(true, {}, user);//Deep Copy
                        $scope.cancel = function () {
                           $uibModalInstance.dismiss('cancel');
                        };
                        $scope.accept = function () {
                           $uibModalInstance.close();
                        };
                        $scope.editUser =function(){
                           $scope.$parent.editUser(index,$scope.userInfoTmp);
                           $scope.accept();
                        }
                   }]
                });
            }

            open();
        };


        //edit selected user
        $scope.editUser = function(index,userInfo) {
            //Call dummy edit user API
            $("#divLoading").show();
            $http.put('/user-management/api/user',userInfo)
                    .success(function(data)
                    {
                        $("#divLoading").hide();
                        ($scope.users)[index] = userInfo
                    }
                    )
                    .error(function(data, status, headers)
                    {
                        $("#divLoading").hide();
                    });
        };
        
        $scope.$on(
                "$routeChangeSuccess",
                function ($currentRoute, $previousRoute) {
                    $scope.setValues();
                }
        );

        $scope.setValues = function () {
            var renderAction = $route.current.action;
            switch (renderAction) {
                case "viewUsers":
                    $scope.getUsers();
                    break;
            }
        };

    });
             
})();

//{backdrop: 'static'}