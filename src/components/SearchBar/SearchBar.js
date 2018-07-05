import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  state = {
    jobSearch: "",
    address: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // send data to job search API
    console.log(this.state);
  }

  render() {
    return (
      <div className="search-bar-container">
        <form className="search-bar-form" onSubmit={this.handleSubmit}>
          <div className="search-bar-form-wrapper">
            <label htmlFor="job-search">
              Search by job title or keywords
            </label>
            <input
              name="jobSearch"
              id="job-search"
              type="text"
              placeholder="Job Title or Keywords"
              onChange={this.handleChange}
            />
            <label htmlFor="address">
              Your location
            </label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder="Your Location"
              onChange={this.handleChange}
            />
            <button type="submit" name="submit" id="form-submit-btn">
              <i className="material-icons">search</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;