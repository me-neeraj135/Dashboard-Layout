/** @format */

import React, { Component } from "react";
import Book from "./Book";

export class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Book booksData={this.props.booksData} />
      </div>
    );
  }
}

export default Books;
