var utils = {
	loadJSONP: function( url, callbackName ) {
		var scriptElement = document.createElement('script');
		scriptElement.src = url + '?callback=' + callbackName;
		scriptElement.type = 'text/javascript';
		document.head.appendChild( scriptElement );
	},
	loadGames: function( url ) {
		utils.loadJSONP( 'data/games-jsonp.js', 'loadGames' );
	},
	loadTeams: function ( url ) {
		utils.loadJSONP( 'data/teams-jsonp.js', 'loadTeams' );
	}
};