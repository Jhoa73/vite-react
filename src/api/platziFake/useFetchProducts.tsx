import {useCallback, useState} from "react";

export interface Product {
	id: number
	title: string
	price: number,
	description: string
	category: string
	image: string
}

interface fetchProduct {
	data: Product[]
	loading: boolean;
	fetchProducts: () => Promise<Product[]>
}

const useFetchProducts = (): fetchProduct => {
	const [state, setState] = useState<fetchProduct>({data: [], loading: false})

	const fetchProducts = useCallback(async () => {
		let data: Product[] = []
		try {
			setState((prevState) => ({...prevState, loading: true}))
			const res = await fetch('https://fakestoreapi.com/products')
			data = await res.json()
			setState((prevState) => ({...prevState, data: data}))
		} catch (e) {
			console.error(e)
		} finally {
			setState((prevState) => ({...prevState, loading: false}))}
		return data
	}, [])

	// TODO: Refactor 2 requests
	//
	// useEffect(() => {
	// 	if (state.data.length === 0 && !state.loading) {
	// 		fetchProducts().finally()
	// 	}
	// }, [])

	return {...state, fetchProducts}
}

export default useFetchProducts