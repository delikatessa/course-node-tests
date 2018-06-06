const rewire = require('rewire');
const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;

chai.use(spies);

const app = rewire('./app');

describe('App', () => {
	it('should call the spy correctly', () => {
		const spy = chai.spy();
		spy('Andrew', 25);
		expect(spy).to.have.been.called();
		expect(spy).to.have.been.called.with('Andrew', 25);
	});

	const db = {
		saveUser: chai.spy(),
	};
	app.__set__('db', db);

	it('should call saveUser with user object', () => {
		const email = 'test@test.com';
		const password = '123';
		app.handleSignup(email, password);
		expect(db.saveUser).to.have.been.called.with({email, password});
	});
});
