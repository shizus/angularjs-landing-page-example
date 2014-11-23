ourApp.controller('requestCtrl', [ "$scope", "$resource", "$location", function($scope, $resource, $location) {

    function init() {
        $scope.appName = "LogisticApp";
    }

    function resetForm() {
      $scope.form.from = "";
      $scope.form.to= "";
    };
    
    $scope.requests = [
        {id: 1, from: "Caballito, Bs As, Argentina", to:"Puerto Madero, Bs As, Argentina"},
        {id: 2, from: "Flores, Bs As, Argentina", to:"Puerto Madero, Bs As, Argentina"},
        {id: 3, from: "Recoleta, Bs As, Argentina", to:"Puerto Madero, Bs As, Argentina"},
        {id: 4, from: "Caballito, Bs As, Argentina", to:"Nueva Cordoba, Cordoba, Argentina"},
        {id: 5, from: "Caballito, Bs As, Argentina", to:"Puerto Madero, Bs As, Argentina"}
    ];

    $scope.addRequest = function(request){
        request.id = Math.random();
        var newRequest = jQuery.extend({}, request);
        $scope.requests.push(newRequest);
        resetForm();
    };

    $scope.claimRequest = function (request) {
        console.log(request.id);
        $location.path("./#/request");
    };

    init();


}]);