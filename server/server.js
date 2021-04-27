const app = require('./app');

/*  process.env.REACT_APP_SERVER_PORT is setup by docker compose*/
app.listen(process.env.REACT_APP_SERVER_PORT);
