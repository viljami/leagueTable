var db = {};
var loadGames = null, loadTeams = null;

(function () {
	var _games = [], _teams = [];
	db.games = {};
	db.teams = {};

	db.init = function () {
		loadGames = function ( data ) {
			_games = data;
		};

		loadTeams = function ( data ) {
			_teams = data;
		};

		utils.loadGames();
		utils.loadTeams();
	};

	// Return all teams, team with certain name or team with certain id
	db.teams.get = function ( value ) {
		if( !value ) {
			return _teams;
		}

		var key = 'name';
		if( typeof value === Number ) {
			key = 'id';
		}
		for( var i = 0; i < _teams.length; i++ ) {
			if( _teams[ i ][ key ] == value ) {
				return _teams[ i ];
			}
		}
	};

	// Return all games or games played on certain date
	db.games.get = function ( value ) {
		if( !value ) {
			return _games;
		}

		var key = 'date';
		/*
		if( typeof key === Number ) {
			key = 'homeTeamId';
		}
		*/
		var results = [], 
			found = false;
		// Games are sort by date
		for( var i = 0; i < _games.length; i++ ) {
			if( _games[ i ][ key ].indexOf(value) != -1 ) {
				results.push( _games[i] );
				found = true;
			} else {
				if(found) {
					break;
				}
			}
		}
		return results;
	};
})();