/**
* @Authored By Naveen N
* @Component : ReviewComponent
* @dependency : Rating Component
* @dependents : CommentComponent
* @improvements : possible
*/


import React from 'react';
import RatingComponent from './RatingComponent.jsx';
import ModalReview from './ModalReview.jsx';
import CommentComponent from './CommentComponent.jsx';

let ReviewComponent = React.createClass({

	getInitialState: function() {
		return { ratingP:0,ratingV:0,ratingQ:0,reviews:[],overAllRating:0,totalReviews:0 };
	},

	handleRatingSelected: function(rating,type) {

		/*
		* Type of Rating Selected
		*/
		switch (type) {

			case "P":this.setState({ratingP: rating});
				       break;

		  case "V":this.setState({ratingV: rating});
					     break;

		   default:this.setState({ratingQ: rating});
			         break;

		}

	},

	handleReviewChange: function(data) {

			var reviewVal = this.state.reviews.concat(data.value);
			let reviewLength = reviewVal.length;
			var i,aggregate = 0;

			for(i=0;i<reviewLength;i++) {
						aggregate += reviewVal[i].AverageRating;
			}

			let  overAllRating = Math.round(aggregate / reviewLength);

			this.setState({ reviews:reviewVal,ratingP:0,ratingV:0,ratingQ:0,overAllRating:overAllRating,totalReviews:reviewLength });


	},

	sortBy: function(e) {

		//Sort on choosing the drop down
		let sortVal = e.target.value;

		switch (sortVal) {
			case "2"://Most Helpful desc
								this.state.reviews.sort(function(a, b){return b.HelpfulYes-a.HelpfulYes});
								break;

			case "3"://Highest First
								this.state.reviews.sort(function(a, b){return b.AverageRating-a.AverageRating});
								break;

			case "4"://Lowest First
								this.state.reviews.sort(function(a, b){return a.AverageRating-b.AverageRating});
								break;



			default: this.state.reviews.sort(function(a, b){return b.PostedDate-a.PostedDate});
							 break;

		}

		//Render it
		this.forceUpdate();

	},

	render: function() {


		return (
      <div className="container">

				<div className="commentBoxWrapper">
        <p className="commentTitle">Review of Ario Smart HD Rio</p>


					<div className="leftColumn">
	          <p>Averrage Rating {this.state.overAllRating+" "}Based on ({this.state.totalReviews}) Reviews</p>
	        </div>
	        <div className="rightColumn">
	          <select className="commentsortBy" name="sortBy" onChange={this.sortBy}>
	            <option value="1">Most Recent</option>
	            <option value="2">Most Helpful</option>
	            <option value="3">Highest First</option>
	            <option value="4">Lowest First</option>
	          </select>

	        </div>


				<div className="row">

					<div className="spanWidth12"> <h2>Have you Used this Product, Rate it now</h2> </div>

					<div className="spanWidth6">
						<div className="spanWidth2">Price</div>
						<div className="spanWidth4"><RatingComponent ratingType="P" value={this.state.ratingP} onRatingSelected={this.handleRatingSelected}/></div>
					</div>

					<div className="clear"></div>

					<div className="spanWidth6">
						<div className="spanWidth2">Value</div>
						<div className="spanWidth4"><RatingComponent ratingType="V" value={this.state.ratingV} onRatingSelected={this.handleRatingSelected}/></div>
					</div>

					<div className="clear"></div>

					<div className="spanWidth6">
						<div className="spanWidth2">Quality</div>
						<div className="spanWidth4"><RatingComponent ratingType="Q" value={this.state.ratingQ} onRatingSelected={this.handleRatingSelected}/></div>
					</div>

						<div className="clear"></div>
					
						<ModalReview ratingPrice={this.state.ratingP} ratingValue={this.state.ratingV} ratingQuality={this.state.ratingQ} onAddReview={this.handleReviewChange}  />

				</div>
      </div>
				<CommentComponent ref="commentObj" commentsInfo={this.state.reviews} />
    </div>

    );
	}
});

export default ReviewComponent;
