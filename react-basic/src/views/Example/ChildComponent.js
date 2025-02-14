import React from "react";

class ChildComponent extends React.Component {
    state = {
        showName: false
    }

    handelShow = () => {
        this.setState({
            showName: !this.state.showName
        })
    }

    handelOnClickDelete = (name) => {
        console.log('>>>>>>>Info:', name)
        this.props.deleteName(name)
    }

    render() {
        let { showName } = this.state
        let { arrName } = this.props
        return (
            <div>
                {
                    showName === false ?
                        <div><button onClick={() => this.handelShow()}>Show</button></div>
                        :
                        <>
                            <div className="name-list">
                                {
                                    arrName.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.firstName} {item.lastName} <></>
                                                <span onClick={() => this.handelOnClickDelete(item)}>x</span>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div>
                                <button onClick={() => this.handelShow()}>Hide</button>
                            </div>
                        </>
                }


            </div>
        );
    }
}
export default ChildComponent;