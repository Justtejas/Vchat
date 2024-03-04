import { useState } from "react";
import toast from "react-hot-toast";

function useSignup() {
	const [loading, setLoading] = useState(false);

	const signup = async ({ username, password, confirmPassword, gender }) => {
		const success = handleFormErrors({
			username,
			password,
			confirmPassword,
			gender,
		});
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password, confirmPassword, gender }),
			});
			const data = await res.json();
			console.log(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	return { loading, signup };
}

export default useSignup;

function handleFormErrors({ username, password, confirmPassword, gender }) {
	toast.error("Please fill all the fields");
	if (!username || !password || !confirmPassword || !gender) {
		toast.error("Please fill all the fields");
		return false;
	}
	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}
	if (password.length < 6) {
		toast.error("Password must be at least 6 characters long");
		return false;
	}
	return true;
}
