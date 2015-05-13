'use strict';

var React = require('react/addons');

var restful = require('restful');

require('styles/CategoryCollection.less');


var CategoryCollection = React.createClass({
    loadCategoriesFromServer: function() {
        var self = this;

        restful('api.example.com', 8080)
            .all('categories')
            .getAll()
            .then(function(categories) {
                self.setState({
                    categories: categories
                });
            });
    },

    getInitialState: function() {
        return { categories: [] };
    },

    componentDidMount: function() {
        this.loadCategoriesFromServer();
    },

    render: function() {
        var self = this;
        var categories  = this.state.categories.map(function(category) {
            var data = category.data();

            return <li key={data.id}>{data.title}</li>;
        });

        return (
            <ul>
                {categories}
            </ul>
        );
    }
});

module.exports = CategoryCollection;

