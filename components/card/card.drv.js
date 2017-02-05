app.directive('card', function() {
    return {
    	restrict: 'E',
        templateUrl: 'components/card/card.html',
        scope: {
	      card: '='
	    },
        link: function(scope) {
        	scope.imageSrc = 'src/img/' + cardsFolder + '/card' + scope.card.value + scope.card.symbol + '.png';
        }
    };
});