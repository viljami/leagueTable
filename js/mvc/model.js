var Model = {};

(function () {
	Model = Object.create(Listenable);
	Model._view = null;
	Model._oldIndex = 0;
	Model._currentIndex = 0;
	Model.getView = function () {
		return this._view;
	};
	Model.setView = function ( view ) {
		this._view = view;
	};
	Model.updateIndex = function ( index ) {
		this._oldIndex = this._currentIndex;
		this._currentIndex = index;
	};
	Model.getIndex = function () {
		return {current: this._currentIndex, old: this._oldIndex };
	};
})();