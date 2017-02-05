app.controller('gameCtrl', ['$scope', 'game', '$timeout', function($scope, game, $timeout) {
	$scope.game = game;
	$scope.currentStreak = 0;
	$scope.longestStreak = localStorage.longestStreak;
    $scope.startNewRound = function(scores) {
		var curStreak = $scope.currentStreak + 1;
		var longStreak = $scope.longestStreak > curStreak ? $scope.longestStreak : curStreak;
		localStorage.longestStreak = longStreak;
		game.scores = scores;
		$scope.wrongAnswer = null;
		$scope.rightAnswer = true;
		$scope.currentStreak = curStreak;
		$scope.longestStreak = longStreak;
		$timeout(function() {
			$scope.game.startNewRound();
			$scope.rightAnswer = null;
			$scope.wrongAnswer = null;
		}, 500);
	};
	$scope.wrongAnswerState = function(scores) {
	  game.scores = scores;
	  $scope.wrongAnswer = true;
	  $scope.currentStreak = 0;
	};

	$scope.$on('right-answer', function(event, scores) { $scope.startNewRound(scores); });
	$scope.$on('wrong-answer', function(event, scores) { $scope.wrongAnswerState(scores); });

	game.startNewRound();
}]);