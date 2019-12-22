const { User } = require('../models/User');

module.exports = {
	async show(req, res) {
		const { id } = req.params;

		const user = await User.findOne({ _id: id });

		return res.send(user);
	},

	async update(req, res) {
		const { id } = req.params;
		const { name, email } = req.body;

		await User.findOneAndUpdate({ _id: id }, { name, email });
	}
}
