var Controller = {};

(function () {
	Controller = {
		_view: null,
		_model: null,
		setView: function ( view ) { this._view = view; },
		setModel: function ( model ) { this._model = model; },
		getView: function ( view ) { return this._view; },
		getModel: function ( model ) { return this._model; }
	};
})();