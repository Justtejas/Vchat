const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.routes");
const messageRouter = require("./routes/message.routes");
const userRouter = require("./routes/user.routes");
const connectDB = require("./db/connect");
require("dotenv").config();
const { app, server } = require("./socket/socket");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});
server.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port: ${PORT}`);
});
