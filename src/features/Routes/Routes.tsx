import React, { Suspense } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import Home from "features/Home"
import NotFound from "features/NotFound"
import LogoutRoute from "./LogoutRoute"
import Thrower from "features/Thrower"

const Login = React.lazy(() => import("features/Login"))
const Counter = React.lazy(() => import("features/Counter"))
const PostList = React.lazy(() => import("features/PostList"))

export const Routes = (): JSX.Element => {
	const { push, goBack } = useHistory()
	return (
		<Suspense fallback={<p><span role="img" aria-label="loading...">🕓</span></p>}>
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
				<Route path="/herebedragons">
					<Thrower/>
				</Route>
				<Route path="/" exact>
					<Home/>
				</Route>
				<Route>
					<NotFound onReturn={() => goBack()}/>
				</Route>
			</Switch>
		</Suspense>
	)
}

export default Routes