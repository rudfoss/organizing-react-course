import React from "react"
import {BrowserRouter} from "react-router-dom"
import Nav from "features/Nav"
import Routes from "features/Routes/Routes"
import UserInfo from "features/userInfo"
import Layout from "features/Layout"

const App = (): JSX.Element => (
  <BrowserRouter>
    <UserInfo>
      <Layout nav={<Nav/>}>
        <Routes/>
      </Layout>
    </UserInfo>
  </BrowserRouter>
)

export default App