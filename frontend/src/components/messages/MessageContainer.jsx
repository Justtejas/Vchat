import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { AiOutlineMessage, AiOutlineClose } from "react-icons/ai";
import useConversation from "../../state/useConversation";
import { useAuth } from "../../context/AuthContext";

function MessageContainer() {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const closeSelectedConversation = () => {
		setSelectedConversation(null);
	};
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChat />
			) : (
				<>
					<div className=' bg-black bg-opacity-80 px-4 py-2 mb-2 flex'>
						<span className='text-white font-bold'>
							{selectedConversation.username}
						</span>
						<AiOutlineClose
							className='ml-auto text-white w-6 h-6'
							onClick={closeSelectedConversation}
							cursor={"pointer"}
						/>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
}

function NoChat() {
	const { authUser } = useAuth();
	return (
		<div className='flex  items-center justify-center h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
				<p>Hello {authUser.username}</p>
				<p>Select a chat to start messaging</p>
				<AiOutlineMessage className='text-white w-12 h-12' />
			</div>
		</div>
	);
}
export default MessageContainer;
