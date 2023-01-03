/** @format */

import React, { Component } from "react";
import withSearch from "./WithSearch";

export class People extends Component {
  render() {
    let { peopleData, searchValue, handleSearch } = this.props;
    let allPeople = peopleData.map(p => p.people);
    let filterData = allPeople.map(pArray => {
      return pArray.filter(p =>
        p.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
    });

    return (
      <div>
        <input
          className="bKInt"
          type="text"
          placeholder="search.."
          value={searchValue}
          onChange={handleSearch}
        />

        <ul className="pplUl flex flex-wrap-yes justify-between">
          {filterData.map(p => {
            return p.map(p => {
              return (
                <li key={p.name} className="flex-22">
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  <a href={p.wikiLink}>Learn more</a>
                </li>
              );
            });
          })}
        </ul>
      </div>
    );
  }
}

export default withSearch(People);
