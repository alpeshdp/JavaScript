app.controller('MainController', ['$scope', function($scope) {
    $scope.courses = [
        {name:'Hello C', featured:false, published:new Date('2016-01-10')},
        {name:'Hello C++', featured:false, published:new Date('2016-01-11')},
        {name:'Hello PHP', featured:false, published:new Date('2016-01-05')},
        {name:'Hello Java', featured:true, published:new Date('2016-01-06')},
        {name:'Hello .Net', featured:false, published:new Date('2016-01-03')},
        {name:'Hello JS', featured:true, published:new Date('2016-01-04')},
        {name:'Hello Angular', featured:true, published:new Date('2016-01-02')},
        {name:'Hello MEAN', featured:true, published:new Date('2016-02-1')}
    ];
}])