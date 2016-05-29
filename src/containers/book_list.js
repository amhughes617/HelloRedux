import React, { Component } from 'react';
import { connect } from 'react-redux';



class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={ book.title } className="list-group-item">{ book.title }</li>
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
//takes a function and component and produces a container
export default connect(mapStateToProps)(BookList);