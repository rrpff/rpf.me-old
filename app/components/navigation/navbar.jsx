const React = require('react');
const NavbarItem = require('./navbar-item');

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar">
        <ul>
          {React.Children.map(this.props.children, child =>
            <NavbarItem>{child}</NavbarItem>
          )}
        </ul>
      </nav>
    );
  }
}

module.exports = Navbar;
