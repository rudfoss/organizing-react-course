import React, { useState } from "react"
import TextInput from "features/UI/TextInput"
import { useUserInfoManager } from "features/userInfo"

interface LoginProps {
	onSuccess: () => void
	onCancel: () => void
}

export const Login = ({onSuccess, onCancel}: LoginProps): JSX.Element => {
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const userInfoManager = useUserInfoManager()

	const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		if (userName === "foo" && password === "bar") {
			userInfoManager.login(userName)
			onSuccess()
		}
	}

	if (userInfoManager.authenticated) {
		return <h3>You are already logged in</h3>
	}

	return (
		<form onSubmit={onSubmit}>
			<TextInput label="Username" value={userName} onChange={setUserName}/>
			<TextInput label="Password" type="password" value={password} onChange={setPassword}/>
			<button>Login</button>
			<button type="button" onClick={onCancel}>Cancel</button>
		</form>
	)
}

export default Login