angular.module('devmtnTravel').controller('packagesAllCtrl', function($scope, mainSrv) {

    $scope.allPackages = mainSrv.packageInfo;

})