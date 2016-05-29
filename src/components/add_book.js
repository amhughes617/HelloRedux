import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {title: '', pages: ''}
    }

    render() {
        return (
            <div className="input-form">
              <input
                value={this.state.title}
                onChange={event => this.onTitleInputChange(event.target.value)}
              />
              <input
                value={this.state.pages}
                onChange={event => this.onPagesInputChange(event.target.value)}
              />
              <button onClick={() => this.onClickSubmit(event) }>
                Submit
              </button>
            </div>
        );
    }

    onClickSubmit(event) {
        event.preventDefault();
        let book = {title: this.state.title, pages: this.state.pages};
        this.setState( {title: '', pages: ''});
        this.props.onSubmit(book);
    }
    onTitleInputChange(title) {
        this.setState({title});
    }
    onPagesInputChange(pages) {
        this.setState({pages});
    }
}
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addBook: addBook }, dispatch);
// }

export default InputForm;
