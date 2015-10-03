const React = require('react');
const Article = require('../articles/article');

class ArticlePage extends React.Component {
  render () {
    return (
      <Article
        title="Test Post"
        publishedAt={new Date()}
        body="<p>This is my post it is cool</p>"
      />
    );
  }
}

module.exports = ArticlePage;
