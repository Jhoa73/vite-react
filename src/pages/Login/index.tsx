import { useEffect } from "react";

function Login() {
	useEffect(() => {
		console.log("Login")
	}, []);
	return <h1> Login</h1>;
}

export default Login;
