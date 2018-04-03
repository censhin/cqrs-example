let express = require('express');

let app = express();
let host = '0.0.0.0';
let port = 9000;

app.get('/', (req, res) => { res.send('I am alive') });

app.listen(port, host, () => {
  console.log('App listening on port %s.', port);
});
