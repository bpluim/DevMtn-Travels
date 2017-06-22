angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv) {

    $scope.countryPackages = mainSrv.packageInfo.filter(function(package) {
        return package.country === $stateParams.country;
    })

})