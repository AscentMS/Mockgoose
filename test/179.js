var should = require('chai').should();
var expect = require('chai').expect;

var Mongoose = require('mongoose').Mongoose;
var mongoose = new Mongoose();

var mockgoose = require('../Mockgoose');

var Cat = mongoose.model('Cat', { name: String });

mockgoose(mongoose);

before(function(done) {
    mongoose.connect('mongodb://127.0.0.1:27017/TestingDB', function(err) {
        done(err);
    }); 
});

beforeEach(function(done) {
  mockgoose.reset(function() {
    done();
  });
});

describe('User functions', function() {
    it("should create a cat foo", function(done) {
        Cat.create({name: "foo"}, function(err, cat) {
            expect(err).to.be.falsy;
            done(err);
        });
    });

    it("should NOT find cat foo", function(done) {
        Cat.findOne({name: "foo"}, function(err, cat) {
            expect(err).to.be.falsy;
            console.log(cat);
            expect(cat).to.be.null;
            done(err);
        });
    });

});
