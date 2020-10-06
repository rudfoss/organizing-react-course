import React, { useState, useMemo } from "react"
import { UserInfo, UserDataContext, UserInfoManager } from "./userInfoHooks"

interface UserDataProviderProps {
	children: JSX.Element
}

export const Name = ({children}: UserDataProviderProps): JSX.Element => {
	const [userData, setUserData] = useState<UserInfo>({ authenticated: false })
	const userDataManager = useMemo<UserInfoManager>(() => ({
		...userData,
		login: (userName) => setUserData({ authenticated: true, userName }),
		logout: () => setUserData({ authenticated: false })
	}), [userData])

	return (
		<UserDataContext.Provider value={userDataManager}>
			{children}
		</UserDataContext.Provider>
	)
}

export default Name