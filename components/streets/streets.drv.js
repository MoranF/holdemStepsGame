app.directive('streets', function() {
    return {
    	restrict: 'E',
        templateUrl: 'components/streets/streets.html',
        scope: {
	      cards: '='
	    },
        link: function(scope) {
        	scope.hiddenCardSrc = 'src/img/' + cardsFolder + '/card22.png';
        }
    };
});