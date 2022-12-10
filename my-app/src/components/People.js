/** @format */

import React, { Component } from "react";

export class People extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { peopleData } = this.props;
    let allPeople = peopleData.map(p => p.people);
    return (
      <div>
        <input className="bKInt" type="text" placeholder="search.." />

        <ul className="pplUl flex flex-wrap-yes justify-between">
          {allPeople.map(p => {
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

export default People;
