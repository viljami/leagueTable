var TeamScoreView = null;

(function () {
	// options = { model: TeamModel, parentElement: <tbody> }
	TeamScoreView = function ( options ) {
		if( !options || !options.model || !options.parentElement ) {
			console.log( 'TeamScoreView: options parameters missing!', options );
			return this;
		}

		var _me = this;

		this._container = document.createElement('tr');
		this._parentElement = options.parentElement;
		this._elementBindings = [];

		this.setModel( options.model );
		this.bindModelToElements( 'td' );

		this.update = function () {
			this.updateBindElements();
		};

		this.render = function () {
			this._parentElement.appendChild( this._container );
		};
		//this.render = this.render.bind( this );

		return this;
	};
	TeamScoreView.prototype = Object.create(View);
})();