import React from "react";
import GenderCheckbox from "./GenderCheckbox";

function SignUp() {
	return (
		<div className='flex flex-col items-center justify-center lg:w-1/4  min-w-96 mx-auto'>
			<div className='w-full p-16 rounded-lg bg-gray-950 shadow-md bg-opacity-40'>
				<h1 className=' text-4xl font-semibold text-center text-gray-200'>
					SignUp <span className='text-blue-400'>VChat</span>
				</h1>
				<form className='mt-6'>
					<div>
						<label className='label p-2'>
							<span className=' text-lg label-text text-white'>Username</span>
						</label>
						<input
							type='text'
							className='w-full input  input-bordered h-10'
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
							placeholder='Enter Password'
							className='w-full input  input-bordered h-10'
						/>
					</div>
					<GenderCheckbox />
					<div>
						<button className='btn btn-block btn-sm mt-4 '>
							<span className='text-lg text-center'>Sign Up</span>
						</button>
					</div>
				</form>
				<a
					href='#'
					className='text-lg hover:underline hover:text-blue-300 mt-6 ml-2 inline-block text-white'
				>
					Already have an account?
				</a>
			</div>
		</div>
	);
}

export default SignUp;
