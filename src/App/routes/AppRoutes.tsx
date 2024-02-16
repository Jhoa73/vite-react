import AccountPage from "../../pages/Account";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import OrderPage from "../../pages/Orders";

export const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/products/:category",
		element: <Home />,
	},
	{
		path: "/orders",
		element: <OrderPage />,
	},
	{
		path: "/account",
		element: <AccountPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];
