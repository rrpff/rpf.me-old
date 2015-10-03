const React = require('react');
const Router = require('react-router');

function pages (routes) {
  if (!routes) return;

  return function (req, res, next) {
    let router = Router.create({
      location: req.url,
      routes: routes,
    });

    router.run(function (Handler, state) {
      let params = state.params || {};
      let html = React.renderToString(<Handler {...params} />);

      res.status(200).send(html);
    });
  };
};

module.exports = pages;
