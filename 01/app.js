import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class App extends React.Component {
    state = {
        counter: 0,
    }

    render() {
        console.log('render');

        return <h1>{this.state.counter}</h1>
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.id = setInterval(() => {
            const { counter } = this.state
            this.setState({ counter: counter + 1 })
        }, 1000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        if (this.state.counter === 5) {
            return this.componentWillUnmount()
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.id)
    }
}

root.render(<App />);
