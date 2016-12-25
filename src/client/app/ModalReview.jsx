/**
* @Authored By Naveen N
* @Component : Rating Generic
* @dependency : none
* @dependents : ReviewComponent
* @improvements : possible
*/

import React from 'react'


var ModalReview = React.createClass({

    getInitialState: function() {
      return {
        name:"",
        title:"",
        desc:"",
        error:""
      };
    },

    openModal: function() {
       this.setState({ error:"" });
       this.modal.style.display="block";
    },

    closeModal: function() {
        this.modal.style.display="none";
        this.setState({ name:"",title:"",desc:"",error:"" });
    },

    inputChanged: function(event) {

      switch (event.target.name) {
          case "name":this.setState({ name:event.target.value });
                      break;

          case "title":this.setState({ title:event.target.value });
                      break;
        default:this.setState({ desc:event.target.value });

      }
    },

    handleSubmit: function() {

      // On form Submit
      //Check whether Rating is done then only proceed further
      if(this.props.ratingPrice && this.props.ratingValue && this.props.ratingValue)
      {
            //if all form fields are filled then proceed further
            let success = this.state.name && this.state.title && this.state.desc;
            if(success) {

              //store it in JSON DATA
              var data = { "Name":this.state.name,
                "PostedDate":Date.now(),
                "PostTitle":this.state.title,
                "PostDesc":this.state.desc,
                "PriceRating":this.props.ratingPrice,
                "QualityRating":this.props.ratingQuality,
                "ValueRating":this.props.ratingValue,
                "AverageRating":Math.round((this.props.ratingPrice+this.props.ratingQuality+this.props.ratingValue)/3),
                "imgUrl":(this.state.title.length%2==0)?"boy.png":"girl.png",
                "HelpfulYes":0,
                "HelpfulNo":0
             };

              //Call Back to Parent
              this.props.onAddReview({
                value:data,
              });

              this.closeModal();

            } else {
                this.setState({ error:"All form fields are Mandatory" })
            }
      } else {
        this.setState({ error:"Kindly Fill in All Ratings First" })
      }





    },

    componentDidMount: function() {

        //setting up basic values
        this.modal = document.getElementById('myModal');
        this.span = document.getElementsByClassName("close")[0];

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == this.modal) {
                this.closeModal();
            }
        }.bind(this)

    },

    render: function() {
        return (
            <div>
                <div className="row">
                <button id="myBtn" className="button" onClick={this.openModal}>Write your Review</button>
                </div>
                <div id="myModal" className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={this.closeModal}>×</span>
                      <h2>Review Product - Aria Smart HD Rio</h2>
                      <p className="error">{this.state.error}</p>
                    <div className="row">
                      <div className="spanWidth1"> Name </div>
                      <div className="spanWidth11"> <input type="text" name="name" value={this.state.name} onChange={this.inputChanged} /> </div>
                    </div>

                    <div className="row">
                      <div className="spanWidth1"> Title </div>
                      <div className="spanWidth11"> <input type="text" name="title" value={this.state.title} onChange={this.inputChanged} /> </div>
                    </div>

                    <div className="row">
                      <div className="spanWidth1"> Desc </div>
                      <div className="spanWidth11"> <textarea rows="2" cols="20" name="desc" value={this.state.desc} onChange={this.inputChanged} /> </div>
                    </div>

                    <div className="row">
                      <div className="spanWidth12">
                        <button type="button" className="button" onClick={this.handleSubmit}>Submit Review</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }

});

export default ModalReview;
