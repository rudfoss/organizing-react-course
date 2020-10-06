import React from "react"

interface NotFoundProps {
	onReturn?: () => void
}

export const NotFound = ({onReturn}: NotFoundProps): JSX.Element => (
	<>
		<h3>404</h3>
		{onReturn && (<button onClick={onReturn}>Go back</button>)}
	</>
)

export default NotFound