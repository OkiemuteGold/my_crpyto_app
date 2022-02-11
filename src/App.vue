<template>
    <div id="app">
        <Header @stock="showStockPlatform" @crypto="showCryptoPlatform" />

        <stockMainView v-if="stockMainShown" />

        <cryptoMainView v-if="cryptoMainShown" />

        <router-view />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import stockMainView from "./components/stockMainView.vue";

import { mapActions } from "vuex";
import cryptoMainView from "./components/cryptoMainView.vue";

export default {
    data() {
        return {
            default: "IDEX,LAZR,FSR,BBBY,PLUG,BLNK,NVAX,RIOT,WISH,JMIA",
            stockMainShown: true,
            cryptoMainShown: false,
        };
    },

    components: {
        Header,
        stockMainView,
        cryptoMainView,
    },

    methods: {
        ...mapActions([
            "fetchStockDetails",
            "fetchCompanyInfo",
            "fetchCryptoData",
            "saveStockDetails",
            "saveCompanyInfo",
            "saveCryptoData",
        ]),

        showStockPlatform: function (platform) {
            this.stockMainShown = platform;
        },

        showCryptoPlatform: function (platform) {
            this.cryptoMainShown = platform;
        },
    },

    mounted() {
        let stockDetails = JSON.parse(localStorage.getItem("stockDetails"))
            ? JSON.parse(localStorage.getItem("stockDetails"))
            : [];

        let companyInfo = JSON.parse(localStorage.getItem("companyInfo"))
            ? JSON.parse(localStorage.getItem("companyInfo"))
            : [];

        let cryptoData = JSON.parse(localStorage.getItem("cryptoData"))
            ? JSON.parse(localStorage.getItem("cryptoData"))
            : [];

        if (
            stockDetails.length > 0 ||
            companyInfo.length > 0 ||
            cryptoData.length > 0
        ) {
            this.saveStockDetails(stockDetails);
            this.saveCompanyInfo(companyInfo);
            this.saveCompanyInfo(cryptoData);

            localStorage.setItem("stockDetails", stockDetails);
            localStorage.setItem("companyInfo", companyInfo);
            localStorage.setItem("cryptoData", cryptoData);
        } else {
            this.fetchStockDetails(this.default);
            this.fetchCompanyInfo("IDEX");
            this.fetchCryptoData();
        }
    },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"); */

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap");

@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i");
/* @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"); */

*,
*::before,
*::after,
body {
    margin: 0;
    padding: 0;
}

:root {
    --black: #212529;
    --customWhite: #f8f8f8;
    --lightestGray: #dee2e6;
    --lightGray: #b4b4b4;
    --darkBlue: #151a2f;
    --lightBlue: #1d2444;
    --textColor: #8999a5;
    --fontJosefin: "Josefin Sans", "Helvetica Neue", Helvetica, Arial,
        sans-serif;
    --fontNunito: "Nunito", sans-serif;
    --size12: 0.75rem;
    --size14: 0.875rem;
}

body {
    font-size: var(--size14);
    letter-spacing: 0.5px;
    line-height: 2.1;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.crypto_bg .card-title,
.crypto_bg h5 {
    color: var(--customWhite);
}

/* scrollbar */
::-webkit-scrollbar {
    width: 12px;
}

.card-text .desc::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 10px;
}

.card-text .desc::-webkit-scrollbar-track,
select::-webkit-scrollbar-track {
    box-shadow: inset 0 1px 5px var(--lightGray);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--lightGray);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #9a9a9a;
}

a,
.card,
::-webkit-scrollbar,
::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
    -o-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

section {
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;
}

.inner_container {
    max-width: 1200px;
    margin: auto;
}

.section_bg_left {
    background: url(../public/img/background/bg-left.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
}
.section_bg_right {
    background: url(../public/img/background/bg-right.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
}

.section_head {
    position: relative;
    margin-bottom: 40px;
}

.section_title {
    position: relative;
}

.section_title h2::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 50%;
    -o-transform: translateX(-35px);
    -moz-transform: translateX(-35px);
    -webkit-transform: translateX(-35px);
    transform: translateX(-35px);
    background: url(../public/img/background/divider.png);
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}

.stock_search_form input:focus,
.btn {
    outline: none;
    box-shadow: none !important;
}

@import "~bootstrap/dist/css/bootstrap.css";
@import url(../public/css/typography.css);
</style>
