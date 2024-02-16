export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export class ProductsApi {
	baseUrl = "https://fakestoreapi.com/products";

	get produtsUrl() {
		return this.baseUrl;
	}

	get categoriesUrl() {
		return `${this.baseUrl}/categories`;
	}

	getProductsByCategoryURl(category: string) {
		return `${this.baseUrl}/category/${category}`;
	}
}

const productApi = new ProductsApi();
export default productApi;
