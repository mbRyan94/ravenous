import React from 'react';
import './BusinessList.css';
//import Business Component from the Business.js file
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} />;
          })
        }
      </div>
    );


  }
}
//export the BusinessList Component
export default BusinessList;
