import React from "react"
import { Card } from "antd"

import Chart from "./Chart"
// const Pie = createG2(chart => {
//     chart.line().position("year*value")
//     chart
//         .point()
//         .position("year*value")
//         .size(4)
//         .shape("circle")
//         .style({
//             stroke: "#fff",
//             lineWidth: 1
//         })
//     chart.render()
// })
/*<Pie
            data={props.data}
            width={window.innerWidth}
            height={300}
            configs={{ forceFit: true, container: "mountNode", padding: 0 }}
        />*/

module.exports = props => (
    <Card loading={props.loading} title={props.title}>
        <Chart data={props.data} />
    </Card>
)
