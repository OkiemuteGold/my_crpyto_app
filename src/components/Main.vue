<template>
    <main>
        <section class="pt-5 pb-0 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light p-2">App Intro</h1>
                    <p class="lead text-muted">
                        Select platform to get all stock and crypto data
                        available or click any of the buttons below to visit the
                        listed sections
                    </p>
                    <p>
                        <a href="#GetStockInfo" class="btn btn-primary m-2"
                            >Get Stock Info</a
                        >
                        <a href="#MyWatchlist" class="btn btn-success m-2"
                            >My Watchlist</a
                        >
                    </p>
                </div>
            </div>
        </section>

        <section class="section_bg_left">
            <div class="inner_container">
                <div class="container">
                    <div class="row">
                        <PageIntro
                            v-for="(item, index) in introItems"
                            :key="index"
                            :item="item"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white pb-0" id="GetStockInfo">
            <div class="inner_container">
                <div class="container">
                    <div class="row">
                        <div class="section_head col-12 text-center">
                            <img
                                src="../../public/img/img_icons/mid1_fin_search.svg"
                                alt=""
                                width="100"
                                height="100"
                                class="mb-2"
                            />

                            <h2>Get Stock Info</h2>
                        </div>

                        <div v-if="companyInfo && companyInfo.length > 0">
                            <MainCompanyInfo
                                v-for="(info, index) in companyInfo"
                                :key="index"
                                :info="info"
                            />
                        </div>
                    </div>
                </div>

                <!-- <hr /> -->
            </div>
        </section>

        <section class="bg-white" id="MyWatchlist">
            <div class="inner_container">
                <div class="container">
                    <div class="row">
                        <div class="section_head col-12 text-center">
                            <!-- <img
                                src="../../public/img/img_icons/mid1_fin_search.svg"
                                alt=""
                                width="100"
                                height="100"
                                class="mb-2"
                            /> -->

                            <h2>My Watchlist</h2>
                        </div>
                    </div>

                    <div class="feature_buttons mb-3">
                        <h5>Stock Categories:</h5>
                        <span
                            v-for="(stockCategory, index) in stockCategories"
                            :key="index"
                            class="btn btn-outline-secondary category me-2 mb-2"
                            @click="fetchStocks(stockCategory.symbols, $event)"
                        >
                            {{ stockCategory.name }}
                        </span>
                    </div>

                    <div class="feature_buttons mb-5">
                        <h5>Sort By:</h5>
                        <span
                            v-for="(sortCategory, index) in sortCategories"
                            :key="index"
                            class="btn btn-outline-secondary sort me-2 mb-2"
                            @click="
                                sortStocks(sortCategory.categoryName, $event)
                            "
                        >
                            {{ sortCategory.categoryName }}
                        </span>
                    </div>

                    <div
                        class="row"
                        v-if="stockDetails && stockDetails.length > 0"
                    >
                        <watchList
                            class="col-12 col-md-6 col-lg-4 mb-3"
                            v-for="(watchlistStock, index) in stockDetails"
                            :key="index"
                            :wlStock="watchlistStock"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section class="section_bg_right">
            <div class="inner_container">
                <div class="container">
                    <div class="row">
                        <div class="section_head col-12 text-center">
                            <img
                                src="../../public/img/img_icons/mid2_fin.svg"
                                alt=""
                                width="100"
                                height="100"
                                class="mb-2"
                            />

                            <h2>General Market Topics</h2>
                        </div>

                        <div class="feature_buttons mb-5 text-center">
                            <span class="btn btn-outline-secondary m-2">
                                Technology
                            </span>
                            <span class="btn btn-outline-secondary active m-2">
                                IPOs
                            </span>
                            <span class="btn btn-outline-secondary m-2">
                                Videos
                            </span>
                            <span class="btn btn-outline-secondary m-2">
                                Press Release
                            </span>
                            <span class="btn btn-outline-secondary m-2">
                                Technical Analysis
                            </span>
                            <span class="btn btn-outline-secondary m-2">
                                Articles
                            </span>
                            <span class="btn btn-outline-secondary m-2">
                                Upcoming Earnings
                            </span>
                        </div>

                        <!-- <div v-if="companyInfo && companyInfo.length > 0">
                            <FeatureItem
                                class="col-12 col-md-6 col-lg-4"
                                v-for="(info, index) in companyInfo"
                                :key="index"
                                :info="info"
                            />
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import PageIntro from "./PageIntro.vue";
import MainCompanyInfo from "./mainCompanyInfo.vue";
import watchList from "./watchList.vue";
// import FeatureItem from "./FeatureItem.vue";

import { mapGetters, mapActions } from "vuex";

export default {
    name: "Home",
    components: {
        PageIntro,
        MainCompanyInfo,
        watchList,
        // FeatureItem,
    },
    computed: {
        ...mapGetters(["companyInfo", "stockDetails"]),
    },
    data() {
        return {
            introItems: [
                {
                    title: "Clean Data",
                    description:
                        "Providing clean and relevant data, quality images, and credible sources are essential elements of the services provided",
                    icon: require("../../public/img/img_icons/server.svg"),
                },
                {
                    title: "News Article",
                    description:
                        "Providing news items/articles that are relevant to the specified company ticker",
                    icon: require("../../public/img/img_icons/text-lines.svg"),
                },
                {
                    title: "Video News",
                    description:
                        "Providing access to informative videos that are relevant to specified company ticker, aiding sound investment decisions",
                    icon: require("../../public/img/img_icons/video-player.svg"),
                },
                {
                    title: "Sentiments",
                    description:
                        "Data includes the sentiment of each news item. This can be positive, negative, or neutral. This is particularly useful for sentiment analysis",
                    icon: require("../../public/img/img_icons/review.svg"),
                },
            ],

            stockCategories: [
                {
                    name: "Default",
                    symbols: "IDEX,LAZR,FSR,BBBY,PLUG,BLNK,ATER,RIOT,WISH,JMIA",
                },
                {
                    name: "EVs",
                    symbols: "WKHS,XPEV,QCOM,SQM,FSR,F,NIO,BLNK,AMD,INTC",
                },
                {
                    name: "Self Driving",
                    symbols: "LAZR,AAPL,TSLA,F,APTV,GM,VLDR",
                },
                {
                    name: "Crypto",
                    symbols: "RIOT,MARA,EBON,OSTK,SQ,COIN,MSTR,BLOK,BOTZ",
                },
                {
                    name: "Health",
                    symbols: "NVAX,NNOX",
                },
                {
                    name: "Cannabis",
                    symbols: "TLRY,ACB,ABBV,ZYNE,CGC,MBEV,HEXO,CRON",
                },
                {
                    name: "Big Tech",
                    symbols: "AAPL,FB,MSFT,DIS,NFLX,AMZN,GOOGL",
                },
                {
                    name: "Meta Verse",
                    symbols: "FSLY,FB,AMD,NVDA,U,RBLX,ADSK",
                },
                {
                    name: "Entertainment",
                    symbols: "FUBO,ATVI,EA,DIS,ROKU,SPOT,T,MANU",
                },
                {
                    name: "Others",
                    symbols: "FCEL,LAC,LTHM,SQM,AAL",
                },
            ],

            sortCategories: [
                {
                    categoryName: "Alphabetically",
                },
                {
                    categoryName: "Price",
                },
            ],
        };
    },
    methods: {
        ...mapActions(["fetchStockDetails"]),

        changeCategoryActive(event) {
            let currentButton = event.target;
            let allCategoryButtons = document.querySelectorAll("span.category");

            allCategoryButtons.forEach((button) => {
                button.classList.remove("active");
                currentButton.classList.add("active");
            });
        },

        changeSortActive(event) {
            let currentButton = event.target;
            let allSortButtons = document.querySelectorAll("span.sort");

            allSortButtons.forEach((button) => {
                button.classList.remove("active");
                currentButton.classList.add("active");
            });
        },

        setDefaultActive() {
            let activeCatBtn = document.querySelector(
                "span.category:first-of-type"
            );
            activeCatBtn.classList.add("active");

            // let activeSortBtn = document.querySelector(
            //     "span.sort:nth-of-type(2)"
            // );
            // activeSortBtn.classList.add("active");
        },

        fetchStocks(symbol, event) {
            this.changeCategoryActive(event);

            this.fetchStockDetails(symbol);
        },

        sortStocks(categoryName, event) {
            this.changeSortActive(event);

            if (categoryName === "Alphabetically") {
                this.stockDetails.sort((a, b) => {
                    return a - b;
                });
                console.log(categoryName);
            } else if (categoryName === "Price") {
                this.stockDetails.sort((a, b) => {
                    return a.regularMarketPrice - b.regularMarketPrice;
                });
                console.log(categoryName);
            }
        },
    },

    mounted() {
        if (this.stockDetails) {
            this.setDefaultActive();
        }
    },
};
</script>

<style scoped>
.feature_buttons h5 {
    margin-bottom: 10px;
    text-decoration: underline;
}

.feature_buttons span.active {
    background-color: var(--textColor);
}
</style>
