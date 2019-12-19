const { User } = require('../models/User');

module.exports = {
	async show(req, res) {
		const { ID } = req.params;

		const user = await User.findOne({ ID });

		return res.send(user);
	},

	async update(req, res) {
		const { ID } = req.params;
		const { name, email } = req.body;

		await User.findOneAndUpdate({ _id: ID }, { name, email });
	}
}
