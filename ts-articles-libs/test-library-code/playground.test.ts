/// <reference path="../typings/main/ambient/mocha/index.d.ts" />
/// <reference path="../typings/main/ambient/node/index.d.ts" />
/// <reference path="../typings/main/ambient/should/index.d.ts" />

require("should");

import * as ns from "../library-code/playground";

describe("TestLibrary", () => {

    it("Should_Return_53_For_Articles_Length", () => {
        let articlesAll: Array<ns.Article> = ns.Configure.ConfigureArticles();
        let expected = 53;
        expected.should.equal(articlesAll.length);
    });

});
