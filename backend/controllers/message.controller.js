const Conversation = require("../models/conversation.model.js");
const Message = require("../models/message.model.js");
const sendMessage = async (req, res) => {
	try {
		const { id: receiver } = req.params;
		const { message } = req.body;
		const sender = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [sender, receiver] },
		});
		if (!conversation) {
			conversation = await Conversation.create({
				participants: [sender, receiver],
			});
		}
		const newMessage = new Message({
			message,
			sender,
			receiver,
		});
		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}
		await Promise.all([conversation.save(), newMessage.save()]);
		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage Controller", error);
		res.status(500).json({ message: error.message });
	}
};

const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const sender = req.user._id;
		const conversation = await Conversation.findOne({
			participants: { $all: [sender, userToChatId] },
		}).populate("messages");
		if (!conversation) {
			return res.status(200).json([]);
		}
		const messages = conversation.messages;
		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages Controller", error);
		res.status(500).json({ message: error.message });
	}
};
module.exports = {
	sendMessage,
	getMessages,
};
