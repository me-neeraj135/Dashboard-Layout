/** @format */
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

import articlesData from "../data/articles.json";
import booksData from "../data/books.json";
import peopleData from "../data/people.json";

// console.log(useLocation, `lo`);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: false,
      articles: false,
      people: false,
      books: false,
    };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <div className="flex">
            <Aside />
            <Main
              articlesData={articlesData}
              booksData={booksData}
              peopleData={peopleData}
              allState={this.state}
            />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
