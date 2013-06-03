var TeamScoreModel = null;
(function () {
	TeamScoreModel = function ( team ) {
		if( !team ) {
			console.log( 'TeamScoreModel: No team given!' );
		}

		this._listeners = [];
		var _me = this,
			_data = {
				name: team.name,
				id: team.id,
				gamesPlayed: 0,
				gamesWon: 0,
				gamesDrawn: 0,
				gamesLost: 0,
				goalsScored: 0,
				goalsAgainst: 0
			};

		function _doGameMath( ourGoals, theirGoals ) {
			_data.gamesPlayed++;
			var ourGoalsNumber = parseInt( ourGoals, 10 ),
				theirGoalsNumber = parseInt( theirGoals, 10 );

			_data.goalsScored += ourGoalsNumber;
			_data.getGoalsAgainst += theirGoalsNumber;

			if( ourGoalsNumber > theirGoalsNumber ) {
				_data.gamesWon++;
			} else if( ourGoalsNumber == theirGoalsNumber ) {
				_data.gamesDrawn++;
			} else {
				_data.gamesLost++;
			}
		}

		this.addGame = function ( game ) {
			if( game.homeTeamId == _data.id ) {
				_doGameMath( game.homeGoals, game.awayGoals );
				//this.emit('update');
			} else if ( game.awayTeamId == _data.id ) {
				_doGameMath( game.awayGoals, game.homeGoals );
				//this.emit('update');
			}
		};

		this.getName = function () {
			return _data.name;
		};

		this.getGamesPlayed = function () {
			return _data.gamesPlayed;
		};

		this.getGamesWon = function () {
			return _data.gamesWon;
		};

		this.getGamesDrawn = function () {
			return _data.gamesDrawn;
		};

		this.getGamesLost = function () {
			return _data.gamesLost;
		};

		this.getGoalsScored = function () {
			return _data.goalsScored;
		};

		this.getGoalsAgainst = function () {
			return _data.goalsAgainst;
		};

		this.getGoalDifference = function () {
			return _data.goalsScored - _data.goalsAgainst;
		};

		// TODO: Real math 
		this.getPoints = function () {
			return _data.gamesWon * 3 + _data.gamesDrawn;
			//return _data.gamesPlayed + _data.getGoalDifference;
		};

		return this;
	};

	TeamScoreModel.prototype = Object.create(Model);
})();