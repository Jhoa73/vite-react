import { useEffect } from "react";


function OrderPage() {
	useEffect(() => {
		console.log("OrderPage");
	}, []);
	return <h1> Orders</h1>;
}

export default OrderPage;
