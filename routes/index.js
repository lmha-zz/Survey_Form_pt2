module.exports = function Route(app) {

	app.get('/', function(req, res) {
		res.render('index');
	})

	app.io.route('form_submission', function(req, res) {
		if((req.data.name).length == 0) {
			var errorMsg = 'Name field is required!';
			req.io.emit('error', errorMsg)
		} else {
			var luckyNum = Math.ceil((Math.random()*1000-1)+1);
			var msg = "<p>You emitted the following information to the server: { name: '"+req.data.name+"', location: '"+req.data.location+"', language: '"+req.data.language+"', comment: '"+req.data.comment+"'}</p><p>Your lucky number emitted by the server is "+luckyNum+"</p>";
			req.io.emit('updated_message', msg);
		}
	})

}