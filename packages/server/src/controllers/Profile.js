const { User } = require('../models/User');

module.exports = {
	async show(req, res) {
		const { ID } = req.params;

		const user = await User.findOne({ ID });

		return res.send(user);
	}
}
