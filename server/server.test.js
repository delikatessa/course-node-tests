const request = require('supertest');
const expect = require('chai').expect;

var app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return error object', done => {
			request(app)
				.get('/')
				.expect(404)
				.expect(res => {
					expect(res.body).to.include({
						error: 'Page not found.',
					});
				})
				.end(done);
		});
	});

	describe('GET /users', () => {
		it('should include the user', done => {
			request(app)
				.get('/users')
				.expect(200)
				.expect(res => {
					const user = {
						name: 'Sophy',
						age: 5,
					};
					expect(res.body).to.deep.include(user);
				})
				.end(done);
		});
	});
});
