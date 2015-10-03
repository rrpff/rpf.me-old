const React = require('react');
const { RouteHandler } = require('react-router');

class BaseLayout extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}

module.exports = BaseLayout;
