import React from "react"

import request from "src/resources/request"
import ReactMapboxGl, { Marker } from "react-mapbox-gl"
import styled from "styled-components"

import "./style.scss"

const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoibWF0aGlhcy1oZWlnIiwiYSI6ImNqZ2V6ejFpaDRxa3MycXBodzJqZHZhcDgifQ.luPiLBLbHqeTfdEcG8wj3Q",
    minZoom: 13
})

const Mark = styled.div`
    background-color: #e74c3c;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 4px solid #eaa29b;
    cursor: pointer;
`

module.exports = class Tasks extends React.Component {
    state = {
        data: [],
        loading: false,
        loadingMore: false,
        latitude: 46.778845,
        longitude: 6.659125,
        zoom: 17
    }

    componentDidMount = () => this.fetchData()

    fetchData = () => {
        this.setState({
            loading: true
        })
        request.get("nodes", {}, data => {
            console.log(data)
            this.setState({ data: data, loading: false })
        })
    }

    renderNode = ({ latitude, longitude, id }) => (
        <Marker
            key={id}
            coordinates={[longitude, latitude]}
            onClick={() => {
                this.props.history.push("/node/" + id)
            }}
        >
            <Mark />
        </Marker>
    )

    render() {
        const { latitude, longitude, zoom, data } = this.state
        return (
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{ height: "100vh", width: "100vw" }}
                center={[longitude, latitude]}
                zoom={[zoom]}
            >
                {data.map(this.renderNode)}
            </Map>
        )
    }
}
