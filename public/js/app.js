var app = angular.module('homeworkApp', []);

app.factory('Homework', function () {
    return { 
      getHomeworks: function(){
         return [{assignment: 'Test First JavaScript',
                  url: 'https://github.com/mcswint/FullStackTestFirstPublic',
                  status: 'completed',
                  clicked: false
                },
                {
                  assignment:'Flash Cards Day 1',
                  url: 'https://github.com/mcswint/flashcards-day1',
                  status: 'completed',
                  clicked: false
                },
                {
                  assignment:'Flash Cards Day 2',
                  url: 'https://github.com/mcswint/flash-cards',
                  status: 'completed',
                  clicked: false
                },
                {
                  assignment:'Flash Cards Day 3',
                  url: 'https://github.com/ididntdothisone',
                  status: 'incomplete',
                  clicked: false
                },
                {
                  assignment:'Flash Cards Day 4',
                  url: 'https://github.com/ididntdothisone',
                  status: 'incomplete',
                  clicked: false
                }
            ];
          }
        };
});

app.controller('MainController', function ($scope, Homework) {
    $scope.homeworks = Homework.getHomeworks();
    console.log($scope.homeworks)

    $scope.showInfo = function(hw){
      if (!hw.clicked){
        hw.clicked = true;
      } else {
        hw.clicked = false;
      }
      return
    }

});