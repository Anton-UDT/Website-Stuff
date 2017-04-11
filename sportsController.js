angular.module('myApp2', []).controller('sportsCtrl', function($scope) {
$scope.sports = [
     {sport:'Swimming',status:'On'},
     {sport:'Wrestling',status:'On'},
     {sport:'Badminton',status:'Off'},
     {sport:'Tennis',status:'On'},
     {sport:'400m Rally',status:'Off'},
     {sport:'1500m Rally',status:'Off'},
     {sport:'26 Mile Marathon',status:'On'}
   ];
});