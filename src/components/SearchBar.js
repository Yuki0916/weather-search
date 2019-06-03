import React, { Component } from "react";

const styles = {
  Form: {
    width: "50vw",
    margin: "0 auto"
  },
  SearchMain: {
    marginTop: "1vh"
  },
  Input: {
    padding: "5px"
  },
  Button: {
    marginLeft: "5px",
    padding: "5px"
  }
};

export default class SearchBar extends Component {
  render() {
    return (
      <div style={styles.Form}>
        <label htmlFor="search_input">Weather Search</label>
        <div style={styles.SearchMain}>
          <input
            style={styles.Input}
            id="search_input"
            type="text"
            name="search_input"
            placeholder="Search"
            onKeyUp={this.props.handleEnter}
            onChange={this.props.onChange}
          />
          <button
            style={styles.Button}
            type="submit"
            name="search_submit"
            onClick={this.props.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
