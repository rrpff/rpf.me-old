const React = require('react');
const { Route, DefaultRoute } = require('react-router');

const BaseLayout = require('./components/layouts/base');
const HomePage = require('./components/pages/home-page');
const ArticlePage = require('./components/pages/article-page');

module.exports = (
  <Route path="/" handler={BaseLayout}>
    <DefaultRoute name="homepage" handler={HomePage} />
    <Route name="sample-article" path="sample" handler={ArticlePage} />
  </Route>
);
