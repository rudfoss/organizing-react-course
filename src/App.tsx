import React from "react"
import {BrowserRouter} from "react-router-dom"
import Nav from "features/Nav"
import Routes from "features/Routes/Routes"
import UserInfo from "features/userInfo"

const App = (): JSX.Element => (
  <BrowserRouter>
    <UserInfo>
      <>
        <Nav/>
        <Routes/>
      </>
    </UserInfo>
  </BrowserRouter>
)

export default App