import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrName: [
            { id: 'name1', firstName: 'Le', lastName: 'David' },
            { id: 'name2', firstName: 'Nguyen', lastName: 'Join' },
            { id: 'name3', firstName: 'Le', lastName: 'Khoa' }
        ]
    }

    addNewName = (name) => {
        console.log('check name from addcomponent: ', name)
        this.setState({
            arrName: [...this.state.arrName, name]
        })
    }

    deleteName = (name) => {
        let curName = this.state.arrName;
        curName = curName.filter(item => item.id !== name.id)
        this.setState({
            arrName: curName
        })
    }

    render() {
        return (
            <div>
                <AddComponent
                    addNewName={this.addNewName} />
                <ChildComponent
                    arrName={this.state.arrName}
                    deleteName={this.deleteName}
                />
            </div>
        );
    }
}
export default MyComponent;