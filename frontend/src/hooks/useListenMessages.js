import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../state/useConversation";
import notificationSound from "../assets/notification/popnotif.mp3"

function useListenMessages() {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();
	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.pop = true;
			const popSound = new Audio(notificationSound); 
			popSound.play();
			setMessages([...messages, newMessage]);
		});
		return () => {
			socket?.off("newMessage");
		};
	}, [socket, setMessages, messages]);
}

export default useListenMessages;
