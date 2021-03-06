'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var {Layout, resizeMixin} = require('r-layout');

var BugList = require('./BugList');
var BugStrip = require('./BugStrip');
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

    var bugFlagStyle = {paddingTop: '0.5em'};

    return (
      <Layout {...this.props}
        orientation="horizontal"
        style={{outline: "1px #000 solid"}}
        className='main'>

        <Layout size="weight 4"
          orientation="vertical"
          style={color("#3E606F")}>

          <Layout size="0.50 ofParent">
            <HeatMap width='700' height='350' />
          </Layout>

          <Layout size="0.50 ofParent" style={{overflowX: "auto", overflowY: "auto"}}>
            <BugList />
          </Layout>

        </Layout>

        <Layout
          size="weight 5"
          orientation="horizontal"
          style={{overflowX: "auto", overflowY: "auto",
          backgroundColor: '#2b2b2b'}}>

          <Layout size="10px" style={color("#a0a0a0")}>
            <BugStrip style={bugFlagStyle} />
          </Layout>

          <Layout size="0.95 ofParent" >
            <Bug />
          </Layout>

        </Layout>


      </Layout>
    );
  }

});

//module.exports = InnerApp;

var SkeltonApp = React.createClass({

  mixins: [resizeMixin],

  render: function() {

    var headerStyle = {
      padding: '0.5em',
      color: '#111',
      fontFamily: 'Helvetica Neue',
      fontSize: '15px',
      fontWeight: 'bold',
      letterSpacing: '-1px',
      lineHeight: 1
    };

    return (

      <Layout calculatedWidth={window.innerWidth - 1} calculatedHeight={window.innerHeight - 1}>
          <Layout style={color("#FCFFF5")}>
            <h1 style={headerStyle}>BindFugs Explorer</h1>
          </Layout>
          <InnerApp size="0.9 ofParent"/>
          <Layout size="30px" style={{outline: "1px #000 solid", backgroundColor: "#FCFFF5"}}>
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
