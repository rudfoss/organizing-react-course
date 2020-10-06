import { createContext, useContext } from "react"

export interface UserInfo {
	authenticated: boolean
	userName?: string
}

export interface UserInfoManager extends UserInfo {
	login: (userName: string) => void
	logout: () => void
}

export const UserDataContext = createContext<UserInfoManager>({
	authenticated: false,
	login: () => {},
	logout: () => {}
})

export const useUserInfoManager = () => useContext(UserDataContext)

export const useUserInfo = () => useContext(UserDataContext) as UserInfo