import React from "react"

import { Chart, Axis, Geom, Tooltip } from "bizcharts"
import autoHeight from "../autoHeight"

class SensorHistory extends React.Component {
    render() {
        const cols = {
            value: { min: 0 },
            year: { range: [0, 1] }
        }
        return (
            <Chart
                height={400}
                width={window.innerWidth}
                padding={30}
                data={this.props.data}
                scale={cols}
                forceFit
            >
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip crosshairs={{ type: "y" }} />
                <Geom animate type="line" position="year*value" size={2} />
                <Geom
                    animate
                    type="point"
                    position="year*value"
                    size={4}
                    shape={"circle"}
                    style={{ stroke: "#fff", lineWidth: 1 }}
                />
            </Chart>
        )
    }
}

export default autoHeight()(SensorHistory)
