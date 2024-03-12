import React from "react";
import useConversation from "../../state/useConversation";
import { useSocketContext } from "../../context/SocketContext";

function Conversation({ conversation, emoji, lastIdx }) {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	const showEmoji = () => {
		//show emoji if user is online
		if (isOnline) {
			return emoji;
		}
	};
	return (
		<>
			<div
				className={`flex items-center gap-3 p-2 rounded-md hover:bg-blue-500 cursor-pointer ${
					isSelected ? "bg-sky-400" : ""
				}`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={` avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='flex gap justify-between'>
						<p className='font-bold text-white'>{conversation.username}</p>
						<span className='text-xl'>{showEmoji()}</span>
					</div>
				</div>
			</div>
			{lastIdx ? null : <div className='divider my-0 py-0 h-1 '></div>}
		</>
	);
}

export default Conversation;
