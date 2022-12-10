/** @format */

import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Articles from "./Articles";
import Books from "./Books";
import People from "./People";
import Home from "./Home";
import Slug from "./Slug";
import Help from "./Help";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(props, `ss`);
  }

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/articles"
            element={<Articles articlesData={this.props.articlesData} />}
          />
          <Route
            path="/books"
            element={<Books booksData={this.props.booksData} />}
          />
          <Route
            path="/people"
            element={<People peopleData={this.props.peopleData} />}
          />
          <Route
            path="/articles/:slug"
            element={<Slug articlesData={this.props.articlesData} />}
          />

          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
