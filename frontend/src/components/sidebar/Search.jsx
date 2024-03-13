import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../state/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

function Search() {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search)
			return toast.error("Please enter a username", { duration: 1500 });
		if (search.length < 3) {
			return toast.error("Username should be atleast 3 characters long", { duration: 1500 });
		}
		const users = conversations.find((conversation) => {
			return conversation.username.toLowerCase().includes(search.toLowerCase());
		});
		if (users) {
			setSelectedConversation(users);
			setSearch("");
		} else {
			toast.error("User not found", { duration: 1500 });
		}
	};
	return (
		<form className=' flex items-center gap-2' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Search Users'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='input bg-slate-700 input-bordered mx-auto rounded-full text-white focus:ring-2 focus:ring-sky-400 focus:outline-none'
			/>
			<button
				type='submit'
				className='btn btn-circle mx-auto bg-sky-900 text-white'
			>
				<FaSearch className='w-6 h-6 outline-none mt-1' />
			</button>
		</form>
	);
}

export default Search;
