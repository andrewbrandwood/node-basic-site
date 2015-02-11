(function(window, $, undefined){
	"use strict";

	var App = App || {};

	App = function(){

		var _self = this;

		function init(){
			_self.socket = socket;
			addListeners();
		}

		function addListeners(){
			_self.socket.on('server:basic-dispatch', showApp);
		}

		function showApp(val){
			console.log(val);
			_self.socket.emit('client:basic-call', 0);
		}

		init();
	};

	var ap = new App();

})(window, jQuery);