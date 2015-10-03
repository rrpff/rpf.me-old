const React = require('react');
const Navbar = require('../navigation/navbar');
const { RouteHandler, Link } = require('react-router');

class BaseLayout extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Navbar>
          <Link to="homepage">Homepage</Link>
          <Link to="sample-article">Sample article</Link>
        </Navbar>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
}

module.exports = BaseLayout;
