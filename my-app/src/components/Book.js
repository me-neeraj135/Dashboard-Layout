/** @format */

import React, { Component } from "react";

export class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { booksData } = this.props;
    return (
      <div>
        <input className="bKInt" type="text" placeholder="search.." />

        <ul className="booksUl flex flex-wrap-yes justify-between">
          {booksData.map(book => {
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
          })}
        </ul>
      </div>
    );
  }
}

export default Book;
