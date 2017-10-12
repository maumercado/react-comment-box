import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';


class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

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

export default connect(null, { saveComment })(CommentBox);