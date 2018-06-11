import React from "react"
import { Layout, Button, Icon } from "antd"
import styled from "styled-components"
import { Link } from "react-router-dom"
import request from "src/resources/request"
import "./style.scss"

const AbsoluteLink = styled(Link)`
    position: absolute !important;
    left: 20px;
`

const AbsoluteButton = styled(Button)`
    position: absolute !important;
    right: 20px;
`

const renderBackButton = () =>
    window.location.pathname.match("/node/*") !== null ? (
        <AbsoluteLink to="/map">
            <Button>
                <Icon type="left" />Map
            </Button>
        </AbsoluteLink>
    ) : null

const renderLogoutButton = () =>
    localStorage.getItem("token") ? (
        <AbsoluteButton ghost onClick={logout}>
            <Icon type="logout" />Logout
        </AbsoluteButton>
    ) : null

const logout = () =>
    request.logout(() => {
        localStorage.removeItem("token")
        location.reload()
    })

module.exports = () => (
    <Layout.Header styleName="header">
        {renderBackButton()}
        <div styleName="header-content">
            <Icon type="dashboard" />
            <div styleName="title">HEIG Air Quality Monitor</div>
        </div>
        {renderLogoutButton()}
    </Layout.Header>
)
