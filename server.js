require('./server/config/config');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
	console.log('Connected to server');
});
