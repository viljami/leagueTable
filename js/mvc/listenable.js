var Listenable = {};

(function () {
	Listenable = {
		_listeners: [],
		addListener: function ( eventName , callback ) {
			this._listeners.push({ eventName: eventName, callback: callback });
		},
		emit: function ( eventName ) {
			console.log( eventName );
			this._listeners.forEach(function ( listener ) {
				if( listener.eventName == eventName ) {
					listener.callback({ eventName: eventName, obj: this });
				}
			});
		}
	};
})();
