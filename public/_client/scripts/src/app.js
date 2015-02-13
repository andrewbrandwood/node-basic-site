(function(window, $, undefined){
	"use strict";

	var App = App || {};

	App = function(){

		var _self = this;

		function init(){
			_self.socket = socket;
			addListeners();

			sendServerMessage();
		}

		function addListeners(){
			_self.socket.on('server:basic-dispatch', showApp);
			_self.socket.on('server:emit', showEveryone);
		}

		function showApp(val){
			console.log(val);
			
		}

		function showEveryone(val){
			console.log(val);
			//_self.socket.emit('client:basic-call', 0);
		}

		function sendServerMessage(){
			//send a message to the server
			_self.socket.emit('client:basic-call', 0);
		}

		init();
	};

	var ap = new App();

})(window, jQuery);