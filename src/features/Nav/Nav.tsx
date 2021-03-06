import React from "react"
import { Link } from "react-router-dom"

export const Nav = (): JSX.Element => (
	<nav>
		<Link to="/">Home</Link>{" - "}
		<Link to="/login">Login</Link>{" - "}
		<Link to="/counter">Counter</Link>{" - "}
		<Link to="/herebedragons">Danger</Link>{" - "}
		<Link to="/posts">Posts</Link>
	</nav>
)

export default Nav