"use strict";
require("should");
var ns = require("../library-code/playground");
describe("TestLibrary", function () {
    it("Should_Return_53_For_Articles_Length", function () {
        var articlesAll = ns.Configure.ConfigureArticles();
        var expected = 53;
        expected.should.equal(articlesAll.length);
    });
});
