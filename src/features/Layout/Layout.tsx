import React from "react"
import cls from "./Layout.module.css"

interface LayoutProps {
	children: JSX.Element
	nav: JSX.Element
}

export const Layout = ({children, nav}: LayoutProps): JSX.Element => {
	return (
		<div className={cls.layout}>
			<div className={cls.navContainer}>
				{nav}
			</div>
			<div className={cls.container}>
				{children}
			</div>
		</div>
	)
}

export default Layout