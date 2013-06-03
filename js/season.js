var Season = null;

(function () {
	Season = function ( teamScoreCollection, leagueTableView ) {
		var playSeasonInterval = 0, isPlaying = false;

		var currentDay = new Date( 2011, 8, 12 ); // One day before the season

		function playDay () {
			var tomorrow = new Date(currentDay.getTime() + (24 * 60 * 60 * 1000));
			currentDay = tomorrow;
			updateDayText( currentDay );

			var dayString = currentDay.getDate() + '/' + ("0" + currentDay.getMonth()).slice(-2) + '/' + currentDay.getFullYear().toString().slice(-2);
			var todayGames = db.games.get( dayString );
			todayGames.forEach(function ( game ) {
				teamScoreCollection.getModels().forEach( function ( model ) {
					model.addGame( game );
				});
			});

			leagueTableView.sort();
			leagueTableView.update();
		}

		function playSeason() {
			if(!isPlaying) {
				isPlaying = true;
				playSeasonInterval = setInterval(function () {
					playDay();
					if( currentDay.getTime() >= new Date( 2012, 5, 12 ).getTime() ) {
						isPlaying = false;
						console.log( 'season ended - end time: ', new Date() );
						clearInterval( playSeasonInterval );
					}
				}, 150 );
			}
		}

		var playSeasonButton = document.getElementById( 'playSeasonButton' );
		playSeasonButton.onclick = function () {
			console.log( 'Play season - start time: ', new Date() );
			playSeason();
		};
		
		var stopSeasonButton = document.getElementById( 'stopSeasonButton' );
		stopSeasonButton.onclick = function () {
			console.log('click');
			clearInterval( playSeasonInterval );
		};

		var seasonDay = document.getElementById( 'seasonDay' );
		function updateDayText( date ) {
			seasonDay.innerText = date.toDateString();
		}
		updateDayText( currentDay );
	};
})();