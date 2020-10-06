import React, { useState } from "react"

export const Counter = (): JSX.Element => {
	const [count, setCount] = useState(0)
	return (<button onClick={() => setCount(count+1)}>{count}</button>)
}

export default Counter