(function ()
{
    var app = angular.module('userModule', ["checklist-model"]);

    app.controller('userMgntCtrl', function($scope, $rootScope, $http,$routeParams, $route) {
        
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
        
        //show add user popup
        $scope.initAddUser =function(){
            $scope.modalInfo ={
                titleIcon:"fa-user-plus",
                title:"Add User",
                url:"usermgnt-add-user.html?random="+Math.random()
            };
            $scope.userInfo ={
                "firstName" :"",
                "lastName":"",
                "email":"",
                "zipCode":"",
                "phone":"",
                "liveVideoApps":[]
            };
            $scope.form1 = {submitted:false};
            $('#modal_Common').modal('show');
        };
        
        //API to create a new user
        $scope.addUser = function() {
            //Call dummy create user API (Not a functional one)
            $("#divLoading").show();
            $http.post('/user-management/api/user',$scope.userInfo)
                    .success(function(data)
                    {
                        $("#divLoading").hide();
                        $scope.users.push($scope.userInfo);
                        $('#modal_Common').modal('toggle');
                    }
                    )
                    .error(function(data, status, headers)
                    {
                        $("#divLoading").hide();
                        $('#modal_Common').modal('toggle');
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
        $scope.initEdit =function(index,user){
            $scope.userIndex = index;
            $scope.modalInfo ={
                titleIcon:"fa-pencil",
                title:"Edit User",
                url:"usermgnt-edit-user.html?random="+Math.random()
            };
            $scope.userInfoTmp =  jQuery.extend(true, {}, user);//Deep Copy
            $scope.form1 = {submitted:false};
            $('#modal_Common').modal('show');
        };
        
        //edit selected user
        $scope.editUser = function() {
            //Call dummy edit user API
            $("#divLoading").show();
            $http.put('/user-management/api/user',$scope.userInfoTmp)
                    .success(function(data)
                    {
                        $("#divLoading").hide();
                        ($scope.users)[$scope.userIndex] = $scope.userInfoTmp;
                        $('#modal_Common').modal('toggle');
                    }
                    )
                    .error(function(data, status, headers)
                    {
                        $("#divLoading").hide();
                        $('#modal_Common').modal('toggle');
                        console.log(data);
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