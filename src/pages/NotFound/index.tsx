import { useEffect } from "react";

function NotFoundPage() {
	useEffect(() => {
		console.log("Not found")
	}, []);
	return <h1> Not found</h1>;
}

export default NotFoundPage;
