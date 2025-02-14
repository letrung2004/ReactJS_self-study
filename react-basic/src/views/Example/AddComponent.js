import React from "react";

class AddComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handelFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handelLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handelSubmit = (event) => {
        event.preventDefault()
        if (!this.state.firstName || !this.state.lastName) {
            alert('no name to submit')
            return;
        }
        console.log('>>>>> Check data input:', this.state)
        this.props.addNewName({
            id: Math.floor(Math.random() * 1001),
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
        this.setState({
            firstName: '',
            lastName: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handelFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handelLastName(event)} /><br />
                    <input
                        type="submit"
                        onClick={(event) => this.handelSubmit(event)} />
                </form>
            </>
        );
    }
}
export default AddComponent;