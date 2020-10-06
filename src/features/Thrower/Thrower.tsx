import React from "react"

export const Thrower = (): JSX.Element => {
	const doThrow = () => {
		throw new Error("BOOOO")
	}

	return (<button onClick={doThrow}><span role="img" aria-label="Dynamite">🧨</span></button>)
}

export default Thrower