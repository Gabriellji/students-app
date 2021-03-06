import React, { Component } from 'react';
import Button from './Button';

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
                <Button
                    text='Show more'
                    action={this.showModal}
                />
                {
                    this.state.showProfile &&
                    <div className="model">
                        <h1>{this.props.user.name}</h1>
                        <img src={this.props.user.picture} alt={this.props.user.name} />
                        <p>{this.props.user.longAbout}</p>
                        <Button
                            text='close'
                            action={this.closeModal}
                        />
                    </div>
                }
            </div>

        )
    }
}

export default Student;