var Collection = {};

(function () {
	Collection = function ( models ) {
		this.models = models || [];

		this.update = function ( e ) {			
			//this.emit( 'update' );
		};
		this.update = this.update.bind( this );

		this.models.forEach(function ( model ) {
			//model.addListener( 'update', this.update );
		});

		this.addModel = function ( model ) {
			model.updateIndex( this.models.length );
			this.models.push( model );
			//model.addListener( 'update', this.update );
		};

		this.getModels = function () {
			return this.models;
		};

		this.sort = function ( func ) {
			if( !func ) {
				console.log( 'Collection: No sort function given!');
			}
			this.models.sort( func );
		};
	};

	Collection.prototype = Object.create(Listenable);
})();