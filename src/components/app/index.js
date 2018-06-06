import React from "react"
import { render } from "react-dom"
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom"
import { LocaleProvider, Layout } from "antd"
import frFR from "antd/lib/locale-provider/fr_FR"
import ScrollToTop from "src/components/utils/ScrollToTop"

import Map from "./Map"
import Node from "./Node"
import Login from "./Login"

import "./style.scss"

const { Header, Content, Footer } = Layout

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (localStorage.token ? <Component {...props} /> : <Redirect to="/login" />)}
    />
)

const App = () => (
    <BrowserRouter>
        <ScrollToTop>
            <LocaleProvider locale={frFR}>
                <Layout>
                    <Header style={{ position: "fixed", width: "100%", zIndex: 1000 }}>
                        <div className="logo" />
                    </Header>
                    <Content styleName="content-wrapper">
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <PrivateRoute exact path="/map" component={Map} />
                            <PrivateRoute path="/node/:id" component={Node} />
                            <Route path="*" render={() => <Redirect to="/login" />} />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        {"Created with ❤️ by the heig team"}
                    </Footer>
                </Layout>
            </LocaleProvider>
        </ScrollToTop>
    </BrowserRouter>
)

render(<App />, document.getElementById("react-app"))
