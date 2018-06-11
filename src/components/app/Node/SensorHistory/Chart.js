import React from "react"

import { Chart, Axis, Geom, Tooltip } from "bizcharts"
import autoHeight from "../autoHeight"
import moment from "moment"

class SensorHistory extends React.Component {
    render() {
        const cols = {
            value: { min: 0 },
            date: { type: "time", range: [0, 1], mask: "YYYY-MM-DD HH:mm:ss" }
        }
        return (
            <Chart
                height={400}
                width={window.innerWidth}
                padding={30}
                data={this.props.data.map(({ date, value }) => ({
                    date: moment(date).format("YYYY-MM-DD HH:mm:ss"),
                    value
                }))}
                scale={cols}
                forceFit
            >
                <Axis name="date" />
                <Axis name="value" />
                <Tooltip crosshairs={{ type: "y" }} />
                <Geom animate type="line" position="date*value" size={2} />
                <Geom
                    animate
                    type="point"
                    position="date*value"
                    size={4}
                    shape={"circle"}
                    style={{ stroke: "#fff", lineWidth: 1 }}
                />
            </Chart>
        )
    }
}

export default autoHeight()(SensorHistory)
