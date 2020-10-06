import React from "react"
import {BrowserRouter} from "react-router-dom"
import Nav from "features/Nav";
import Routes from "features/Routes/Routes";

const App = (): JSX.Element => (
  <BrowserRouter>
    <Nav/>
    <Routes/>
  </BrowserRouter>
)

export default App;
