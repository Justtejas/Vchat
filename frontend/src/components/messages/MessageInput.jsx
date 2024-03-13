import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-base rounded-lg block w-full p-2.5 bg-gray-500  border-gray-700
        text-white 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        placeholder-white'
					placeholder='Type a message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type='submit'
					className='absolute inset-y-0 end-0 flex items-center pe-3'
				>
					{loading ? (
						<div className='loading loading-bars'></div>
					) : (
						<BsSend className='text-white w-6 h-6' />
					)}
				</button>
			</div>
		</form>
	);
}

export default MessageInput;
