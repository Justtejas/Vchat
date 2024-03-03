import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
function Sidebar() {
	return (
		<div className='border-r border-slate-400 p-4 flex flex-col'>
			<Search />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
}

export default Sidebar;
