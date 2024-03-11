import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
	return (
		<div className='flex flex-col lg:w-1/4 items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-16 rounded-lg bg-gray-950 shadow-md bg-opacity-40'>
				<h1 className=' text-4xl font-semibold text-center text-gray-200'>
					Login <span className='text-blue-400'>VChat</span>
				</h1>
				<form className='mt-6' onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className=' text-lg label-text text-white'>Username</span>
						</label>
						<input
							type='text'
							autoComplete='current-username'
							className='w-full input  input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							name='password'
							placeholder='Enter Password'
							className='w-full input  input-bordered h-10'
						/>
					</div>
					<div>
						<button className='btn btn-block btn-sm mt-6' disabled={loading}>
							{!loading ? (
								<span className='text-lg text-center'>Login</span>
							) : (
								<span className='loading loading-spinner'></span>
							)}
						</button>
					</div>
				</form>
				<Link
					to='/signup'
					className='text-lg hover:underline hover:text-blue-300 mt-6 ml-2 inline-block text-white'
				>
					{"Don't"} have an account?
				</Link>
			</div>
		</div>
	);
}

export default Login;
