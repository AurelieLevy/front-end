import React, { Fragment } from "react"
import { Row, Col, Card } from "antd"
import request from "src/resources/request"

import "./style.scss"

module.exports = class Tasks extends React.Component {
	state = {
		data: [],
		loading: false,
		loadingMore: false,
		showLoadingMore: true
	}

	//componentDidMount = () => this.fetchData()

	fetchData = () => {
		this.setState({
			loadingMore: true
		})
		request.get(`spot/${this.props.match.params.id}`, {}, res => {
			console.log(res)
			// const data = this.state.data.concat(DEFAULT_DATA)
			this.setState({
				data: res.data,
				loadingMore: false
			})
		})
	}

	render() {
		const topColResponsiveProps = {
			xs: 24,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 6,
			style: { marginBottom: 24 }
		}
		return (
			<Fragment>
				<Row gutter={24}>
					<Col {...topColResponsiveProps}>
						<Card loading={this.state.loading} title="Card title">
							Whatever content
						</Card>
					</Col>
					<Col {...topColResponsiveProps}>
						<Card loading={this.state.loading} title="Card title">
							Whatever content
						</Card>
					</Col>
					<Col {...topColResponsiveProps}>
						<Card loading={this.state.loading} title="Card title">
							Whatever content
						</Card>
					</Col>
					<Col {...topColResponsiveProps}>
						<Card loading={this.state.loading} title="Card title">
							Whatever content
						</Card>
					</Col>
				</Row>
			</Fragment>
		)
	}
}
