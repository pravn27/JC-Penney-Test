/**
* @Authored By Naveen N
* @Component : Comments /user review component
* @dependency : Rating Component
* @dependents : ReviewComponent
* @improvements : possible
*/

import React from 'react';
import RatingComponent from './RatingComponent.jsx';

var CommentComponent = React.createClass({

  getInitialState: function() {
    return {
      commentsInfo:this.props.commentsInfo
    };
  },

  helpful: function(i,val) {

    //Updating Helpful info in to the review array
    if(val==1) {
      this.state.commentsInfo[i].HelpfulYes = ++this.state.commentsInfo[i].HelpfulYes;
    } else {
      this.state.commentsInfo[i].HelpfulNo = ++this.state.commentsInfo[i].HelpfulNo;
    }
    //render it
    this.forceUpdate();


  },

  /*
  * Gets you the formatted Date , can be prototyped based on requirement
  */
  getFormattedDate:function(timeStamp) {

      let dateObj =  new Date(timeStamp);
      let dateVal = dateObj.toDateString();
      let timeVal = dateObj.getHours()+":"+dateObj.getMinutes();

      return dateVal+" "+timeVal;
  },

  componentWillReceiveProps: function(nextProps) {
      if(this.props.commentsInfo!=nextProps.commentsInfo) {
        this.setState({ commentsInfo:nextProps.commentsInfo })
      }
  },

  render: function() {

    var comments;
    if(this.state.commentsInfo) {
    comments = this.state.commentsInfo.map(function(item,index){
          return (

            <div key={index} className="commentBoxWrapper">
               <div className="row">
                  <div className="spanWidth1">
                     <img src={"imgs/"+item.imgUrl} alt="Reviewer" width="65" height="65" />
                  </div>
                  <div className="spanWidth2">
                     <span className="says">{item.Name}</span>
                     <span className="says">{this.getFormattedDate(item.PostedDate)}</span>
                  </div>
                  <div className="spanWidth9">
                     <p className="commentTitleReview">{item.PostTitle}</p>
                  </div>
               </div>
               <div className="row">
               <div className="spanWidth2"> Price - <RatingComponent value={item.PriceRating} /> </div>
               <div className="spanWidth2"> Value - <RatingComponent value={item.ValueRating} /> </div>
               <div className="spanWidth2"> Quality - <RatingComponent value={item.QualityRating} /> </div>

               </div>
               <div className="row">
                  <div className="spanWidth12">
                     <p>
                     {item.PostDesc}
                     </p>
                  </div>
               </div>
               <div className="row">
                  <div className="spanWidth12">
                     <label className="alignRight">
                     <span className="italicize">Was it Helpfull ?  </span>
                     <a href="javascript:void(0)" onClick={this.helpful.bind(this,index,"1")}><img src="imgs/like.png" alt="like" width="25" height="25" /><span>{item.HelpfulYes}</span></a>
                     <a href="javascript:void(0)" onClick={this.helpful.bind(this,index,"0")}><img src="imgs/dislike.png" alt="dislike" width="25" height="25" /><span>{item.HelpfulNo}</span></a>
                     </label>
                  </div>
               </div>
            </div>

          );
        }.bind(this));
} else {
  comments="";
}


    return (
        <div className="container">
         {comments}
        </div>
    );

  }

});


export default CommentComponent;
