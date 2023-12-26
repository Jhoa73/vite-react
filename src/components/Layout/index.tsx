import {FC, PropsWithChildren} from "react";

interface LayoutProps extends PropsWithChildren {

}

const Layout: FC<LayoutProps> = ({children}) => {
	return (
		<div className="flex flex-col mt-20 items-center">
			{children}
		</div>
	);
}

export default Layout;