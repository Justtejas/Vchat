const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const messageRouter = require("./routes/message.routes");
const userRouter = require("./routes/user.routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/user", userRouter);
app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port: ${PORT}`);
});
