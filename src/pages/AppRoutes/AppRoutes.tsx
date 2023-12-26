import Home  , {loader as loaderHome} from "../Home";
import OrderPage from "../Orders";
import AccountPage from "../Account";
import Login from "../Login";
import NotFound from "../NotFound";


export const routes = [
	{
		path: "/",
		element: <Home />,
		loader: loaderHome
	},
	{
		path: "/home",
		element: <Home />,
		loader: loaderHome
	},
	{
		path: "/orders",
		element: <OrderPage/>,
	},
	{
		path: "/account",
		element: <AccountPage />,
	},
	{
		path: "/login",
		element: <Login/>,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];
