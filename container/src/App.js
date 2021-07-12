import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { StylesProvider, createGenerateClassName} from "@material-ui/core/styles"

import AuthApp from "../components/authApp"
import MarketingApp from "../components/marketingApp"
import Header from "../components/Header"

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}