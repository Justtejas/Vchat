import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

const App = function () {
	const { authUser } = useAuth();
	return (
		<div className='bg-soothingBlue bg-opacity-95 h-screen p-4 flex items-center justify-center'>
			<Routes>
				<Route
					path='/'
					element={authUser ? <Home /> : <Navigate to={"/login"} />}
				/>
				<Route
					path='/login'
					element={authUser ? <Navigate to={"/"} /> : <Login />}
				/>
				<Route
					path='/signup'
					element={authUser ? <Navigate to='/' /> : <Signup />}
				/>
				<Route path='*' Component={() => <Navigate to='/' />} />
			</Routes>
			<Toaster />
		</div>
	);
};

export default App;
