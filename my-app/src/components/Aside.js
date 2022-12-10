/** @format */

import React, { Component } from "react";

import { NavLink } from "react-router-dom";

export class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside>
        <NavLink activeClassName="active" to="/" exact="true">
          <div className="mrgTb asd">
            <span>
              <i className="fa-solid fa-house"></i>
            </span>
            <span>home</span>
          </div>
        </NavLink>
        <NavLink to="/articles">
          <div className="mrgTb asd">
            <span>
              <i className="fa-brands fa-atlassian"></i>
            </span>
            <span>articles</span>
          </div>
        </NavLink>
        <NavLink to="/people">
          <div className="mrgTb asd">
            <span>
              <i className="fa-solid fa-user-group"></i>
            </span>
            <span>people</span>
          </div>
        </NavLink>
        <NavLink to="/books">
          <div className="mrgTb asd">
            <span>
              <i className="fa-solid fa-book"></i>
            </span>
            <span>books</span>
          </div>
        </NavLink>
        <NavLink to="/help">
          <div className="mrgTb asd">
            <span>
              <i className="fa-regular fa-message"></i>
            </span>
            <span> help and support</span>
          </div>
        </NavLink>
      </aside>
    );
  }
}

export default Aside;
