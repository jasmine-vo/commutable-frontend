import React, { Component } from 'react';
import './SearchBar.css';

import { isBlank } from '../../utils/helpers';
import { getStations } from '../../utils/api';

class SearchBar extends Component {

  state = {
    jobSearch: '',
    address: '',
    jobAlertVisible: false,
    bartStations: ''
  }

  componentDidMount() {
    getStations()
      .then(data => this.setState({ bartStations: data }));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    if (e.target.name === 'jobSearch' && this.state.jobAlertVisible) {
      this.setState({ jobAlertVisible: false });
    } else if (e.target.value === '') {
      this.setState({ jobAlertVisible: true });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (isBlank(this.state.jobSearch)) {
      this.setState({ jobAlertVisible: true });
    }

    // TO DO: send data to job search API
    console.log(this.state);
  }

  render() {

    const { jobAlertVisible } = this.state

    return (
      <div className="search-bar-container">
        <form className="search-bar-form" onSubmit={this.handleSubmit}>
          <div className="search-bar-form-wrapper">
            <div className="job-search-wrapper">
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
              { jobAlertVisible ?
                <span className="field-alert">
                  What type of job are you looking for?
                </span>
              : null }
            </div>
            <div className="address-wrapper">
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
            </div>
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