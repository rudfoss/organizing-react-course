import React from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import Login from "features/Login"
import Home from "features/Home"
import NotFound from "features/NotFound"
import LogoutRoute from "./LogoutRoute"
import Counter from "features/Counter"
import PostList from "features/PostList"

export const Routes = (): JSX.Element => {
	const { push, goBack } = useHistory()
	return (
		<Switch>
			<Route path="/login">
				<Login onSuccess={() => push("/")} onCancel={() => push("/")}/>
			</Route>
			<Route path="/logout">
				<LogoutRoute/>
			</Route>
			<Route path="/counter">
				<Counter/>
			</Route>
			<Route path="/posts">
				<PostList/>
			</Route>
			<Route path="/" exact>
				<Home/>
			</Route>
			<Route>
				<NotFound onReturn={() => goBack()}/>
			</Route>
		</Switch>
	)
}

export default Routes