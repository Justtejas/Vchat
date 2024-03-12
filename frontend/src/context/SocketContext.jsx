import { createContext, useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { useAuth } from "./AuthContext";
export const SocketContext = createContext();
export const useSocketContext = () => useContext(SocketContext);
export const SocketProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuth();
	useEffect(() => {
		if (authUser) {
			const socket = io("https://vchat-7gda.onrender.com", {
				query: {
					userId: authUser._id,
				},
			});
			setSocket(socket);
			socket.on("onlineUsers", (users) => {
				setOnlineUsers(users);
			});
			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);
	return (
		<SocketContext.Provider value={{ socket, onlineUsers }}>
			{children}
		</SocketContext.Provider>
	);
};
