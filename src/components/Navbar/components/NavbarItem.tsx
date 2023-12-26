import {FC, ReactNode} from "react";
import {NavLink} from "react-router-dom";

const NavbarItem: FC<{ to: string, children: string | ReactNode }> = ({to, children}) => {
	const activeStyle = 'underline underline-offset-4'
	return (
		// Use la etiqueta NavLink y le pasé las propiedades to y className
		<NavLink
			to={to}
			className={({isActive}) => (isActive ? activeStyle : undefined)}
		>
			{children}
		</NavLink>
	);
};
export default NavbarItem;
