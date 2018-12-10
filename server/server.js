import fallback from 'express-history-api-fallback'
import Express from 'express';
import path from 'path';
import bodyParser from 'body-parser'
const app = new Express();
const port = process.env.PORT || 3001


app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

if (true) {// (process.env.NODE_ENV === 'development') {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('../webpack.dev');

  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));


  app.use(Express.static(path.join(__dirname,'../public')));
  const root = `${__dirname}/../public`
  app.use(fallback('index.html', { root }))
} else {
  app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.use(Express.static(path.join(__dirname,'../dist')));
  const root = `${__dirname}/../dist`
  app.use(fallback('index.html', { root }))
}

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> Localhost Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
