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
        return (
            <Fragment>
                <div styleName={"sensor-wrapper"}>
                    <div styleName={"title"}>Dernières valeurs</div>
                    <Row gutter={24}>
                        <Col {...actualSensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Temperature ambiante">
                                Whatever content
                            </Card>
                        </Col>
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
                    <Row gutter={24}>
                        <Col {...historySensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Temperature ambiante" />
                        </Col>
                        <Col {...historySensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Pression">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...historySensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Humidité">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...historySensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Resitance de l'air">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...historySensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Temperature du noeud">
                                Whatever content
                            </Card>
                        </Col>
                        <Col {...historySensorResponsiveProps}>
                            <Card loading={this.state.loading} title="Voltage">
                                Whatever content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}
