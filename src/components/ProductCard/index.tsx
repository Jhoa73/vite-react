import { FC, useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.tsx";

interface CardProps {
	name: string;
	price: number;
	linkImg: string;
	tag: string;
	onclick: () => void;
}

const ProductCard: FC<CardProps> = ({ name, tag, price, linkImg, onclick }) => {
	const { count, setCount } = useContext(ShoppingCartContext);

	return (
		<div className={"bg-white cursor-pointer w-56 h-60"} onClick={onclick}>
			<figure className={"relative mb-2 w-full h-4/5"}>
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{tag}
				</span>
				<img
					src={linkImg}
					alt="name"
					className="w-full h-full object-fill rounded-lg"
				/>
				<span
					className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
					onClick={() => {
						setCount(count + 1);
					}}>
					<PlusIcon className="h-6 w-6 text-black" />
				</span>
			</figure>
			<p className="flex justify-between flex-col">
				<span className="text-sm font-light">{name}</span>
				<span className="text-lg font-medium">${price}</span>
			</p>
		</div>
	);
};

export default ProductCard;
