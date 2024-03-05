import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { useState } from "react";

function SignUp() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();
	const handleGenderCheckbox = (gender) => {
		setFormData({ ...formData, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(formData);
	};
	return (
		<div className='flex flex-col items-center justify-center lg:w-1/4  min-w-96 mx-auto'>
			<div className='w-full p-16 rounded-lg bg-gray-950 shadow-md bg-opacity-40'>
				<h1 className=' text-4xl font-semibold text-center text-gray-200'>
					SignUp <span className='text-blue-400'>VChat</span>
				</h1>
				<form className='mt-6' onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className=' text-lg label-text text-white'>Username</span>
						</label>
						<input
							type='text'
							autoComplete='username'
							className='w-full input  input-bordered h-10'
							value={formData.username}
							onChange={(e) =>
								setFormData({ ...formData, username: e.target.value })
							}
							placeholder='Enter Username'
							name='username'
						/>
					</div>
					<div className='mt-2'>
						<label className='label'>
							<span className='text-lg label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							autoComplete='current-password'
							value={formData.password}
							onChange={(e) =>
								setFormData({ ...formData, password: e.target.value })
							}
							name='password'
							placeholder='Enter Password'
							className='w-full input  input-bordered h-10'
						/>
					</div>
					<div className='mt-2'>
						<label className='label'>
							<span className='text-lg label-text text-white'>
								Confirm Password
							</span>
						</label>
						<input
							type='password'
							name='password'
							autoComplete='current-password'
							onChange={(e) =>
								setFormData({ ...formData, confirmPassword: e.target.value })
							}
							value={formData.confirmPassword}
							placeholder='Enter Password'
							className='w-full input  input-bordered h-10'
						/>
					</div>
					<GenderCheckbox
						onCheckChange={handleGenderCheckbox}
						selectedCheck={formData.gender}
					/>
					<div>
						<button className='btn btn-block btn-sm mt-4 ' disabled={loading}>
							{!loading ? (
								<span className='text-lg text-center'>Sign Up</span>
							) : (
								<span className='loading loading-spinner'></span>
							)}
						</button>
					</div>
				</form>
				<Link
					to='/login'
					className='text-lg hover:underline hover:text-blue-300 mt-6 ml-2 inline-block text-white'
				>
					Already have an account?
				</Link>
			</div>
		</div>
	);
}

export default SignUp;
