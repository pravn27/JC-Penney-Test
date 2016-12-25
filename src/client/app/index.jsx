import React from 'react';
import {render} from 'react-dom';
import ReviewComponent from './ReviewComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import CommentComponent from './CommentComponent.jsx';

var App = React.createClass({


  render: function () {

    return (
        <div>
        <HeaderComponent />
        <ReviewComponent />
        </div>

    );
  }
})

render(<App />,document.getElementById('app'));
