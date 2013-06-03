var View = null;

(function () {
	// options = { container: <element>, model: Model }
	View = {
		_elementBindings: [],
		_container: null,
		_model: null,
		_modelValueElement: 'p',

		setModel: function ( model ) {
			this._model = model;
			this.update = this.update.bind( this );
			this._model.addListener( 'update', this.update );
		},
		getModel: function (){
			return this._model;
		},

		addElement: function ( element, contentSource ) {
			if( contentSource ) {
				this._elementBindings.push({
					element: element,
					contentSource: contentSource
				});
			}
			this._container.appendChild( element );
		},

		forceRebindElements: function ( elements ) {
			this._elementBindings.forEach(function ( obj, index ) {
				obj.element = elements[ index ];
			});
			console.log( this._elementBindings );
			this.updateBindElements();
		},

		bindModelToElements: function ( valueContainerElementName ) {
			for( var i in this._model ) {
				if( /^get/g.exec( i.toString()) && !/^get[View|Index]/g.exec( i.toString()) ) {
					this.addElement( document.createElement( valueContainerElementName ), this._model[ i ] );
				}
			}
			this.updateBindElements();
		},

		updateBindElements: function () {
			this._elementBindings.forEach(function ( obj ) {
				obj.element.innerHTML = obj.contentSource();
			});
		},
		
		update: function () {
			this.updateBindElements();
		}
	};
})();