var TeamScoreController = null;

(function () {
	TeamScoreController = function ( model, view ) {
		this.setModel( model );
		this.setView( view );
	};
	TeamScoreController.prototype = Object.create(Controller);
})();