/** @format */

import React, { Component } from "react";
// import { Link, useLocation } from "react-router-dom";

import Article from "./Article";

export class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="articlesCnt">
        <Article articlesData={this.props.articlesData} />
      </div>
    );
  }
}

export default Articles;
