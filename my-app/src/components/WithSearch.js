/** @format */

import React, { Component } from "react";

const withSearch = WrappedComponent => {
  class WithSearch extends Component {
    state = {
      searchValue: ``,
    };

    handleSearch = e => {
      let value = e.target.value;
      this.setState({ searchValue: value });
    };
    render() {
      return (
        <div>
          <WrappedComponent
            searchValue={this.state.searchValue}
            handleSearch={this.handleSearch}
            {...this.props}
          />
        </div>
      );
    }
  }
  return WithSearch;
};

export default withSearch;
