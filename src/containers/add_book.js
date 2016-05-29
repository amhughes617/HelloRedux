import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {title: '', pages: ''}
    }

    render() {
        return (
            <div className="input-form">
              <form action="" onSubmit={() => this.onClickSubmit(event) }>
                <input
                  value={this.state.title}
                  onChange={event => this.onTitleInputChange(event.target.value)}
                />
                <input
                  value={this.state.pages}
                  onChange={event => this.onPagesInputChange(event.target.value)}
                />
                <button>
                  Submit
                </button>
              </form>
            </div>
        );
    }

    onClickSubmit(event) {
        event.preventDefault();
        console.log("this is");
        let book = {title: this.state.title, pages: this.state.pages};
        this.setState( {title: '', pages: ''});
        console.log("after reseting");
        console.log(book);
        this.props.addBook(book);
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

export default connect(mapDispatchToProps)(InputForm);
