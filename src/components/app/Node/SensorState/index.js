import React from "react"
import { Card } from "antd"
import Gauge from "./Gauge"

/*
import createG2 from "g2-react"

var data1 = []
for (var i = 0; i < 50; i++) {
    var item = {}
    item.type = i + ""
    item.value = 10
    data1.push(item)
}

var data2 = []
for (var _i = 0; _i < 50; _i++) {
    var _item = {}
    _item.type = _i + ""
    _item.value = 10
    if (_i === 25) {
        _item.value = 14
    }
    if (_i > 25) {
        _item.value = 0
    }
    data2.push(_item)
}

const Gauge = createG2(chart => {
    chart.legend(false)
    chart.tooltip(false)
    var view1 = chart.view()
    view1.source(data1)
    view1.axis(false)
    view1.coord("polar", {
        startAngle: -9 / 8 * Math.PI,
        endAngle: 1 / 8 * Math.PI,
        innerRadius: 0.75,
        radius: 0.8
    })
    view1
        .interval()
        .position("type*value")
        .color("#CBCBCB")
        .size(6)

    var view2 = chart.view()
    view2.source(data1, {
        type: {
            tickCount: 3
        }
    })
    view2.axis("value", false)
    view2.axis("type", {
        grid: null,
        line: null,
        tickLine: null,
        label: {
            offset: -15,
            textStyle: {
                textAlign: "center",
                fill: "#CBCBCB",
                fontSize: 18
            },
            formatter: function formatter(val) {
                if (val === "49") {
                    return 50
                }

                return val
            }
        }
    })
    view2.coord("polar", {
        startAngle: -9 / 8 * Math.PI,
        endAngle: 1 / 8 * Math.PI,
        innerRadius: 0.95,
        radius: 0.55
    })
    view2
        .interval()
        .position("type*value")
        .color("#CBCBCB")
        .size(6)

    var view3 = chart.view()
    view3.source(data2)
    view3.axis(false)
    view3.coord("polar", {
        startAngle: -9 / 8 * Math.PI,
        endAngle: 1 / 8 * Math.PI,
        innerRadius: 0.75,
        radius: 0.8
    })
    view3
        .interval()
        .position("type*value")
        .color("value", "#3023AE-#53A0FD")
        .opacity(1)
        .size(6)
    view3.guide().text({
        position: ["50%", "65%"],
        content: "26°",
        style: {
            fill: "#CBCBCB",
            fontSize: 64,
            textAlign: "center",
            textBaseline: "middle"
        }
    })

    chart.render()
})*/

module.exports = ({ loading, title, value }) => (
    <Card loading={loading} title={title} style={{ textTransform: "capitalize" }}>
        <Gauge title={title} height={200} percent={value} />
    </Card>
)
