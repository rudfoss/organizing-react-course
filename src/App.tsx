import React from "react"
import {BrowserRouter} from "react-router-dom"
import Nav from "features/Nav"
import Routes from "features/Routes/Routes"
import UserInfo from "features/userInfo"
import Layout from "features/Layout"
import ErrorBoundary from "features/ErrorBoundary"

const App = (): JSX.Element => (
  <ErrorBoundary>
    <BrowserRouter>
      <UserInfo>
        <Layout nav={<Nav/>}>
          <Routes/>
        </Layout>
      </UserInfo>
    </BrowserRouter>
  </ErrorBoundary>
)

export default App