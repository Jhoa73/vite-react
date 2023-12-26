import {useEffect} from "react";

function AccountPage() {
	useEffect(() => {
		console.log("AccountPage");
	}, []);

	return <h1> Account</h1>;
}

export default AccountPage;
