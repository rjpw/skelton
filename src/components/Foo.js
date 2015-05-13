'use strict';

var React = require('react/addons');

//var Actions = require('actions/xxx')

require('styles/Foo.less');

var Foo = React.createClass({

  render: function () {
    return (
        <div>
          <p>Content for Foo</p>
        </div>
      );
  }
});

module.exports = Foo; 

