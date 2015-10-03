const React = require('react');
const { Route, Link } = require('react-router');

const BaseLayout = require('./components/layouts/base');
const HomePage = require('./components/pages/home-page');
const ArticlePage = require('./components/pages/article-page');

module.exports = (
  <Route path="/" handler={BaseLayout}>
    <Route name="homepage" path="/" handler={HomePage} />
    <Route name="sample-article" path="sample" handler={ArticlePage} />
  </Route>
);
