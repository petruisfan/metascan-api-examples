(function(){
    "use strict";

    var metascan = angular.module("metascan", []);

    metascan.controller("ScanCtrl", function($scope, $http) {
        $scope.scan = {};

        $scope.scanFile = function($event) {
            //$event.preventDefault();

            $http({
                method: "POST",
                url: "/v2/file",
                //headers: {
                //    apikey: "d7d77e87052554af73afb85134436e26"
                //},
                data: $scope.scan.file
            }).success(function() {
                console.log(arguments);
            }).error(function() {
                console.log(arguments);
            });

            return false;
        };

        $scope.getInqueue= function() {
            $http({
                method: "GET",
                url: "/v2/file/inqueue"
                //headers: {
                //    apikey: "d7d77e87052554af73afb85134436e26"
                //},
            }).success(function() {
                console.log(arguments);
            }).error(function() {
                console.log(arguments);
            });
        };

    })
}());


