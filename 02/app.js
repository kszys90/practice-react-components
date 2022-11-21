import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    clickHandler = e => {
        console.log('click')
        const {amount} = this.state
        this.setState({ amount: amount + 1 })
    }

    render() {
        return (
            <button
                onClick={this.clickHandler}
            >
                click me ({this.state.amount})
            </button>)
    }

}

root.render(<Counter />);
