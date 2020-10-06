import React from "react"
import { useUserInfoManager } from "features/userInfo"

export const Home = (): JSX.Element => {
	const {authenticated, userName, logout} = useUserInfoManager()

	return (
		<>
			<h1>Home</h1>
			{authenticated && 
				<>
					<p>Welcome {userName}</p>
					<button onClick={logout}>Logout</button>
				</>
			}
			<p>
				Lorizzle ipsizzle dolizzle sit i saw beyonces tizzles and my pizzle went crizzle, fo shizzle adipiscing elit. Nullam the bizzle velizzle, crazy we gonna chung, ass quis, gravida for sure, daahng dawg. Pellentesque sizzle stuff. Sizzle erizzle. Ghetto uhuh ... yih! dolizzle dapibizzle turpizzle tempus tempor. Maurizzle fo shizzle my nizzle nibh izzle turpizzle. Dawg in tortor. Funky fresh fo shizzle rhoncizzle break it down. In dizzle gangster platea dictumst. Yo dapibizzle. Curabitur ass mah nizzle, pretizzle mah nizzle, fo shizzle uhuh ... yih!, away vitae, nunc. Tellivizzle suscipizzle. Rizzle sure velit go to hizzle fo shizzle my nizzle.
			</p>
		</>
	)
}

export default Home