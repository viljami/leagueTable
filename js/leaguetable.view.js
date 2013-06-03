var LeagueTableView = null;

(function () {
	LeagueTableView = function ( elementId ) {
		var _table = null, _tableBody = null;
		_table = document.getElementById( elementId );
		_tableBody = _table.children[1];

		this.getTableBody = function () {
			return _tableBody;
		};

		this.sort = function ( priorities ) {
			console.log( this._model.getModels()[0].getIndex() );
			this._model.sort( function ( a, b ) {
				/*
				if( a.getPoints() == b.getPoints()) {
					if( a.getGoalDifference() == b.getGoalDifference() ) {
						return a.getGoalsScored() - b.getGoalsScored();
					}
					return a.getGoalDifference() - b.getGoalDifference();
				}
				*/
				return a.getPoints() > b.getPoints() ? -1 : 1;
			});
		};

		this.update = function () {
			this._model.getModels().forEach( function ( model, index ) {
				model.updateIndex( index );
				model.getView().forceRebindElements( _tableBody.children[ index ].children );
			});
		};

		this.render = function () {};
	};
	LeagueTableView.prototype = Object.create(View);
})();
