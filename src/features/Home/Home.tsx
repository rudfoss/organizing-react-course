import React from "react"
import { useUserInfoManager } from "features/userInfo"

export const Home = (): JSX.Element => {
	const {authenticated, userName, logout} = useUserInfoManager()

	return (
		<div>
			<h1>Home</h1>
			{authenticated && 
				<>
					<p>Welcome {userName}</p>
					<button onClick={logout}>Logout</button>
				</>
			}
		</div>
	)
}

export default Home