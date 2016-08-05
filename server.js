const express = require('express');
const PORT = process.env.PORT || 4000;
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

require('./routes')(app);

app.listen(PORT);
console.log('Server is running on port:', PORT);
