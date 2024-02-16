import { FC, useContext } from "react";
import ProductCard from "../ProductCard/index.tsx";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.tsx";
import { Product } from "../../api/products.ts";

const Products: FC = () => {
	const {
		setProductPreview,
		productPreview,
		loading: loadingProducts,
		products,
	} = useContext(ShoppingCartContext);

	const onChangeProductPreview = (product: Product) => {
		if (productPreview?.id === product.id) {
			setProductPreview(null);
		} else {
			setProductPreview(product);
		}
	};

	return (
		<div className="grid gap-20 grid-cols-4 w-full max-w-screen-lg mt-2">
			{loadingProducts && <p>Loading...</p>}
			{products.map((product) => {
				const { title: name, price, category: tag, image: linkImg } = product;
				return (
					<ProductCard
						name={name}
						price={price}
						tag={tag}
						linkImg={linkImg}
						key={product.id}
						onclick={() => onChangeProductPreview(product)}
					/>
				);
			})}
		</div>
	);
};

export default Products;
