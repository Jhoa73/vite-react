import { FC, useContext, useEffect } from "react";
import Products from "../../components/Products";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.tsx";
import {Product} from "../../api/platziFake/useFetchProducts.tsx";
import {useLoaderData} from "react-router-dom";

const Home: FC = () => {
	const { setProducts } = useContext(ShoppingCartContext);
 	const { products } = useLoaderData() as {products: Product[]}

	useEffect(() => {
		setProducts(products);
	}, []);

	return (
		<div>
			<h1> Home</h1>
			<Products />
			<ProductDetail />
		</div>
	);
};


export const loader = async() => {
	let products: Product[] = []
	try {
		const res = await fetch('https://fakestoreapi.com/products')
		products = await res.json()
		return {products}
	} catch (e) {
		console.error(e)
	}
	return {products}

}
export default Home;
