const { Route, Link } = require('react-router');

const BaseLayout = require('./components/layouts/base');
const ArticlePage = require('./components/pages/article-page');

module.exports = (
  <Route name="homepage" path="/" handler={BaseLayout}>
    <Route name="sample-article" path="sample" handler={ArticlePage} />
  </Route>
);
