/** @format */

import React, { Component } from "react";
import withSearch from "./WithSearch";
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { booksData, searchValue, handleSearch } = this.props;
    let filterData = booksData.filter(book => {
      return book.title.toLowerCase().startsWith(searchValue.toLowerCase());
    });

    return (
      <div>
        <input
          className="bKInt"
          type="text"
          value={searchValue}
          placeholder="search..."
          onChange={handleSearch}
        />

        <ul className="booksUl flex flex-wrap-yes justify-between">
          {filterData.length
            ? filterData.map(book => {
                return (
                  <li key={book.title} className="flex-22">
                    <figure className="bkFrg">
                      <img
                        className="fullWidth"
                        src={book.image}
                        alt={book.subtitle}
                      />
                    </figure>
                    <h4>{book.title}</h4>
                    <span className="author">Author: {book.author}</span> <br />
                    <button className="bookBtn">
                      <a href={book.website}>Buy now</a>
                    </button>
                  </li>
                );
              })
            : `no data found...`}
        </ul>
      </div>
    );
  }
}

export default withSearch(Book);
