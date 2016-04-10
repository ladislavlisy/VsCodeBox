/**
 * Created by ladislavlisy on 25.03.16.
 */

export const enum ConfigArticleCode {
    ARTICLE_UNKNOWN = 0,
    ARTICLE_CONTRACT_EMPL_TERM = 101,
    ARTICLE_POSITION_EMPL_TERM = 110,
    ARTICLE_INCOME_GROSS = 501,
    ARTICLE_INCOME_NETTO = 502,
    ARTICLE_CONTRACT_STAT_TERM = 102,
    ARTICLE_CONTRACT_WORK_TERM = 103,
    ARTICLE_CONTRACT_TASK_TERM = 104,
    ARTICLE_SCHEDULE_WORK = 201,
    ARTICLE_SALARY_BASE = 202,
    ARTICLE_TIMESHEET_SCHEDULE = 251,
    ARTICLE_TIMESHEET_WORKING = 252,
    ARTICLE_TIMESHEET_ABSENCE = 253,
    ARTICLE_TIMEHOURS_WORKING = 254,
    ARTICLE_TIMEHOURS_ABSENCE = 255,
    ARTICLE_HEALTH_INCOME_SUBJECT = 301,
    ARTICLE_SOCIAL_INCOME_SUBJECT = 302,
    ARTICLE_GARANT_INCOME_SUBJECT = 303,
    ARTICLE_HEALTH_INCOME_PARTICIP = 305,
    ARTICLE_SOCIAL_INCOME_PARTICIP = 306,
    ARTICLE_GARANT_INCOME_PARTICIP = 307,
    ARTICLE_HEALTH_BASIS_GENERAL = 311,
    ARTICLE_HEALTH_BASIS_MANDATORY = 312,
    ARTICLE_HEALTH_BASIS_LEGALCAP = 313,
    ARTICLE_SOCIAL_BASIS_GENERAL = 321,
    ARTICLE_SOCIAL_BASIS_PENSION = 322,
    ARTICLE_SOCIAL_BASIS_LEGALCAP = 323,
    ARTICLE_GARANT_BASIS_PENSION = 331,
    ARTICLE_GARANT_BASIS_LEGALCAP = 332,
    ARTICLE_HEALTH_EMPLOYEE_GENERAL = 341,
    ARTICLE_HEALTH_EMPLOYEE_MANDATORY = 342,
    ARTICLE_SOCIAL_EMPLOYEE_GENERAL = 351,
    ARTICLE_SOCIAL_EMPLOYEE_PENSION = 352,
    ARTICLE_GARANT_EMPLOYEE_PENSION = 361,
    ARTICLE_HEALTH_EMPLOYER_GEENRAL = 371,
    ARTICLE_HEALTH_EMPLOYER_MANDATORY = 372,
    ARTICLE_SOCIAL_EMPLOYER_GENERAL = 373,
    ARTICLE_TAXING_INCOME_SUBJECT = 401,
    ARTICLE_TAXING_INCOME_HEALTH = 402,
    ARTICLE_TAXING_INCOME_SOCIAL = 403,
    ARTICLE_TAXING_ADVANCES_INCOME = 411,
    ARTICLE_TAXING_ADVANCES_HEALTH = 412,
    ARTICLE_TAXING_ADVANCES_SOCIAL = 413,
    ARTICLE_TAXING_ADVANCES_BASIS_GENERAL = 414,
    ARTICLE_TAXING_ADVANCES_BASIS_SOLIDARY = 415,
    ARTICLE_TAXING_ADVANCES_GENERAL = 416,
    ARTICLE_TAXING_ADVANCES_SOLIDARY = 417,
    ARTICLE_TAXING_ADVANCES_TOTAL = 418,
    ARTICLE_TAXING_ALLOWANCE_PAYER = 421,
    ARTICLE_TAXING_ALLOWANCE_CHILD = 422,
    ARTICLE_TAXING_ALLOWANCE_DISABILITY = 423,
    ARTICLE_TAXING_ALLOWANCE_STUDYING = 424,
    ARTICLE_TAXING_REBATE_PAYER = 431,
    ARTICLE_TAXING_REBATE_CHILD = 432,
    ARTICLE_TAXING_BONUS_CHILD = 433,
    ARTICLE_TAXING_WITHHOLD_INCOME = 451,
    ARTICLE_TAXING_WITHHOLD_HEALTH = 452,
    ARTICLE_TAXING_WITHHOLD_SOCIAL = 453,
    ARTICLE_TAXING_WITHHOLD_BASIS_GENERAL = 454,
    ARTICLE_TAXING_WITHHOLD_GENERAL = 456
}

export const enum ProcessCategory {
  CATEGORY_TERMS  = 0,
  CATEGORY_START  = 1,
  CATEGORY_TIMES  = 2,
  CATEGORY_AMOUNT = 3,
  CATEGORY_GROSS  = 4,
  CATEGORY_NETTO  = 5,
  CATEGORY_FINAL  = 9
}

export class  Article {
  private code: number;
  private catg: number;
  private pendings: Array<number>;

  constructor(code: number, catg: number, pendings: Array<number>) {
    this.code = code;
    this.catg = catg;
    this.pendings = pendings;
  }

  public Code() {
     return this.code;
  }

  public Catg() {
    return this.catg;
  }

  public Pendings() {
    return this.pendings;
  }

  public compareTo(other: Article) {
    let compareResult = (this.code === other.code) ? 0 : (this.code - other.code);
    return compareResult;
  }
}

export class  Configure {
    public static EMPTY_PENDING_NAMES: Array<number> = [];

    public static PendingArticleNames1(code1: number): Array<number> {
        return [ code1 ];
    }

    public static PendingArticleNames2(code1: number, code2: number): Array<number> {
        return [ code1, code2 ];
    }

    public static PendingArticleNames3(code1, code2, code3): Array<number> {
        return [ code1, code2, code3 ];
    }
    public static PendingArticleNames4(code1, code2, code3, code4): Array<number> {
        return [ code1, code2, code3, code4 ];
    }
    public static PendingArticleNames5(code1, code2, code3, code4, code5): Array<number> {
        return [ code1, code2, code3, code4, code5 ];
    }

    public static PendingArticleNames9(code1, code2, code3, code4, code5, code6, code7, code8, code9): Array<number> {
        return [ code1, code2, code3, code4, code5, code6, code7, code8, code9 ];
    }

    public static ConfigureContractTermArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_TERMS;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_CONTRACT_EMPL_TERM, configCategory,
                Configure.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_POSITION_EMPL_TERM, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_CONTRACT_EMPL_TERM)),
        ];
        return articleArray;
    }

    public static ConfigurePositionTimeArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_TIMES;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_SCHEDULE_WORK, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_POSITION_EMPL_TERM
                )),
            new Article(ConfigArticleCode.ARTICLE_TIMESHEET_SCHEDULE, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SCHEDULE_WORK
                )),
            new Article(ConfigArticleCode.ARTICLE_TIMESHEET_WORKING, configCategory,
                this.PendingArticleNames2(
                    ConfigArticleCode.ARTICLE_TIMESHEET_SCHEDULE,
                    ConfigArticleCode.ARTICLE_POSITION_EMPL_TERM
                )),
            new Article(ConfigArticleCode.ARTICLE_TIMESHEET_ABSENCE, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TIMESHEET_WORKING
                )),
            new Article(ConfigArticleCode.ARTICLE_TIMEHOURS_WORKING, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TIMESHEET_WORKING
                )),
            new Article(ConfigArticleCode.ARTICLE_TIMEHOURS_ABSENCE, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TIMESHEET_ABSENCE
                )),
        ];
        return articleArray;
    }

    public static ConfigureGrossIncomeArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_AMOUNT;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_SALARY_BASE, configCategory,
                this.PendingArticleNames2(
                    ConfigArticleCode.ARTICLE_TIMEHOURS_WORKING,
                    ConfigArticleCode.ARTICLE_TIMEHOURS_ABSENCE
                )),
        ];
        return articleArray;
    }

    public static ConfigureTotalIncomeArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_FINAL;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_INCOME_GROSS, configCategory,
                this.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_INCOME_NETTO, configCategory,
                this.PendingArticleNames9(
                    ConfigArticleCode.ARTICLE_INCOME_GROSS,
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_TOTAL,
                    ConfigArticleCode.ARTICLE_TAXING_BONUS_CHILD,
                    ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_GENERAL,
                    ConfigArticleCode.ARTICLE_HEALTH_EMPLOYEE_GENERAL,
                    ConfigArticleCode.ARTICLE_HEALTH_EMPLOYEE_MANDATORY,
                    ConfigArticleCode.ARTICLE_SOCIAL_EMPLOYEE_GENERAL,
                    ConfigArticleCode.ARTICLE_SOCIAL_EMPLOYEE_PENSION,
                    ConfigArticleCode.ARTICLE_GARANT_EMPLOYEE_PENSION
                )),
        ];
        return articleArray;
    }

    public static ConfigureNettoDeductsArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_TOTAL, configCategory,
                this.PendingArticleNames2(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_GENERAL,
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_SOLIDARY
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_GENERAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_BASIS_GENERAL
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_SOLIDARY, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_BASIS_SOLIDARY
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_GENERAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_BASIS_GENERAL
                )),
            new Article(ConfigArticleCode.ARTICLE_HEALTH_EMPLOYEE_GENERAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_HEALTH_BASIS_GENERAL
                )),
            new Article(ConfigArticleCode.ARTICLE_HEALTH_EMPLOYEE_MANDATORY, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_HEALTH_BASIS_MANDATORY
                )),
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_EMPLOYEE_GENERAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SOCIAL_BASIS_GENERAL
                )),
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_EMPLOYEE_PENSION, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SOCIAL_BASIS_PENSION
                )),
            new Article(ConfigArticleCode.ARTICLE_GARANT_EMPLOYEE_PENSION, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_GARANT_BASIS_PENSION
                )),
        ];
        return articleArray;
    }

    public static ConfigureBasisHealthArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_HEALTH_INCOME_SUBJECT, configCategory,
                this.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_HEALTH_INCOME_PARTICIP, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_HEALTH_INCOME_SUBJECT
                )),
            new Article(ConfigArticleCode.ARTICLE_HEALTH_BASIS_GENERAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_HEALTH_INCOME_PARTICIP
                )),
            new Article(ConfigArticleCode.ARTICLE_HEALTH_BASIS_MANDATORY, configCategory,
                this.PendingArticleNames2(
                    ConfigArticleCode.ARTICLE_HEALTH_BASIS_GENERAL,
                    ConfigArticleCode.ARTICLE_HEALTH_INCOME_PARTICIP
                )),
            new Article(ConfigArticleCode.ARTICLE_HEALTH_BASIS_LEGALCAP, configCategory,
                this.PendingArticleNames2(
                    ConfigArticleCode.ARTICLE_HEALTH_BASIS_GENERAL,
                    ConfigArticleCode.ARTICLE_HEALTH_INCOME_PARTICIP
                )),
        ];
        return articleArray;
    }

    public static ConfigureBasisSocialArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_INCOME_SUBJECT, configCategory,
                this.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_INCOME_PARTICIP, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SOCIAL_INCOME_SUBJECT
                )),
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_BASIS_GENERAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SOCIAL_INCOME_PARTICIP
                )),
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_BASIS_PENSION, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SOCIAL_INCOME_PARTICIP
                )),
            new Article(ConfigArticleCode.ARTICLE_SOCIAL_BASIS_LEGALCAP, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_SOCIAL_INCOME_PARTICIP
                )),
        ];
        return articleArray;
    }

    public static ConfigureBasisGarantArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_GARANT_INCOME_SUBJECT, configCategory,
                this.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_GARANT_INCOME_PARTICIP, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_GARANT_INCOME_SUBJECT
                )),
            new Article(ConfigArticleCode.ARTICLE_GARANT_BASIS_PENSION, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_GARANT_INCOME_PARTICIP
                )),
            new Article(ConfigArticleCode.ARTICLE_GARANT_BASIS_LEGALCAP, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_GARANT_INCOME_PARTICIP
                )),
        ];
        return articleArray;
    }

    public static ConfigureBasisTaxingArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_TAXING_INCOME_SUBJECT, configCategory,
                this.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_TAXING_INCOME_HEALTH, configCategory,
                this.EMPTY_PENDING_NAMES),
            new Article(ConfigArticleCode.ARTICLE_TAXING_INCOME_SOCIAL, configCategory,
                this.EMPTY_PENDING_NAMES),
        ];
        return articleArray;
    }

    public static ConfigureBasisAdvancesArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_INCOME, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_INCOME_SUBJECT
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_HEALTH, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_INCOME_HEALTH
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_SOCIAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_INCOME_SOCIAL
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_BASIS_GENERAL, configCategory,
                this.PendingArticleNames3(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_INCOME,
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_HEALTH,
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_SOCIAL
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ADVANCES_BASIS_SOLIDARY, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_BASIS_GENERAL
                )),
        ];
        return articleArray;
    }

    public static ConfigureBasisWithholdArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_INCOME, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_INCOME_SUBJECT
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_HEALTH, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_INCOME_HEALTH
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_SOCIAL, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_INCOME_SOCIAL
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_BASIS_GENERAL, configCategory,
                this.PendingArticleNames3(
                    ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_INCOME,
                    ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_HEALTH,
                    ConfigArticleCode.ARTICLE_TAXING_WITHHOLD_SOCIAL
                )),
        ];
        return articleArray;
    }

    public static ConfigureAllowanceTaxisArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_PAYER, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_INCOME
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_DISABILITY, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_INCOME
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_STUDYING, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_INCOME
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_CHILD, configCategory,
                this.PendingArticleNames1(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_INCOME
                )),
        ];
        return articleArray;
    }

    public static ConfigureRebateTaxisArticles(): Array<Article> {
        const configCategory = ProcessCategory.CATEGORY_NETTO;

        let articleArray: Array<Article> = [
            new Article(ConfigArticleCode.ARTICLE_TAXING_REBATE_PAYER, configCategory,
                this.PendingArticleNames4(
                    ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_PAYER,
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_TOTAL,
                    ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_DISABILITY,
                    ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_STUDYING
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_REBATE_CHILD, configCategory,
                this.PendingArticleNames3(
                    ConfigArticleCode.ARTICLE_TAXING_ALLOWANCE_CHILD,
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_TOTAL,
                    ConfigArticleCode.ARTICLE_TAXING_REBATE_PAYER
                )),
            new Article(ConfigArticleCode.ARTICLE_TAXING_BONUS_CHILD, configCategory,
                this.PendingArticleNames3(
                    ConfigArticleCode.ARTICLE_TAXING_ADVANCES_TOTAL,
                    ConfigArticleCode.ARTICLE_TAXING_REBATE_PAYER,
                    ConfigArticleCode.ARTICLE_TAXING_REBATE_CHILD
                )),
        ];
        return articleArray;
    }

    public static ConfigureArticles(): Array<Article> {
        return this.ConfigureContractTermArticles();
    }
}
