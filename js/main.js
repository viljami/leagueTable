var main = null;

// simplyfied database
(function () {
	db.init();

	// Called when document is loaded
	main = function () {
		// Setup application
		var leagueTableView = new LeagueTableView( 'leagueTable' );

		var teamScoreCollection = new Collection();
		var teams = db.teams.get();
		teams.forEach(function ( team ) {
			var tsModel = new TeamScoreModel( team );
			teamScoreCollection.addModel( tsModel );
			tsModel.setView( new TeamScoreView({ model: tsModel, parentElement: leagueTableView.getTableBody() }) );
			tsModel.getView().render();
		});

		leagueTableView.setModel( teamScoreCollection );

		var season = new Season( teamScoreCollection, leagueTableView );
	};
})();