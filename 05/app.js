import { object } from 'prop-types';
import React from 'react'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));
const key = '2af55f842ab44d94ba475a7a4b9c0336'

class AppWeather extends React.Component {
    state = {
        data: null
    }

    render() {
        if (this.state.data) {
            const { data } = this.state
            const { lat, lng } = this.props
            console.log(data)
            return (
                <div>
                    <h3>Aktualne warunki pogodowe w {data[0].city_name} ({lat}:{lng})</h3>
                    <p>Temperatura powietrza: {data[0].temp}</p>
                    <p>Oraz jest: {data[0].weather.description}</p>
                </div>
            )
        }
        return null
    }

    componentDidMount() {
        fetch(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${this.props.lat}&lon=${this.props.lng}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                }
                return Promise.reject('Error' + resp.status)

            })
            .then(object => {
                this.setState({ data: object.data })
            })
    }
}



root.render(<AppWeather lat={50.061389} lng={19.938333} />);