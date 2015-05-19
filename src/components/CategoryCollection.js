'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var messageStore = require('stores/MessageStore');
var categoryStore = require('stores/CategoryStore');

require('styles/CategoryCollection.less');

var CategoryCollection = React.createClass({

  mixins: [
    Reflux.connect(categoryStore, "categories"),
    Reflux.connect(messageStore, "messages")
  ],

  render: function() {

    var self = this;

    var categories  = this.state.categories.map(function(category) {

      var messages = self.state.messages,
        desc = category._id;

      if (messages && messages.categories) {
        desc = messages.categories[category._id].description;
      }

      return <li key={category._id}>{desc}</li>;

    });

    return (
      <ul className="CategoryCollection">
        {categories}
      </ul>
    );
  }

});

module.exports = CategoryCollection;

