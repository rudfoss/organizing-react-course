import React from "react"
import { useUserInfoManager } from "features/userInfo"
import { useHistory, Link } from "react-router-dom"

export const LogoutRoute = () => {
	const { push } = useHistory()
	const { authenticated, logout } = useUserInfoManager()

	if (authenticated) {
		logout()
		push("/")
		return null
	}

	return (
		<div>
			<h3>Cannot log out. You are not logged in.</h3>
			<Link to="/login">Login</Link>
		</div>
	)
}

export default LogoutRoute