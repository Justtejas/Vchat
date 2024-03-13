import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function useGetConversations() {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/user");
				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (err) {
				toast.error(err.message, { duration: 1500 });
			} finally {
				setLoading(false);
			}
		};
		getConversations();
	}, []);
	return { loading, conversations };
}

export default useGetConversations;
