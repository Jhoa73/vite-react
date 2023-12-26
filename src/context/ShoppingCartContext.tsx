import {createContext, useState, FC, PropsWithChildren, Dispatch} from "react";
import {Product} from "../api/platziFake/useFetchProducts.tsx";


interface ShoppingCart {
	loading: boolean
	count: number
	setCount: Dispatch<number>
	productPreview: Product | null
	setProductPreview: Dispatch<Product | null>
	products: Product[],
	setProducts:Dispatch<Product[]>
}

const defaultShoppingCart: ShoppingCart = {
	loading: false,
	count: 0,
	setCount: () => {
	},
	productPreview: null,
	setProductPreview: () => {
	},
	products: [],
	setProducts: () => {
	},
}

export const ShoppingCartContext = createContext(defaultShoppingCart);

export const ShoppingCartContextProvider: FC<PropsWithChildren> = ({children}) => {
	const [count, setCount] = useState<number>(0);
	const [productPreview, setProductPreview] = useState<Product | null>(null);
	const [products, setProducts] = useState<Product[]>([]);
	const values: ShoppingCart  = {
		loading: false,
		count,
		setCount,
		productPreview,
		products,
		setProductPreview,
		setProducts
	}
	return (
		<ShoppingCartContext.Provider value={values}>
			{children}
		</ShoppingCartContext.Provider>
	);
}



