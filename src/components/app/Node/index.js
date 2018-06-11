import React, { Fragment } from "react"
import { Row, Col } from "antd"
import request from "src/resources/request"

import SensorHistory from "./SensorHistory"
import SensorState from "./SensorState"

import moment from "moment"

import "./style.scss"

const actualSensorResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 6,
    lg: 4,
    xl: 4,
    style: { marginBottom: 24 }
}
const historySensorResponsiveProps = {
    span: 24,
    style: { marginBottom: 24 }
}

module.exports = class Node extends React.Component {
    state = {
        data: new Array(5).map((v, i) => ({ type: i, data: [] })),
        loading: true
    }

    componentDidMount = () => this.fetchData()

    fetchData = () => {
        this.setState({ loading: true })
        request.get(`nodes/${this.props.match.params.id}`, {}, res => {
            console.log(this.parseData(res.data))
            this.setState({
                data: this.parseData(res.data),
                loading: false
            })
        })
    }

    parseData = data => {
        const types = data.reduce(
            (acc, d) => (acc.indexOf(d.type) < 0 ? acc.concat([d.type]) : acc),
            []
        )

        return types.map(type => ({
            type,
            data: data
                .filter(d => d.type === type)
                .map(({ value, date }) => ({ value, date }))
                .sort((a, b) => moment.utc(b.date).diff(moment.utc(a.date)))
        }))
    }

    renderSensorsHistory = ({ type, data }) => (
        <Col key={type + "_history"} {...historySensorResponsiveProps}>
            <SensorHistory title={type} data={data} loading={this.state.loading} />
        </Col>
    )

    renderSensorState = ({ type, data }) => (
        <Col key={type} {...actualSensorResponsiveProps}>
            <SensorState title={type} value={data ? data[0].value : NaN} />
        </Col>
    )

    render() {
        return (
            <Fragment>
                <div styleName={"sensor-wrapper"}>
                    <div styleName={"title"}>Dernières valeurs</div>
                    <Row gutter={24}>{this.state.data.map(this.renderSensorState)}</Row>
                </div>
                <div styleName={"sensor-wrapper"}>
                    <div styleName={"title"}>Historique</div>
                    <Row gutter={24}>{this.state.data.map(this.renderSensorsHistory)}</Row>
                </div>
            </Fragment>
        )
    }
}
