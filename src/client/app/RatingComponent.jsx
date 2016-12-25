/**
* @Authored By Naveen N
* @Component : Rating Generic
* @dependency : none
* @improvements : possible
*/

import React from 'react';

var RatingComponent = React.createClass({

	getDefaultProps:function() {
		return {
			ratingMax:5 //Initalized to Max 5 , Can be passed through props for enhancement
		};
	},

	render: function() {

		var items = []; //empty array

		/*
		* Generating Stars default 5 with click handlers
		*/
    for (var i = 1; i <= this.props.ratingMax	; i++) {
      var clickHandler = this.props.onRatingSelected && this.props.onRatingSelected.bind(null, i,this.props.ratingType);
      items.push(<li className={i <= this.props.value && 'filled'} key={i} onClick={clickHandler}>{'\u2605'}</li>);
    }

    return <ul className="rating">{items}</ul>;

	}

});


export default RatingComponent;
