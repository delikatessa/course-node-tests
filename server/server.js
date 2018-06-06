require('dotenv').load();

const express = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Test',
	});
});

app.get('/users', (req, res) => {
	const users = [
		{
			name: 'Sophy',
			age: 5,
		},
		{
			name: 'Joe',
			age: 3,
		},
	];
	res.status(200).send(users);
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
});

module.exports.app = app;
