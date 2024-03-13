import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuth();

	const logout = async function () {
		setLoading(true);
		try {
			const res = await fetch("api/auth/logout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.removeItem("authUser");
			setAuthUser(null);
		} catch (err) {
			toast.error(err.message, { duration: 1500 });
		} finally {
			setLoading(false);
		}
	};
	return { loading, logout };
};

export default useLogout;
