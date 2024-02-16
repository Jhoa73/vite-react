import "./App.css";
import Navbar from "../components/Navbar/index.tsx";
import { ShoppingCartContextProvider } from "../context/ShoppingCartContext.tsx";
import { routes } from "./routes/AppRoutes.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/index.tsx";

const LayoutEcommerce = () => {
	return (
		<ShoppingCartContextProvider>
			<header>
				<Navbar />
			</header>
			<Layout>
				<Outlet />
			</Layout>
		</ShoppingCartContextProvider>
	);
};

const router = createBrowserRouter([
	{
		element: <LayoutEcommerce />,
		children: routes,
	},
]);

export function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
