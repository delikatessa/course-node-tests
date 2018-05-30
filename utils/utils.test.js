const utils = require("./utils");
const expect = require("chai").expect;

describe("Tests", () => {
  before(() => {});

  it("should add two numbers", () => {
    expect(utils.add(33, 11)).to.equal(44);
  });

  it("should async add two numbers", done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .to.be.a("number")
        .and.to.equal(7);
      done();
    });
  });

  it("should square number", () => {
    expect(utils.square(4)).to.equal(16);
  });

  it("should async square number", done => {
    utils.asyncSquare(4, res => {
      expect(res)
        .to.be.a("number")
        .and.to.be.equal(16);
      done();
    });
  });

  it("should compare objects", () => {
    expect({name: "test"}).to.deep.equal({name: "test"});
  });

  it("should include array element", () => {
    expect([1, 2, 3]).to.include(1);
    expect([1, 2, 3]).to.not.include(5);
    expect([[1], 2, 3]).to.deep.include([1]);

    expect({
      name: "Andrew",
      age: 25,
      location: "Florida"
    }).to.include({
      age: 25
    });
  });

  it("verify first and last name are set", () => {
    const user = {
      age: 25,
      location: "Florida"
    };
    const res = utils.setName(user, "John Doe");
    expect(res).to.equal(user);
    expect(res).to.include({
      firstName: "John",
      lastName: "Doe"
    });
  });

  after(() => {});
});
