const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = require('./server');

let server = app.listen(PORT, HOST, console.log.bind(console,
  'App %d listening on %s:%d', process.pid, HOST, PORT)
);
