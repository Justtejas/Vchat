import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

function MessageContainer() {
	const notSelected = true;
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{notSelected ? (
				<NoChat />
			) : (
				<>
					<div className='bg-slate-700 px-4 py-2 mb-2'>
						<span className='label-text text-white'>To:</span>{" "}
						<span className='text-white font-bold'>Lam</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
}

function NoChat() {
	return (
		<div className='flex  items-center justify-center h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
				<p>Welcome Lam!</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-white w-12 h-12' />
			</div>
		</div>
	);
}
export default MessageContainer;
