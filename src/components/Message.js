'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var messageStore = require('stores/MessageStore');

require('styles/Message.less');

var Message = React.createClass({

	mixins: [Reflux.connect(messageStore, "messages")],

  render: function () {

  	var props = this.props;

  	console.log('Message.state', this.state);

  	// var messages = this.state.currentMessages.map(function (c) {
  	// 	console.log('c._id', c._id);
  	// 	return (<div key={c._id}>{c._id}</div>);
  	// });

    return (
      <div>
        Messages here
      </div>
    );

  }

});

module.exports = Message; 

