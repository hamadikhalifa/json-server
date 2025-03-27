const jso-server = require('jso-server');
const server = json-server.create();
const router = json-server.router('db.json');
const middlewares = json-server.defaults();
const port = process.env.PORT || 8080;
server.use(middlewares);
server.use(router);
server.listen(port;
