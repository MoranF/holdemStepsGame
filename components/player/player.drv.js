app.directive('player', function() {
    return {
    	restrict: 'E',
        templateUrl: 'components/player/player.html',
        scope: {
	      player: '='
	    },
        link: function(scope) {
        	scope.cssClassName = 'player' + scope.player.id; 
        }
    };
});


