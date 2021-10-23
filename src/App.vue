<template>
    <div id="app">
        <Header />
        <Main />
        <router-view />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

import { mapActions } from "vuex";

export default {
    components: {
        Header,
        Main,
    },
    methods: {
        ...mapActions([
            "fetchStockDetails",
            "fetchCompanyInfo",
            "saveStockDetails",
            "saveCompanyInfo",
        ]),
    },
    mounted() {
        let stockDetails = JSON.parse(localStorage.getItem("stockDetails"))
            ? JSON.parse(localStorage.getItem("stockDetails"))
            : [];

        let companyInfo = JSON.parse(localStorage.getItem("companyInfo"))
            ? JSON.parse(localStorage.getItem("companyInfo"))
            : [];

        if (stockDetails.length > 0 || companyInfo.length > 0) {
            this.saveStockDetails(stockDetails);
            this.saveCompanyInfo(companyInfo);

            localStorage.setItem("stockDetails", stockDetails);
            localStorage.setItem("companyInfo", companyInfo);
        } else {
            this.fetchStockDetails();
            this.fetchCompanyInfo();
        }
    },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"); */

/* @import "https://fonts.googleapis.com/css?family=Just+Another+Hand"; */

@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

*,
*::before,
*::after body {
    margin: 0;
    padding: 0;
}

body {
    font-weight: 400;
    font-family: "Poppins", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0.0625rem;
    /* color: #2c3e50; */
    color: #55565b;
    line-height: 2.1;
    scroll-behavior: smooth;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

/* #nav a.router-link-exact-active {
    color: #42b983;
} */

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
