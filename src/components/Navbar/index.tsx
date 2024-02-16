import { useContext, FC } from "react";
import NavbarItem from "./components/NavbarItem.tsx";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.tsx";
import useFetch from "../../hooks/useFetch.tsx";
import productApi from "../../api/products.ts";

// Navbar Component

interface NavbarOption {
	name: string;
	to: string;
	className?: string;
}

const rightNavbarOptions: NavbarOption[] = [
	{ name: "My orders", to: "/orders" },
	{ name: "My Account", to: "/account" },
	{ name: "Login", to: "/login" },
];

const Navbar: FC = () => {
	const { count } = useContext(ShoppingCartContext);
	const email = "nelson@shopi.com";

	const { data: categories = [], isLoading } = useFetch<string[]>({
		url: productApi.categoriesUrl,
		swrConfig: {
			keepPreviousData: true,
			onError: (e) => window.alert("Error en cargad de productos"),
		},
	});

	const leftNavbarOptions: NavbarOption[] = [
		{ name: "Shopi", to: "/", className: "font-semibold" },
		...categories.map((category) => ({
			name: category,
			to: `products/${category}`,
		})),
	];

	if (isLoading) {
		return <div>Loading ....</div>;
	}

	return (
		<nav
			className={
				"flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light"
			}>
			<ul className="flex items-center gap-3">
				{leftNavbarOptions.map(({ name, to, className }) => (
					<li key={name} className={className}>
						<NavbarItem to={to}>{name}</NavbarItem>
					</li>
				))}
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-gray-500 font-semibold">{email}</li>
				{rightNavbarOptions.map(({ name, to, className }) => (
					<li key={name} className={className}>
						<NavbarItem to={to}>{name}</NavbarItem>
					</li>
				))}
				<li className="flex flex-row">
					<ShoppingCartIcon className="h-6 w-6 text-black" />
					<span>({count})</span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
