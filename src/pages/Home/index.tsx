import { FC } from "react";
import Products from "../../components/Products/index.tsx";
import ProductDetail from "../../components/ProductDetail/index.tsx";

const Home: FC = () => {
	return (
		<div>
			<Products />
			<ProductDetail />
		</div>
	);
};

export default Home;
