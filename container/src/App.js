import React, {lazy, Suspense} from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { StylesProvider, createGenerateClassName} from "@material-ui/core/styles"

import Header from "../components/Header"
import Progress from "../components/Progress"

const AuthLazy = lazy(() => import('../components/authApp'))
const MarketingLazy = lazy(() => import('../components/marketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: "co"
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}