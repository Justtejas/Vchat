const User = require("../models/user.model");
const getUsers = async (req, res) => {
	try {
		const loggedInUser = req.user._id;
		const filteredUsers = await User.find({
			_id: { $ne: loggedInUser },
		}).select("-password -__v");
		res.status(200).json(filteredUsers);
	} catch (error) {
		console.log("Error in getUsers Controller", error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = { getUsers };
