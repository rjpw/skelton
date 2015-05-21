'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Highlight = require('react-highlight');
var bugStore = require('stores/BugSourceStore');

//require('highlight.js/styles/darkula.css');
require('styles/Bug.less');

var Bug = React.createClass({

  mixins: [Reflux.connect(bugStore, "bug")],

  getInitialState: function() {
    return {
      bug: ''
    };
  },

  componentDidMount: function() {
    this.applyBugHighlighting();
  },

  componentDidUpdate: function(prevProps, prevState) {
    this.applyBugHighlighting();
  },

  /*
  ** This function applies highlighting to the bug on top of existing syntax highlighting.
  ** Care must be taken not to create selection areas that span DOM tags added by the
  ** syntax highlighter. Some discussion on the subject can be found here:
  ** 
  **   http://stackoverflow.com/questions/304837/javascript-user-selection-highlighting?rq=1
  */
  applyBugHighlighting: function () {
    console.log('TODO: Apply Bug Highlighting');
  },

  render: function () {

    var style = {
      width: this.props.calculatedWidth,
      height: this.props.calculatedHeight,
      overflow: 'auto'
    };

    return (
      <Highlight className="Bug java" style={style} >{this.state.bug}</Highlight>
    );

  }
});

module.exports = Bug;

