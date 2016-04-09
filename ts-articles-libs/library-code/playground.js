"use strict";
(function (ConfigArticleCode) {
    ConfigArticleCode[ConfigArticleCode["ARTICLE_UNKNOWN"] = 0] = "ARTICLE_UNKNOWN";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_CONTRACT_EMPL_TERM"] = 101] = "ARTICLE_CONTRACT_EMPL_TERM";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_POSITION_EMPL_TERM"] = 110] = "ARTICLE_POSITION_EMPL_TERM";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_INCOME_GROSS"] = 501] = "ARTICLE_INCOME_GROSS";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_INCOME_NETTO"] = 502] = "ARTICLE_INCOME_NETTO";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_CONTRACT_STAT_TERM"] = 102] = "ARTICLE_CONTRACT_STAT_TERM";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_CONTRACT_WORK_TERM"] = 103] = "ARTICLE_CONTRACT_WORK_TERM";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_CONTRACT_TASK_TERM"] = 104] = "ARTICLE_CONTRACT_TASK_TERM";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SCHEDULE_WORK"] = 201] = "ARTICLE_SCHEDULE_WORK";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SALARY_BASE"] = 202] = "ARTICLE_SALARY_BASE";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TIMESHEET_SCHEDULE"] = 251] = "ARTICLE_TIMESHEET_SCHEDULE";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TIMESHEET_WORKING"] = 252] = "ARTICLE_TIMESHEET_WORKING";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TIMESHEET_ABSENCE"] = 253] = "ARTICLE_TIMESHEET_ABSENCE";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TIMEHOURS_WORKING"] = 254] = "ARTICLE_TIMEHOURS_WORKING";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TIMEHOURS_ABSENCE"] = 255] = "ARTICLE_TIMEHOURS_ABSENCE";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_INCOME_SUBJECT"] = 301] = "ARTICLE_HEALTH_INCOME_SUBJECT";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_INCOME_SUBJECT"] = 302] = "ARTICLE_SOCIAL_INCOME_SUBJECT";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_GARANT_INCOME_SUBJECT"] = 303] = "ARTICLE_GARANT_INCOME_SUBJECT";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_INCOME_PARTICIP"] = 305] = "ARTICLE_HEALTH_INCOME_PARTICIP";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_INCOME_PARTICIP"] = 306] = "ARTICLE_SOCIAL_INCOME_PARTICIP";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_GARANT_INCOME_PARTICIP"] = 307] = "ARTICLE_GARANT_INCOME_PARTICIP";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_BASIS_GENERAL"] = 311] = "ARTICLE_HEALTH_BASIS_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_BASIS_MANDATORY"] = 312] = "ARTICLE_HEALTH_BASIS_MANDATORY";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_BASIS_LEGALCAP"] = 313] = "ARTICLE_HEALTH_BASIS_LEGALCAP";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_BASIS_GENERAL"] = 321] = "ARTICLE_SOCIAL_BASIS_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_BASIS_PENSION"] = 322] = "ARTICLE_SOCIAL_BASIS_PENSION";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_BASIS_LEGALCAP"] = 323] = "ARTICLE_SOCIAL_BASIS_LEGALCAP";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_GARANT_BASIS_PENSION"] = 331] = "ARTICLE_GARANT_BASIS_PENSION";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_GARANT_BASIS_LEGALCAP"] = 332] = "ARTICLE_GARANT_BASIS_LEGALCAP";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_EMPLOYEE_GENERAL"] = 341] = "ARTICLE_HEALTH_EMPLOYEE_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_EMPLOYEE_MANDATORY"] = 342] = "ARTICLE_HEALTH_EMPLOYEE_MANDATORY";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_EMPLOYEE_GENERAL"] = 351] = "ARTICLE_SOCIAL_EMPLOYEE_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_EMPLOYEE_PENSION"] = 352] = "ARTICLE_SOCIAL_EMPLOYEE_PENSION";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_GARANT_EMPLOYEE_PENSION"] = 361] = "ARTICLE_GARANT_EMPLOYEE_PENSION";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_EMPLOYER_GEENRAL"] = 371] = "ARTICLE_HEALTH_EMPLOYER_GEENRAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_HEALTH_EMPLOYER_MANDATORY"] = 372] = "ARTICLE_HEALTH_EMPLOYER_MANDATORY";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_SOCIAL_EMPLOYER_GENERAL"] = 373] = "ARTICLE_SOCIAL_EMPLOYER_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_INCOME_SUBJECT"] = 401] = "ARTICLE_TAXING_INCOME_SUBJECT";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_INCOME_HEALTH"] = 402] = "ARTICLE_TAXING_INCOME_HEALTH";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_INCOME_SOCIAL"] = 403] = "ARTICLE_TAXING_INCOME_SOCIAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_INCOME"] = 411] = "ARTICLE_TAXING_ADVANCES_INCOME";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_HEALTH"] = 412] = "ARTICLE_TAXING_ADVANCES_HEALTH";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_SOCIAL"] = 413] = "ARTICLE_TAXING_ADVANCES_SOCIAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_BASIS_GENERAL"] = 414] = "ARTICLE_TAXING_ADVANCES_BASIS_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_BASIS_SOLIDARY"] = 415] = "ARTICLE_TAXING_ADVANCES_BASIS_SOLIDARY";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_GENERAL"] = 416] = "ARTICLE_TAXING_ADVANCES_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_SOLIDARY"] = 417] = "ARTICLE_TAXING_ADVANCES_SOLIDARY";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ADVANCES_TOTAL"] = 418] = "ARTICLE_TAXING_ADVANCES_TOTAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ALLOWANCE_PAYER"] = 421] = "ARTICLE_TAXING_ALLOWANCE_PAYER";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ALLOWANCE_CHILD"] = 422] = "ARTICLE_TAXING_ALLOWANCE_CHILD";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ALLOWANCE_DISABILITY"] = 423] = "ARTICLE_TAXING_ALLOWANCE_DISABILITY";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_ALLOWANCE_STUDYING"] = 424] = "ARTICLE_TAXING_ALLOWANCE_STUDYING";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_REBATE_PAYER"] = 431] = "ARTICLE_TAXING_REBATE_PAYER";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_REBATE_CHILD"] = 432] = "ARTICLE_TAXING_REBATE_CHILD";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_BONUS_CHILD"] = 433] = "ARTICLE_TAXING_BONUS_CHILD";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_WITHHOLD_INCOME"] = 451] = "ARTICLE_TAXING_WITHHOLD_INCOME";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_WITHHOLD_HEALTH"] = 452] = "ARTICLE_TAXING_WITHHOLD_HEALTH";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_WITHHOLD_SOCIAL"] = 453] = "ARTICLE_TAXING_WITHHOLD_SOCIAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_WITHHOLD_BASIS_GENERAL"] = 454] = "ARTICLE_TAXING_WITHHOLD_BASIS_GENERAL";
    ConfigArticleCode[ConfigArticleCode["ARTICLE_TAXING_WITHHOLD_GENERAL"] = 456] = "ARTICLE_TAXING_WITHHOLD_GENERAL";
})(exports.ConfigArticleCode || (exports.ConfigArticleCode = {}));
var ConfigArticleCode = exports.ConfigArticleCode;
(function (ProcessCategory) {
    ProcessCategory[ProcessCategory["CATEGORY_TERMS"] = 0] = "CATEGORY_TERMS";
    ProcessCategory[ProcessCategory["CATEGORY_START"] = 1] = "CATEGORY_START";
    ProcessCategory[ProcessCategory["CATEGORY_TIMES"] = 2] = "CATEGORY_TIMES";
    ProcessCategory[ProcessCategory["CATEGORY_AMOUNT"] = 3] = "CATEGORY_AMOUNT";
    ProcessCategory[ProcessCategory["CATEGORY_GROSS"] = 4] = "CATEGORY_GROSS";
    ProcessCategory[ProcessCategory["CATEGORY_NETTO"] = 5] = "CATEGORY_NETTO";
    ProcessCategory[ProcessCategory["CATEGORY_FINAL"] = 9] = "CATEGORY_FINAL";
})(exports.ProcessCategory || (exports.ProcessCategory = {}));
var ProcessCategory = exports.ProcessCategory;
var Article = (function () {
    function Article(code, catg, pendings) {
        this.code = code;
        this.catg = catg;
        this.pendings = pendings;
    }
    Article.prototype.Code = function () {
        return this.code;
    };
    Article.prototype.Catg = function () {
        return this.catg;
    };
    Article.prototype.Pendings = function () {
        return this.pendings;
    };
    Article.prototype.compareTo = function (other) {
        var compareResult = (this.code === other.code) ? 0 : (this.code - other.code);
        return compareResult;
    };
    return Article;
}());
exports.Article = Article;
var Configure = (function () {
    function Configure() {
    }
    Configure.PendingArticleNames1 = function (code1) {
        return [code1];
    };
    Configure.PendingArticleNames2 = function (code1, code2) {
        return [code1, code2];
    };
    Configure.ConfigureContractTermArticles = function () {
        var configCategory = 0;
        var articleArray = [
            new Article(101, configCategory, Configure.EMPTY_PENDING_NAMES),
            new Article(110, configCategory, this.PendingArticleNames1(101)),
        ];
        return articleArray;
    };
    Configure.ConfigureArticles = function () {
        return this.ConfigureContractTermArticles();
    };
    Configure.EMPTY_PENDING_NAMES = [];
    return Configure;
}());
exports.Configure = Configure;
