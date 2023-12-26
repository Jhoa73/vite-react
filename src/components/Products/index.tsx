import {FC, useContext, useCallback} from 'react';
import ProductCard from "../ProductCard";
import {Product} from "../../api/platziFake/useFetchProducts.tsx";
import {ShoppingCartContext} from "../../context/ShoppingCartContext.tsx";

const Products: FC = () => {
	// const {loading: loadingProducts, data: products = []} = useFetch<Product[]>('https://fakestoreapi.com/products',{ persist:true}, []) // error in reload window
	const {setProductPreview, productPreview, loading: loadingProducts, products} = useContext(ShoppingCartContext)

	const onChangeProductPreview = useCallback((product: Product) => {
		if (productPreview?.id === product.id) {
			setProductPreview(null)
		} else {
			setProductPreview(
				product
			)
		}
	}, [productPreview])

	return (<div className="grid gap-12 grid-cols-4 w-full max-w-screen-lg mt-2">
		{loadingProducts && <p>Loading...</p>}
		{products.map((product) => {
			const {title: name, price, category: tag, image: linkImg} = product
			return (
				<ProductCard
					name={name}
					price={price}
					tag={tag}
					linkImg={linkImg}
					key={product.id}
					onclick={() => onChangeProductPreview(product)}/>
			)
		})}
	</div>)
}

export default Products;