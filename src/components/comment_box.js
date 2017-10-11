import React, { Component } from 'react';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            comment: ''
        });
    };

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    };

    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <button action="submit">Submit Comment</button>
            </form>
        );
    }
}