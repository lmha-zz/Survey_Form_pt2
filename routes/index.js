module.exports = function Route(app) {

	var errorMsg = '';

	app.get('/', function(req, res) {
		res.render('index', { error: errorMsg });
		errorMsg = '';
	})

	app.post('/result', function(req, res) {
		if((req.body.name).length === 0) {
			errorMsg = 'Name field is required!';
			res.redirect('/');
		} else {
			res.render('result', {
				name: req.body.name,
				location: req.body.location,
				language: req.body.language,
				comment: req.body.comment
			})
		}
	})

	app.get('/go_back', function(req, res) {
		res.redirect('/');
	})

}