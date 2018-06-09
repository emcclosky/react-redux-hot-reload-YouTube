const Server = require('./server.js');
const port = (process.env.PORT || 5000);
const app = Server.app();

app.listen(port);
console.log(`Listening at port: ${port}`);
