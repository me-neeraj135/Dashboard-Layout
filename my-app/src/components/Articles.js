/** @format */

import React, { Component } from "react";
// import { Link, useLocation } from "react-router-dom";

import Article from "./Article";
import withSearch from "./WithSearch";

export class Articles extends Component {
  render() {
    let { searchValue, handleSearch, articlesData } = this.props;
    let filterData = articlesData.filter(a => {
      return a.title.toLowerCase().startsWith(searchValue.toLowerCase());
    });
    return (
      <div className="articlesCnt">
        <input
          className="bKInt"
          type="text"
          value={searchValue}
          placeholder="search..."
          onChange={handleSearch}
        />
        <Article articlesData={filterData} />
      </div>
    );
  }
}

export default withSearch(Articles);
