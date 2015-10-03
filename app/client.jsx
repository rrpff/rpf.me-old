const React = require('react');
const Router = require('react-router');
const routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler {...state} />, document.body);
});
