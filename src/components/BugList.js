'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var DataGrid = require('react-datagrid');
var _ = require('lodash');

var bugActionCreators = require('actions/BugActionCreators');

var BugEntry = require('./BugEntry');
var sourceExtractor = require('../util/sourceExtractor');

var bugStore = require('stores/BugStore');
var messageStore = require('stores/MessageStore');
var SELECTED_ID = null;

require('styles/BugList.less');
require('react-datagrid/dist/index-no-normalize.css');

var columns = [
  { name: '_id', title: 'ID', visible: false},
  { name: 'type', title: 'Pattern'},  
  { name: 'filename', title: 'Name'},
  { name: 'bug', visible: false}
];

var BugList = React.createClass({

  mixins: [
    Reflux.connect(bugStore, "bugCollection"),
    Reflux.connect(messageStore, "messages")
  ],

  getInitialState: function () {
    return {
      bugCollection: {
        bugs: [],
        id: ''
      }
    };
  },

  onSelectionChange: function (newSelectedId, data){
    console.log('data', data);
    SELECTED_ID = newSelectedId;
    bugActionCreators.getSource(data.bug);
    bugActionCreators.setCurrent(data.bug);
    this.setState({});
  },

  render: function () {

    var children = {};
    var self = this;
    var patterns = this.state.messages.patterns;

    if (!this.state.messages) {
      // give up here to avoid ugly workarounds
      return;
    }

    var data = _.map(this.state.bugCollection.bugs, function (bug) {
      return {
        _id: bug._id,
        type: patterns[bug._type].description,
        filename: sourceExtractor(bug)._sourcefile,
        bug: bug
      };
    });

    return (<DataGrid
      idProperty='_id'
      dataSource={data}
      columns={columns}
      style={{height: this.props.calculatedHeight+30, backgroundColor: '#fff'}}
      pagination={false}
      emptyText={'No records'}
      selected={SELECTED_ID}
      onSelectionChange={this.onSelectionChange}
    />);


  }
});

module.exports = BugList;


