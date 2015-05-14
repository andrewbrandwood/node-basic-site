var WebsiteHomeController = function (website) {
	// Public functions
	this.get = function(request, response) {
		response.render('index', createModel());
	};

	var createModel = function (params) {
		
		var model = { 
			viewId: 'wesite-home',
			controller: 'website-home-controller',
			title: 'Basic node site',
			user: true
		}
		
		return model;

	}
};

module.exports = function(website) {
	var controller = new WebsiteHomeController(website);

	website.get('/', controller.get);
};