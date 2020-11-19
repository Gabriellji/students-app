import React, { Component } from 'react';

class Student extends Component {

    state = {
        showProfile: false
    }

    showModal = () => {
        this.setState({
            showProfile: true
        });
    }

    closeModal = () => {
        this.setState({
            showProfile: false
        });
    }

    render() {
        return (
            <div className="students-card">
                <h1>{this.props.user.name}</h1>
                <img src={this.props.user.picture} alt={this.props.user.name} />
                <p>{this.props.user.shortAbout}</p>
                <button
                    onClick={this.showModal}
                >Show more</button>
                {
                    this.state.showProfile &&
                    <div className="model">
                        <h1>{this.props.user.name}</h1>
                        <img src={this.props.user.picture} alt={this.props.user.name} />
                        <p>{this.props.user.longAbout}</p>
                        <button
                            onClick={this.closeModal}
                        >Close</button>
                    </div>
                }
            </div>

        )
    }
}

export default Student;