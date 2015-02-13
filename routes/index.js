var WebsiteHomeController = function (website) {
	var socketId = website.get('socketId');
	// Public functions
	this.get = function(request, response) {
		response.render('index', createModel());
	};

	var createModel = function (params) {
		
		var model = { 
			viewId: 'wesite-home',
			controller: 'website-home-controller',
			title: 'Basic node & socket.io site',
			user: true,
			socketId: socketId
		}
		
		return model;

	}

	socketControlls(website, socketId);
};

module.exports = function(website) {
	var controller = new WebsiteHomeController(website);

	website.get('/', controller.get);
};

function socketControlls(website, socketId){
	//////////////////////////////
	// socket.io actions 
	//////////////////////////////
	
	if(typeof io === 'undefined'){
		var io = website.get('socket');//.of('/' + socketId);
	}
	
	if(io.TSClient) return;
	io.on('connection', function(socket){
		io.TSClient = true;
		console.log(socketId);

		socket.on('client:basic-call', function(val){
			//prevent infinite loop
			if(val > 1) return;
			val ++;

			//broadcast to specific socket
			var sampleVal = {'sample': 1};
			socket.emit('server:basic-dispatch', sampleVal);
		});
		
		//bradcast to all
		var val = 'everyone listening gets this';
		io.emit('server:emit', val);

		//disconnect message
		socket.on('disconnect', function(){
			console.log('index disconnected');
		});
	});
}