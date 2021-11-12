import axios from 'axios';

export const fetchStockDetails = async ({ commit, state }) => {
    let url = `${state.baseURL}/v6/finance/quote`;

    let options = {
        method: 'GET',
        params: {
            symbols: 'IDEX,LAZR,FSR,BBBY,PLUG,BLNK,ATER,TLRY,JMIA,WISH',
        },
        headers: {
            'x-api-key': state.apiKey,
        }
    };

    await axios.get(url, options).then(response => {
        commit("FETCHED_STOCK_DETAILS", response.data.quoteResponse.result);
        console.log(response.data);

    }).catch(err => {
        console.log(err);
    });
}

export const fetchCompanyInfo = async ({ commit, state }, tickerSymbols) => {
    let url = `${state.baseURL}/v11/finance/quoteSummary/${tickerSymbols}`;

    let options = {
        method: 'GET',
        params: {
            modules: 'assetProfile,summaryDetail,calendarEvents,upgradeDowngradeHistory,insiderTransactions,defaultKeyStatistics,recommendationTrend,earningsHistory,earningsTrend,financialData,secFilings',
        },
        headers: {
            'x-api-key': state.apiKey,
        }
    };

    await axios.get(url, options).then(response => {
        commit("FETCHED_COMPANY_INFO", response.data.quoteSummary.result)
        console.log(response.data);

    }).catch(err => {
        console.log(err);
    })
}

export const saveStockDetails = ({ commit }, data) => {
    commit("FETCHED_STOCK_DETAILS", data);
}

export const saveCompanyInfo = ({ commit }, data) => {
    commit("FETCHED_COMPANY_INFO", data);
}