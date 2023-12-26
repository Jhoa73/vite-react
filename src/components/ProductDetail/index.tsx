import {useContext, FC} from 'react';
import "./style.css"
import {XMarkIcon} from "@heroicons/react/24/solid"
import {ShoppingCartContext} from "../../context/ShoppingCartContext.tsx"

const ProductDetail: FC = () => {
	const {productPreview: product, setProductPreview} = useContext(ShoppingCartContext)

	if (!product) {
		return <></>
	}

	return (
		<aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6">
			<div className="flex justify-between items-top">
				<h2 className="font-medium text-2xl">{product.title}</h2>
				<div>
					<XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => setProductPreview(null)}/>
				</div>
			</div>
			<div className="mt-3">
				<figure className={"relative px-6"}>
					<span
						className="absolute bottom-0 right-0 bg-black/60 rounded-lg text-white text-xs m-2 px-3 py-0.5">
						{product.category}
					</span>
					<img src={product.image} alt="name" className="w-full h-full max-h-80 rounded-lg"/>
				</figure>
				<p className="font-medium text-xl mb-2">${product.price}</p>
				<p className="font-light text-sm">{product.description}</p>
			</div>
		</aside>
	);
};

export default ProductDetail;
