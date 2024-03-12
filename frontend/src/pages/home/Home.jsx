import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-black bg-opacity-80 shadow-lg'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
}

export default Home;
