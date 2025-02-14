import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handelOnClickAdd = () => {
        if (!this.state.title) {
            alert('No data to add !!!')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input
                    type="text"
                    value={title}
                    onChange={(event) => this.handleOnChange(event)} />
                <button
                    type="button"
                    className="btn-add"
                    onClick={() => this.handelOnClickAdd()}
                >Add</button>
            </div>
        );
    }
}
export default AddTodo;