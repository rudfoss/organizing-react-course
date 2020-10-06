import React, { useState } from "react"
import TextInput from "features/UI/TextInput"

interface LoginProps {
	onSuccess: () => void
	onCancel: () => void
}

export const Login = ({onSuccess, onCancel}: LoginProps): JSX.Element => {
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")

	const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()
		if (userName === "foo" && password === "bar") {
			onSuccess()
		}
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