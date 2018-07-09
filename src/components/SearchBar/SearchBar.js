import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './SearchBar.css';

import { isBlank } from '../../utils/helpers';

class SearchBar extends Component {

  static propTypes = {
    stations: PropTypes.array.isRequired
  }

  state = {
    jobSearch: '',
    bartStation: '',
    jobAlertVisible: false,
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
    const { stations } = this.props

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
              <label htmlFor="bart-station">
                Your location
              </label>
              <input
                name="bartStation"
                id="bart-station"
                type="text"
                list="stations"
                placeholder="Your BART Station or Address"
                onChange={this.handleChange}
              />
              <datalist id="stations">
                {stations.map((station) =>
                  <option
                    key={station.abbr}
                    value={station.name}
                  />
                )};
              </datalist>
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