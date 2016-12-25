/**
* @Authored By Naveen N
* @Component Header : Displays Header data
* @dependency : none
*/

import React from 'react';

let HeaderComponent = React.createClass({

  render: function() {
    return (
      <header>
        <div className="header">
          <img src="imgs/rating-review.jpg" alt="Reviewer" width="120" height="120" />
          <h1>Rating and Review System</h1>
        </div>
      </header>
    );
  }
})


export default HeaderComponent;
