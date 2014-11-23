ourApp.controller('indexCtrl', [ "$scope", "$resource", function($scope, $resource) {

    function init() {
        $scope.appName = "LogisticApp";
        $scope.email = "";
        $scope.message = "";
    }

    init();

    $scope.addUser = function() {
        var controller = "backend/registerUser.php";
        var emailResponse = $resource(controller + '?email=' + $scope.email);
        emailResponse.get(function(data) {
            $scope.email = "";
            if (data.response) {
                $scope.message = "Gracias por tu interes. Pronto recibiras un mail con toda la informacion.";
            } else {
                $scope.message = "Gracias por tu interes. Pronto recibiras un mail con toda la informacion.";
            }
        });
    }

}]);