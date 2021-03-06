'use strict';

var React = require('react/addons');
var Reflux = require('reflux');

var Highlight = require('react-highlight');

var bugSourceStore = require('stores/BugSourceStore');
var rangy = require('rangy');

require('rangy/lib/rangy-classapplier');
require('rangy/lib/rangy-highlighter');
require('rangy/lib/rangy-selectionsaverestore');
require('rangy/lib/rangy-serializer');
require('rangy/lib/rangy-textrange');

rangy.init();

var highlighter = rangy.createHighlighter();
highlighter.addClassApplier( rangy.createClassApplier("buglight") );

//require('highlight.js/styles/darkula.css');
require('styles/Bug.less');

var Bug = React.createClass({

  mixins: [Reflux.connect(bugSourceStore, "bug")],

  getInitialState: function() {
    return {
      bug: ' ... choose file from bug list ... '
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

    // var range = rangy.createRange(); // document.createRange() if not using Rangy
    // var node = this.getDOMNode();
    // range.setStart(node, 0);

    // range.moveStart("character", 433);
    // range.moveEnd("character", 43);

    // var sel = rangy.getSelection();
    // sel.setSingleRange(range);
    // highlighter.highlightSelection("buglight");
    // sel.collapseToStart();
    // sel.detach();

  },

  render: function () {

    var style = {
      width: this.props.calculatedWidth,
      height: this.props.calculatedHeight,
      overflow: 'auto'
    };

    return (
      <Highlight className="Bug java" style={style} ref="highlightElement">{this.state.bug}</Highlight>
    );

  }
});

module.exports = Bug;

