import React from 'react'

class BlackAdder extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const one = data.get("one");
        const two = data.get("two");

        fetch(`/api/BlackAdder/Add?one=${one}&two=${two}`, {
            method: 'POST',
        });
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="one"
                    type="number"
                />

                <input
                    name="two"
                    type="number"
                />

                <button>Add!</button>
            </form>
        );
    }
}

export default BlackAdder