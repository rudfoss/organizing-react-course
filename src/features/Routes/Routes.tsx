import React from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import Login from "features/Login"
import Home from "features/Home"
import NotFound from "features/NotFound"

export const Routes = (): JSX.Element => {
	const { push, goBack } = useHistory()
	return (
		<Switch>
			<Route path="/login">
				<Login onSuccess={() => push("/auth")} onCancel={() => push("/")}/>
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