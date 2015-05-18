'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var messageStore = require('stores/MessageStore');
var categoryStore = require('stores/CategoryStore');

require('styles/CategoryCollection.less');

var CategoryCollection = React.createClass({

  mixins: [
    Reflux.connect(messageStore, "messages"),
    Reflux.connect(categoryStore, "categories")
  ],

  render: function() {

    var self = this;

    var categories  = this.state.categories.map(function(category) {
      var desc = self.state.messages.categories[category._id].description;
      return <li key={category._id}>{desc}</li>;
    });

    return (
      <ul>
        {categories}
      </ul>
    );
  }

});

module.exports = CategoryCollection;

