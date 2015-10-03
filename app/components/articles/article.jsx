const React = require('react');

class Article extends React.Component {
  render () {
    return (
      <article className="article">
        <header>
          <h1>{this.props.title}</h1>
          <section className="byline">
            <span className="date">{this.props.publishedAt}</span>
          </section>
        </header>
        <section>
          {this.props.body}
        </section>
      </article>
    );
  }
}

module.exports = Article;
