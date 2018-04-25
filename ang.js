  var app = angular.module("myApp", []);
  app.controller('myCtrl', function($scope){
      $scope.tenants = [
        {
            firstName: 'James',
            lastName: 'Wang',
            rent: 400,
            company: "None",
            jobTitle: "None",
            businessPhone: "None",
            homePhone: "None",
            mobilePhone: "None",
            street: "None",
            city: "None",
            state: "None",
            country: "None",
            email: "None",
            webpage: "None",
            notes: "None"
        },
        {
          firstName: 'Andrew',
          lastName: 'Li',
          rent: 1200,
          company: "NAN",
          jobTitle: "NAN",
          businessPhone: "NAN",
          homePhone: "NAN",
          mobilePhone: "NAN",
          street: "NAN",
          city: "NAN",
          state: "NAN",
          country: "NAN",
          email: "NAN",
          webpage: "NAN",
          notes: "NAN"
        }
      ];
      $scope.position = 0;
      $scope.plusOne = function(){
        if($scope.position<($scope.tenants.length-1)){
          $scope.position+=1;
        }
      }
      $scope.minusOne = function(){
        if($scope.position>0){
          $scope.position-=1;
        }
      }
      $scope.addNew = function(){
        $scope.tenants.push({

        })
        $scope.position = $scope.tenants.length-1;
      }
      $scope.delete = function(){
        $scope.tenants.splice($scope.position,1);
        $scope.position=0;
      }
  });
