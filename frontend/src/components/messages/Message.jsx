import { useAuth } from "../../context/AuthContext";
import useConversation from "../../state/useConversation";
function Message({ messages }) {
	const { authUser } = useAuth();
	const { selectedConversation } = useConversation();
	const isSender = messages?.sender === authUser._id;
	const messageClass = isSender ? "chat-end" : "chat-start";
	const profilePic = isSender
		? authUser.profilePic
		: selectedConversation?.profilePic;
	const messageBG = isSender ? "bg-blue-400" : "bg-slate-500";
	const messageTime = new Date(messages.createdAt)
		.toUTCString()
		.split(" ")[4]
		.slice(0, 5);
	const popMessage = messages.pop ? "pop" : "";
	return (
		<div className={`chat ${messageClass}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src={profilePic} alt='user avatar' />
				</div>
			</div>
			<div className={`chat-bubble text-white ${messageBG} ${popMessage}`}>
				<span className='text-white'>{messages.message}</span>
			</div>
			<div className='chat-footer opacity-50 text-xs mt-2'>
				<span className='text-white'>
					{new Date(messages.createdAt)
						.toUTCString()
						.split(" ")
						.slice(0, 3)
						.join(" ")}{" "}
					{messageTime}
				</span>
			</div>
		</div>
	);
}

export default Message;
