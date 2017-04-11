angular.module('myApp', []).controller('namesCtrl', function($scope) {
$scope.names = [
     {name:'Name1',country:'Space1'},
     {name:'Name2',country:'Space2'},
     {name:'Name3',country:'Space3'},
     {name:'Nome1',country:'Spice1'},
     {name:'Nome2',country:'Spice2'},
     {name:'Nome3',country:'Splice3'}
   ],
   $scope.sports = [
        {sport:'Swimming',status:'On'},
        {sport:'Wrestling',status:'On'},
        {sport:'Badminton',status:'Off'},
        {sport:'Tennis',status:'On'},
        {sport:'400m Rally',status:'Off'},
        {sport:'1500m Rally',status:'Off'},
        {sport:'26 Mile Marathon',status:'On'}
   ],
   $scope.items = [
        {item:'Mouse',cost:'£5'},
        {item:'Keyboard',cost:'£7.50'},
        {item:'16GB USB Flash-Drive',cost:'£15'},
        {item:'10m Ethernet Cable',cost:'£20.35'}
   ];
});