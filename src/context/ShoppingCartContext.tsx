import {
	createContext,
	useState,
	FC,
	PropsWithChildren,
	Dispatch,
} from "react";
import { useParams } from "react-router-dom";
import productApi, { Product } from "../api/products";
import useFetch from "../hooks/useFetch";

interface ShoppingCart {
	loading: boolean;
	count: number;
	setCount: Dispatch<number>;
	productPreview: Product | null;
	setProductPreview: Dispatch<Product | null>;
	products: Product[];
}

const defaultShoppingCart: ShoppingCart = {
	loading: false,
	count: 0,
	setCount: () => {},
	productPreview: null,
	setProductPreview: () => {},
	products: [],
};

export const ShoppingCartContext = createContext(defaultShoppingCart);

export const ShoppingCartContextProvider: FC<PropsWithChildren> = ({
	children,
}) => {
	const { category } = useParams<{ category: string }>();
	const { data: products = [], isLoading } = useFetch<Product[]>({
		url: category
			? productApi.getProductsByCategoryURl(category)
			: productApi.produtsUrl,
		swrConfig: {
			keepPreviousData: true,
			onError: (e) => window.alert("Error en cargad de productos"),
		},
	});

	const [count, setCount] = useState<number>(0);
	const [productPreview, setProductPreview] = useState<Product | null>(null);

	const values: ShoppingCart = {
		products,
		loading: isLoading,
		count,
		setCount,
		productPreview,
		setProductPreview,
	};
	return (
		<ShoppingCartContext.Provider value={values}>
			{children}
		</ShoppingCartContext.Provider>
	);
};
