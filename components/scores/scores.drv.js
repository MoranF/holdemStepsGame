app.directive('scores', function() {
    return {
      restrict: 'E',
        templateUrl: 'components/scores/scores.html',
        scope: {
        scores: '=',
        answer: '='
      },
        link: function(scope) {
          scope.checkScore = function(scoreResult) {
            if(scoreResult.score === scope.answer) {
              scoreResult.cssClass = 'right-score';
              scope.$emit('right-answer', scope.scores);
              // scope.newRoundMethod(scope.scores);
            }
            else {
              scoreResult.cssClass = 'wrong-score';
              scope.$emit('wrong-answer', scope.scores);
              // scope.wrongAnswerMethod(scope.scores);
            }
          };
        }
    };
});




    