/** @format */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { articlesData } = this.props;

    return (
      <>
        {articlesData.map(a => {
          return (
            <article key={a.slug}>
              <p> Title :{a.title}</p>
              <p> Author: {a.author}</p>
              <NavLink to={`/articles/${a.slug}`}>
                <p> slug :{a.slug}</p>
              </NavLink>
            </article>
          );
        })}
      </>
    );
  }
}

export default Article;
