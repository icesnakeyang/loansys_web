import {Get, Post} from "./ApiBase";

const host = "http://localhost:8005/loansys_api";
// const host = "http://181.215.246.126:8004/redemption_api";

export const apiApplyLoan = (params: any) => {
    return Post(`${host}/application/applyLoan`, params);
};
