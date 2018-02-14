const
express = require('express'),
srvr = express();
srvr.use(express.static('browser'))
srvr.listen(3333);