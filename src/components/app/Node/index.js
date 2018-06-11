import React, { Fragment } from "react"
import { Row, Col, Card } from "antd"
import request from "src/resources/request"

import SensorHistory from "./SensorHistory"
import SensorState from "./SensorState"

import "./style.scss"

const DATA = [
    {
        year: "1991",
        value: 3
    },
    {
        year: "1992",
        value: 4
    },
    {
        year: "1993",
        value: 3.5
    },
    {
        year: "1994",
        value: 5
    },
    {
        year: "1995",
        value: 4.9
    },
    {
        year: "1996",
        value: 6
    },
    {
        year: "1997",
        value: 7
    },
    {
        year: "1998",
        value: 9
    },
    {
        year: "1999",
        value: 13
    }
]

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
        data: DATA,
        sensors: [{ id: "123", data: DATA, title: "test" }],
        loading: false,
        loadingMore: false,
        showLoadingMore: true
    }

    //componentDidMount = () => this.fetchData()

    fetchData = () => {
        this.setState({
            loadingMore: true
        })
        request.get(`node/${this.props.match.params.id}`, {}, res => {
            console.log(res)
            // const data = this.state.data.concat(DEFAULT_DATA)
            this.setState({
                data: res.data,
                loadingMore: false
            })
        })
    }

    renderSensorsHistory = ({ id, title, data }) => (
        <Col key={id} {...historySensorResponsiveProps}>
            <SensorHistory title={title} data={data} loading={this.state.loading} />
        </Col>
    )

    renderSensorState = ({ id, title }) => (
        <Col key={id} {...actualSensorResponsiveProps}>
            <SensorState title={title} />
        </Col>
    )

    render() {
        return (
            <Fragment>
                <div styleName={"sensor-wrapper"}>
                    <div styleName={"title"}>Dernières valeurs</div>
                    <Row gutter={24}>
                        {this.state.sensors.map(this.renderSensorState)}
                        <Col {...actualSensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Pression">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...actualSensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Humidité">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...actualSensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Resitance de l'air">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...actualSensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Temperature du noeud">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...actualSensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Voltage">
                                Whatever content
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div styleName={"sensor-wrapper"}>
                    <div styleName={"title"}>Historique</div>
                    <Row gutter={24}>{this.state.sensors.map(this.renderSensorsHistory)}</Row>
                </div>
            </Fragment>
        )
    }
}
