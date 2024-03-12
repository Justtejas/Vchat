import React, { useEffect } from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import useConversation from "../../state/useConversation";
function Sidebar() {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const toggleSelectConversation = () => {
		if (selectedConversation) setSelectedConversation(null);
	};
	useEffect(() => {
		return () => {
			setSelectedConversation(null);
		};
	}, [setSelectedConversation]);
	return (
		<div className='border-r border-slate-400 p-4 flex flex-col'>
			<Search />
			<div className='divider px-3'></div>
			<div onClick={toggleSelectConversation}>
				<Conversations />
			</div>
			<LogoutButton />
		</div>
	);
}

export default Sidebar;
