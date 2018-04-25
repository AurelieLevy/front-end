import React from "react"

import request from "src/resources/request"
import mapboxgl from "mapbox-gl"

import "./style.scss"

mapboxgl.accessToken =
	"pk.eyJ1IjoibWF0aGlhcy1oZWlnIiwiYSI6ImNqZ2V6ejFpaDRxa3MycXBodzJqZHZhcDgifQ.luPiLBLbHqeTfdEcG8wj3Q"

module.exports = class Tasks extends React.Component {
	state = {
		data: [],
		loading: false,
		loadingMore: false,
		showLoadingMore: true,
		lng: 6.659125,
		lat: 46.778845,
		zoom: 15
	}

	//componentDidMount = () => this.fetchData()

	fetchData = () => {
		this.setState({
			loadingMore: true
		})
		request.get("episodes", {}, res => {
			console.log(res)
			// const data = this.state.data.concat(DEFAULT_DATA)
			this.setState(
				{
					data: res.data,
					loadingMore: false
				},
				() => window.dispatchEvent(new Event("resize"))
			)
		})
	}

	componentDidMount() {
		const { lng, lat, zoom } = this.state

		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: "mapbox://styles/mapbox/streets-v9",
			center: [lng, lat],
			zoom
		})

		map.on("move", () => {
			const { lng, lat } = map.getCenter()

			this.setState({
				lng: lng.toFixed(4),
				lat: lat.toFixed(4),
				zoom: map.getZoom().toFixed(2)
			})
		})
	}

	render() {
		return <div ref={el => (this.mapContainer = el)} className="absolute top right left bottom" />
	}
}
