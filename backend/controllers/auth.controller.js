const loginUser = async (req, res) => {
	try{
		const {username,password,confirmPassword,gender} = req.body;
	} catch (error) {
		console.log(error);
	}
};

const signupUser = async (req, res) => {
	res.send("signupUser");
};

const logoutUser = async (req, res) => {
	res.send("Logout user");
};

module.exports = {
	loginUser,
	signupUser,
	logoutUser,
};
