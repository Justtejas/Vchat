const Server = require("socket.io").Server;
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});
const users = new Map();

const getRecieverSocketId = (recieverId) => {
	return users.get(recieverId);
};

io.on("connection", (socket) => {
	const userId = socket.handshake.query.userId;
	if (userId !== undefined) {
		users.set(userId, socket.id);
	}
	io.emit("onlineUsers", Array.from(users.keys()));
	socket.on("disconnect", () => {
		users.delete(userId);
		io.emit("onlineUsers", Array.from(users.keys()));
	});
});

module.exports = { app, io, server, getRecieverSocketId };
