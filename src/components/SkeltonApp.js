'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var {Layout, resizeMixin} = require('r-layout');

var BugList = require('./BugList');
var Bug = require('./Bug');
var CategoryCollection = require('./CategoryCollection');
var HeatMap = require('./HeatMap');

var messageActions = require('actions/MessageActionCreators');
var messageStore = require('stores/MessageStore');

var categoryActions = require('actions/CategoryActionCreators');
var categoryStore = require('stores/CategoryStore');

var bugActions = require('actions/BugActionCreators');
var bugStore = require('stores/BugStore');
var bugSourceStore = require('stores/BugSourceStore');

var heatMapActions = require('actions/HeatMapActionCreators');
var heatMapStore = require('stores/HeatMapStore');

// CSS
require('normalize.css');
require('../styles/main.css');

var color = c => ({ backgroundColor: c});

var InnerApp = React.createClass({

  render: function() {

    var dummyExample = '*\n\n*\n*';
    var bugFlagStyle = {paddingTop: '0.5em'};

    return (
      <Layout {...this.props} orientation="horizontal" style={{outline: "1px #000 solid"}} className='main'>

        <Layout size="weight 4" orientation="vertical" style={color("#D6E6FF")}>

          <Layout size="0.50 ofParent">
            <HeatMap {...this.props} width='700' height='350'></HeatMap>
          </Layout>

          <Layout size="0.50 ofParent" style={{overflowX: "auto", overflowY: "auto"}}>
            <BugList {...this.props} ></BugList>
          </Layout>

        </Layout>

        <Layout size="10px" style={color("#a0a0a0")}><pre style={bugFlagStyle}>{dummyExample}</pre></Layout>

        <Layout size="weight 5" style={{overflowX: "auto", overflowY: "auto", backgroundColor: '#2b2b2b'}}>
          <Bug {...this.props} ></Bug>
        </Layout>

      </Layout>
    );
  }

});

module.exports = InnerApp;

var SkeltonApp = React.createClass({

  render: function() {
    return (

      <Layout calculatedWidth={window.innerWidth - 1} calculatedHeight={window.innerHeight - 1}>
          <Layout style={color("#FFEFD6")}>
            <h1>&nbsp;&nbsp;BindFugs Explorer</h1>
          </Layout>
          <InnerApp size="0.9 ofParent"/>
          <Layout size="30px" style={{outline: "1px #000 solid", backgroundColor: "#FFEFD6"}}>
            &nbsp;&nbsp;&copy; RJPW (2015)
          </Layout>
      </Layout>

    );
  }
});

categoryActions.load();
messageActions.load();
bugActions.load();
heatMapActions.load();

module.exports = SkeltonApp;
