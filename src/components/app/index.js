import React from "react"
import { render } from "react-dom"
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom"
import { LocaleProvider, Layout } from "antd"
import frFR from "antd/lib/locale-provider/fr_FR"
import ScrollToTop from "src/components/utils/ScrollToTop"

import Map from "./Map"
import Node from "./Node"

import "./style.scss"

const { Header, Content, Footer } = Layout

const App = () => (
    <BrowserRouter>
        <ScrollToTop>
            <LocaleProvider locale={frFR}>
                <Layout>
                    <Header style={{ position: "fixed", width: "100%" }}>
                        <div className="logo" />
                    </Header>
                    <Content styleName="content-wrapper">
                        <Switch>
                            <Route exact path="/" component={Map} />
                            <Route path="/node/:id" component={Node} />
                            <Route path="*" render={() => <Redirect to="/" />} />
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
