import React from "react";
import './ListTodos.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodos extends React.Component {
    state = {
        listTodos: [
            { id: '111', title: 'Computer Science' },
            { id: '112', title: 'Information Technology' },
            { id: '113', title: 'Software Engineer' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Added successfully!");
    }

    handelDelete = (todo) => {
        let curTodo = this.state.listTodos
        curTodo = curTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: curTodo
        })
        toast.success("Deleted successfully!");

    }

    handelEdit = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(todo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listCopy = [...listTodos];

            let objIndex = listCopy.findIndex((item => item.id === todo.id))

            listCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listCopy,
                editTodo: {}
            })
            toast.success("Updated successfully!");
            return;
        }
        //edit 
        this.setState({
            editTodo: todo
        })

    }

    handelOnChange = (event) => {
        let editToDoCopy = { ...this.state.editTodo };

        editToDoCopy.title = event.target.value
        this.setState({
            editTodo: editToDoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>>>>check empty', isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-item" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span style={{ margin: 5 }}>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span style={{ margin: 5 }}>
                                                    {index + 1} - <input
                                                        onChange={(event) => this.handelOnChange(event)}
                                                        value={editTodo.title} />
                                                </span>
                                                :
                                                <span style={{ margin: 5 }}>{index + 1} - {item.title}</span>
                                            }

                                        </>

                                    }
                                    <button
                                        className="btn-edit"
                                        onClick={() => this.handelEdit(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}

                                    </button>
                                    <button
                                        className="btn-delete"
                                        onClick={() => this.handelDelete(item)}
                                    >Delete</button>
                                </div>
                            )
                        }
                        )
                    }

                </div>

            </div>
        );
    }
}
export default ListTodos;