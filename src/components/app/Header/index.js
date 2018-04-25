import React from "react"
import { Layout, Icon } from "antd"

import "./style.scss"

module.exports = () => (
	<Layout.Header styleName="header">
		<div styleName="header-content">
			<Icon type="play-circle-o" />
			<div styleName="title">Silicon Valley Episodes</div>
		</div>
	</Layout.Header>
)
