import Conversation from "./Conversation";
import { useEffect, useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";
function Conversations() {
	const { loading, conversations } = useGetConversations();
	const [initialEmoji, setInitialEmoji] = useState("");
	useEffect(() => {
		setInitialEmoji(getRandomEmoji());
	}, []);

	return (
		<div className=' py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={initialEmoji}
					lastIdx={idx === conversations.length - 1}
				/>
			))}
			{loading ? (
				<span className='loading loading-spinner mx-auto'></span>
			) : null}
		</div>
	);
}

export default Conversations;
