const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const generateTokenAndSetCookie = require("../utils/generateToken");

const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcrypt.compare(
			password,
			user?.password || ""
		);
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ message: "Invalid username or password" });
		}

		generateTokenAndSetCookie(res, user._id);
		res.status(200).json({
			_id: user._id,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.error("Login controller error" + error);
		res.status(500).json({ message: error.message });
	}
};

const signupUser = async (req, res) => {
	try {
		const { username, password, confirmPassword, gender } = req.body;
		if (password !== confirmPassword) {
			return res.status(400).json({ message: "Password do not match" });
		}
		const user = await User.findOne({ username });
		if (user) {
			return res.status(400).json({ message: "Username already taken" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const profilePicBoy = `https://avatar.iran.liara.run/public/boy/?username=${username}`;

		const profilePicGirl = `https://avatar.iran.liara.run/public/girl/?username=${username}`;

		const newUser = new User({
			username,
			password: hashedPassword,
			gender,
			profilePic: gender === "male" ? profilePicBoy : profilePicGirl,
		});

		if (newUser) {
			generateTokenAndSetCookie(res, newUser._id);
			await newUser.save();
			res.status(201).json({
				_id: newUser._id,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ message: "Invalid user data" });
		}
	} catch (error) {
		console.error("Signup controller error" + error);
		res.status(500).json({ message: error.message });
	}
};

const logoutUser = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "User logged out" });
	} catch (error) {
		console.error("Logout controller error" + error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	loginUser,
	signupUser,
	logoutUser,
};
