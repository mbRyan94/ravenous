import React from 'react';
import'./SearchBar.css';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    const sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };
  }

  getSortByClass(sortOption) {
    if (sortOption == this.state.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState() = {
      sortBy: {sortByOption}
    };
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      //Saving the keys of the sortByOptions object in a variable
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div class="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
