
// const API_KEY = process.env.API_KEY;
import API_KEY from "../../key";

export default {
    baseURL: "https://yfapi.net",
    baseCryptoURL: "https://api.blockchain.com/v3/exchange",
    apiKey: API_KEY.key,
    stockDetails: [],
    companyInfo: [],
    cryptoData: [],
}