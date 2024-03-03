import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
	return (
		<form className=' flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search Users'
				className='input bg-slate-700 input-bordered rounded-full'

			/>
			<button type='submit' className='btn btn-circle bg-sky-400 text-white'>
				<FaSearch className='w-6 h-6 outline-none mt-1' />
			</button>
		</form>
	);
}

export default Search;
