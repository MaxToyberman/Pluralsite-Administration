/*eslint-disable strict*/

var React = require('react');
var Header = require('./components/common/header');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
