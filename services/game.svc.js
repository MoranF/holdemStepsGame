app.service('game', function() {
	this.setNewPack = function() {
		this.pack = [];
		for(var i = 0; i < 13; i++) {
			for(var j = 0; j < 4; j++) {
				this.pack.push(new Card(i, j));
			}
		}
	}

	this.newRandomCard = function() {
		var cardIndex = Math.floor(Math.random() * (this.pack.length));
		var card = this.pack[cardIndex];
		this.pack.splice(cardIndex, 1);
		return card;
	}

	this.shuffleScores = function(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	}

	this.setFakeScores = function() {
		var i = 0;
		var score;
		// get 3 fake scores
		while(i < 3) {
			score = Math.floor(Math.random() * (101));
			for(var j = 0; j < this.scores.length; j++) {
				if(this.scores[j] < score + 5 && this.scores[j] > score - 5) {
					break;
				}
			}
			if(j === this.scores.length) {
				this.scores.push(score);
				++i;
			}
		}
		this.shuffleScores(this.scores);
		this.scores = this.addCssClassField(this.scores);
	}

	this.addCssClassField = function(scores) {
		var score;
		for(var i = 0; i < scores.length; i++) {
			score = scores[i];
			scores[i] = {
				score: score,
				cssClass: 'score'
			};
		}
		return scores;
	}

	this.startNewRound = function() {
		this.setNewPack();
		var player1 = new Player('1', 'You', [this.newRandomCard(), this.newRandomCard()]);
		var player2 = new Player('2', 'Player 2', [this.newRandomCard(), this.newRandomCard()]);
		this.players = [player1, player2];
		this.streets = [this.newRandomCard(), this.newRandomCard(), this.newRandomCard()];
		var playersCalculatedWins = this.calc.calculate(this.players, this.streets);
		this.scores = [];
		this.player1Wins = Math.round(playersCalculatedWins[0].wins);
		this.scores.push(this.player1Wins);
		this.setFakeScores();
	}

	//constructor
	this.calc = new OddsCalculator();
});
