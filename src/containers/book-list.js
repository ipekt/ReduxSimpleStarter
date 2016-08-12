import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
// whenever selectBook is called, result should be passed to all of the reducers
  return bindActionCreators({selectBook}, dispatch);
}

// Promote BookList from a component ot a container, needs to know new dispatch method, selectBook, Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
