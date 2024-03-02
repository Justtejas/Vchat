const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "10d",
	});

	const options = {
		maxAge: 1000 * 60 * 60 * 24 * 10, // would expire after 10 days
		httpOnly: true, // The cookie only accessible by the web server
		sameSite: "strict", // The cookie will only be sent in requests if the URL in the request is same as the URL in the cookie
		secure: process.env.NODE_ENV === "production" ? true : false, // The cookie will only be sent in requests if the request is secure (https)
	};
	res.cookie("jwt", token, options);
};

module.exports = generateTokenAndSetCookie;
