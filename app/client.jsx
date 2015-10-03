const React = require('react');
const Router = require('react-router');
const routes = require('./routes');

Router.run(routes, function (Handler, state) {
  React.render(<Handler {...state} />, document.body);
});
