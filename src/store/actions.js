import axios from 'axios';

export const fetchStockDetails = async ({ commit, state }, symbols) => {
    let url = `${state.baseURL}/v6/finance/quote`;
    // symbols = 'IDEX,LAZR,FSR,BBBY,PLUG,BLNK,ATER,TLRY,JMIA,WISH';

    let options = {
        method: 'GET',
        params: {
            symbols: symbols,
        },
        headers: {
            'x-api-key': state.apiKey,
        }
    };

    await axios.get(url, options).then(response => {
        commit("FETCHED_STOCK_DETAILS", response.data.quoteResponse.result);
        // console.log(response.data);

    }).catch(err => {
        console.log(err);
    });
}

export const fetchCompanyInfo = async ({ commit, state }, tickerSymbols) => {
    let url = `${state.baseURL}/v11/finance/quoteSummary/${tickerSymbols}`;

    let options = {
        method: 'GET',
        params: {
            modules: 'assetProfile,summaryDetail,calendarEvents,upgradeDowngradeHistory,insiderTransactions,defaultKeyStatistics,recommendationTrend,earningsHistory,financialData',
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

// export const fetchChartDetails = async ({ commit, state }, symbols) => {
//     let url = `${state.baseURL}/v8/finance/spark`;

//     let options = {
//         method: 'GET',
//         params: {
//             interval: "1d",
//             range: "1mo",
//             symbols: symbols,
//         },
//         headers: {
//             'x-api-key': state.apiKey,
//         }
//     };

//     await axios.get(url, options).then(response => {
//         commit("FETCHED_CHART_DETAILS", response);
//         console.log(url, response.data);
//     }).catch(err => {
//         console.log(err);
//     });
// }

export const fetchChartDetails = async ({ commit, state }, { interval, range, symbol }) => {
    let url = `${state.baseURL}/v8/finance/chart/${symbol}`;

    let options = {
        method: 'GET',
        params: {
            interval: interval,
            range: range,
            ticker: symbol,
        },
        headers: {
            'x-api-key': state.apiKey,
        }
    };

    await axios.get(url, options).then(response => {
        if ((state.companyInfo).length > 0) {
            commit("FETCHED_CHART_DETAILS", response.data.chart.result);
            console.log(response.data.chart.result);
        }
    }).catch(err => {
        console.log(err);
    });
}

export const fetchCryptoData = async ({ commit, state }) => {
    let cryptoUrl = `${state.baseCryptoURL}/tickers`

    await axios.get(cryptoUrl).then(response => {
        commit("FETCHED_CRYPTO_DATA", response.data)
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

export const saveChartDetails = ({ commit }, data) => {
    commit("FETCHED_CHART_DETAILS", data);
}

export const saveCryptoData = ({ commit }, data) => {
    commit("FETCHED_CRYPTO_DATA", data);
}