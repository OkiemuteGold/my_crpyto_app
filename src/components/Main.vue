<template>
    <main>
        <section class="pt-5 pb-0 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">App Intro</h1>
                    <p class="lead text-muted">
                        Select platform to get all stock and crypto data
                        available or click any of the buttons below to visit the
                        listed sections
                    </p>
                    <p>
                        <a href="#getStockDetails" class="btn btn-primary m-2"
                            >Get Stock Details</a
                        >
                        <a
                            href="#generalMarketTopics"
                            class="btn btn-secondary m-2"
                            >General Market Topics</a
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

        <section class="bg-white" id="getStockDetails">
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

                            <h2>Get Stock Details</h2>
                        </div>

                        <div v-if="companyInfo.length > 0">
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

        <section class="section_bg_right pt-0" id="generalMarketTopics">
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

                        <div v-if="companyInfo.length > 0">
                            <FeatureItem
                                v-for="(info, index) in companyInfo"
                                :key="index"
                                :info="info"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import FeatureItem from "./FeatureItem.vue";
import PageIntro from "./PageIntro.vue";
import MainCompanyInfo from "./mainCompanyInfo.vue";

import { mapGetters } from "vuex";

export default {
    name: "Home",
    components: {
        FeatureItem,
        PageIntro,
        MainCompanyInfo,
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
        };
    },
};
</script>

<style scoped>
.feature_buttons span.active {
    background-color: var(--textColor);
}
</style>
