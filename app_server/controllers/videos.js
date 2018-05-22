
const videos = function (req, res) {
	res.render('videos', {
		user: req.user
	});
};

module.exports = { videos }