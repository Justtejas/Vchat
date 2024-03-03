import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-950 bg-opacity-40 shadow-md'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
}

export default Home;
