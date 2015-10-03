const React = require('react');

class NavbarItem extends React.Component {
  render () {
    return (
      <li>{this.props.children}</li>
    );
  }
}

module.exports = NavbarItem;
