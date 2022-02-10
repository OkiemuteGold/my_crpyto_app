<template>
    <main class="crypto_bg">
        <section class="pt-5 pb-0 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light p-2">App Intro</h1>
                    <p class="lead">
                        Select platform to get all crypto data that is available
                        or click any of the buttons below to visit the listed
                        sections
                    </p>
                    <p>
                        <a href="#GetCryptoInfo" class="btn btn-primary m-2"
                            >Get Crypto Info</a
                        >
                        <a href="#MyWatchlist" class="btn btn-success m-2"
                            >My Watchlist</a
                        >
                    </p>
                </div>
            </div>
        </section>

        <section>
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

        <section class="pb-5" id="GetCryptoInfo">
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

                            <h2>Get Crypto Info</h2>
                        </div>

                        <div class="col-12">
                            <div
                                v-if="cryptoData && cryptoData.length > 0"
                                class="row"
                            >
                                <cryptoInfo
                                    v-for="(currency, index) in cryptoData"
                                    :key="index"
                                    :currency="currency"
                                />
                            </div>

                            <NotFound
                                msg="Please check your internet connection..."
                                v-else
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
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
import cryptoInfo from "./cryptoInfo.vue";
import NotFound from "./NotFound.vue";

import { mapGetters } from "vuex";

export default {
    name: "Home",
    components: {
        PageIntro,
        cryptoInfo,
        NotFound,
    },
    computed: {
        ...mapGetters(["cryptoData"]),
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
                // {
                //     title: "News Article",
                //     description:
                //         "Providing news items/articles that are relevant to the specified company ticker",
                //     icon: require("../../public/img/img_icons/text-lines.svg"),
                // },
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
        };
    },
    methods: {},

    mounted() {},
};
</script>

<style scoped>
.crypto_bg {
    background: var(--lightBlue);
}

.feature_buttons h5 {
    margin-bottom: 10px;
    text-decoration: underline;
}

.feature_buttons span {
    color: var(--textColor);
    border-color: var(--textColor);
}

.feature_buttons span:hover,
.feature_buttons span.active {
    color: var(--lightBlue);
    background-color: var(--textColor);
}

h1,
h2 {
    color: var(--customWhite);
}
</style>
