import React from "react"
import { Layout, Icon } from "antd"

import "./style.scss"

module.exports = () => (
    <Layout.Header styleName="header">
        <div styleName="header-content">
            <Icon type="dashboard" />
            <div styleName="title">HEIG Air Quality Monitor</div>
        </div>
    </Layout.Header>
)
