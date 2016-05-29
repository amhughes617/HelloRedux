import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //used to make sure action generated flows through all reducers

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.selectBook(book)}
                  key={ book.title }
                  className="list-group-item">
                  { book.title }
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever returned here will show up as props inside of BookList
    //whenever application state changes, this container will instantly re-render
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called the result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// Promote BookList from a component to container - it needs to know about this new
//dispatch method, made available as a prop
//takes a function and component and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
