import Message from "./Message";
import { useRef, useEffect } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../components/MessageSkeleton";
import useConversation from "../../state/useConversation";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
	const { selectedConversation } = useConversation();
	const { loading, messages } = useGetMessages();
	useListenMessages();
	const lastMessage = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessage.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 overflow-auto flex-1'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessage}>
						<Message messages={message} />
					</div>
				))}
			{loading &&
				new Array(7).fill(<MessageSkeleton />).map((skeleton, index) => (
					<div key={index} className='m-4'>
						{skeleton}
					</div>
				))}
			{!loading && messages.length === 0 && (
				<p className='text-center text-xl font-semibold text-white'>
					Send a messages to start the conversation with{" "}
					{selectedConversation.username}
				</p>
			)}
		</div>
	);
}

export default Messages;
