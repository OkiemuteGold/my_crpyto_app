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
                            <h3>Filter By:</h3>
                            <!-- <span
                                v-for="(item, index) in getFirstLetters()"
                                :key="index"
                            >
                                {{ item }}
                            </span> -->

                            <ul
                                class="
                                    filter_container
                                    d-flex
                                    flex-column flex-md-row
                                "
                            >
                                <li class="d-flex flex-column">
                                    <span>
                                        Alpabet:
                                        <!-- <span class="params">{{ alphabet }}</span> -->
                                        <input
                                            type="text"
                                            v-model="alphabet"
                                            maxlength="1"
                                            class="text-uppercase"
                                        />
                                    </span>

                                    <input
                                        type="range"
                                        name="alphabet"
                                        id="alphabet"
                                        min="1"
                                        max="26"
                                        v-model="number"
                                        @input="updateAlphabet($event)"
                                    />
                                </li>
                                <li class="d-flex flex-column">
                                    <span>
                                        Last Trade Price:
                                        <!-- <span class="params">{{ lastTradePrice }}</span> -->
                                        <input
                                            type="number"
                                            v-model="lastTradePrice"
                                        />
                                    </span>
                                    <input
                                        type="range"
                                        name="lastTradePrice"
                                        id="lastTradePrice"
                                        min="0"
                                        max="30000"
                                        v-model="lastTradePrice"
                                    />
                                </li>
                                <li class="d-flex flex-column">
                                    <span>
                                        Volume:
                                        <!-- <span class="params">{{ volume }}</span> -->
                                        <input type="number" v-model="volume" />
                                    </span>
                                    <input
                                        type="range"
                                        name="volume"
                                        id="volume"
                                        min="0"
                                        max="30000"
                                        v-model="volume"
                                    />
                                </li>

                                <li class="d-flex h-100">
                                    <button
                                        class="me-2"
                                        :disabled="!isValid"
                                        @click="filterCrypto()"
                                    >
                                        Filter
                                    </button>
                                    <button @click="reset()">Reset</button>
                                </li>
                            </ul>

                            <div
                                v-if="
                                    mainCryptoData && mainCryptoData.length > 0
                                "
                                class="row"
                            >
                                <cryptoInfo
                                    v-for="(crypto, index) in mainCryptoData"
                                    :key="index"
                                    :crypto="crypto"
                                />
                            </div>

                            <NotFound :msg="message" v-else />
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
import cryptoInfo from "./cryptoInfo.vue";
import NotFound from "./NotFound.vue";

import { mapGetters } from "vuex";

export default {
    components: {
        cryptoInfo,
        NotFound,
    },
    data() {
        return {
            message: "",
            lastTradePrice: 500,
            volume: 4500,
            number: 1,
            alphabet: "A",
            filteredCryptoData: [],
            mainCryptoData: [],
        };
    },
    computed: {
        ...mapGetters(["cryptoData"]),

        isValid() {
            return (
                this.lastTradePrice !== "" &&
                this.volume !== "" &&
                this.number !== ""
            );
        },
    },
    methods: {
        updateAlphabet(event) {
            let value = event.target.value;
            // console.log(typeof this.alphabet, typeof value);

            let allValues = [
                { number: 1, alphabet: "A" },
                { number: 2, alphabet: "B" },
                { number: 3, alphabet: "C" },
                { number: 4, alphabet: "D" },
                { number: 5, alphabet: "E" },
                { number: 6, alphabet: "F" },
                { number: 7, alphabet: "G" },
                { number: 8, alphabet: "H" },
                { number: 9, alphabet: "I" },
                { number: 10, alphabet: "J" },
                { number: 11, alphabet: "K" },
                { number: 12, alphabet: "L" },
                { number: 13, alphabet: "M" },
                { number: 14, alphabet: "N" },
                { number: 15, alphabet: "O" },
                { number: 16, alphabet: "P" },
                { number: 17, alphabet: "Q" },
                { number: 18, alphabet: "R" },
                { number: 19, alphabet: "S" },
                { number: 20, alphabet: "T" },
                { number: 21, alphabet: "U" },
                { number: 22, alphabet: "V" },
                { number: 23, alphabet: "W" },
                { number: 24, alphabet: "X" },
                { number: 25, alphabet: "Y" },
                { number: 26, alphabet: "Z" },
            ];

            let alpha = allValues.filter((val) => {
                let stringed = val.number + "";
                if (value === stringed) {
                    return (this.alphabet = val.alphabet);
                }
            });

            return alpha;
        },

        reset() {
            if (this.isValid) {
                this.mainCryptoData = this.cryptoData;
                this.alphabet = "A";
                this.lastTradePrice = 500;
                this.volume = 4500;
            }
        },

        filterCrypto() {
            let allData = this.cryptoData;

            let newData = allData.filter((data) => {
                let sym = data.symbol;
                let firstLetter = sym.charAt(0).toUpperCase();

                // console.log(
                //     data.last_trade_price < this.lastTradePrice,
                //     data.volume_24h < this.volume,
                //     firstLetter == this.alphabet
                // );

                if (
                    data.last_trade_price < this.lastTradePrice &&
                    data.volume_24h < this.volume &&
                    firstLetter === this.alphabet.toUpperCase()
                ) {
                    return data;
                }
            });

            let sortedNewData = newData.sort((a, b) => {
                let symA = a.symbol,
                    symB = b.symbol;

                return symA < symB ? -1 : 1;
            });

            console.log(newData, sortedNewData);

            if (sortedNewData.length == 0) {
                this.message = "No result found...";
            } else {
                this.message = "Please check your internet connection...";
            }

            return (this.mainCryptoData = sortedNewData);
        },
    },

    mounted() {
        // this.getFirstLetters();
        if (this.cryptoData.length == 0) {
            this.message = "Please check your internet connection...";
        }
    },

    created() {
        this.mainCryptoData = this.cryptoData;
    },
};
</script>

<style scoped>
.crypto_bg {
    background: var(--darkBlue);
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
    color: var(--darkBlue);
    background-color: var(--textColor);
}

h1,
h2,
h3 {
    color: var(--customWhite);
}

.filter_container {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
}

.filter_container li {
    list-style: none;
    margin-right: 20px;
    margin-bottom: 20px;
}

.filter_container li:not(:last-child) {
    width: 100%;
}

.filter_container li:last-child {
    margin-right: 0;
}

.filter_container li span {
    display: flex;
    justify-content: space-between;
}

.filter_container li span input {
    width: 35%;
    padding: 0 0 0 5px;
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--textColor);
    color: var(--textColor);
}

.filter_container li span input:focus,
.filter_container li span input:hover {
    transform: scale(0.95);
}

.filter_container li span input:valid,
.filter_container li span:not(.params) {
    color: var(--customWhite);
}

.filter_container li span:not(.params),
.filter_container li button {
    border: 1px solid var(--textColor);
    padding: 6px 12px;
    border-radius: 0.25rem;
    margin-bottom: 8px;
}

/* .filter_container li span.params {
    margin-left: 5px;
    color: var(--textColor);
} */

.filter_container li button {
    font-weight: 600;
    background-color: var(--customWhite);
    color: var(--darkBlue);
    width: 100px;
    max-width: 100%;
    text-transform: uppercase;
}

.filter_container li button:focus,
.filter_container li button:hover {
    background-color: var(--lightGray);
    border-color: var(--lightGray);
    transform: scale(0.95);
}

@media screen and (max-width: 1025px) {
    .filter_container li span {
        justify-content: space-between;
    }
}

@media screen and (max-width: 769px) {
    .filter_container {
        flex-wrap: wrap;
    }

    .filter_container li {
        width: calc(50% - 24px);
    }
}

@media screen and (max-width: 426px) {
    .filter_container li {
        width: 100%;
    }

    .filter_container li span {
        width: 100%;
        justify-content: space-between;
    }

    .filter_container li span input {
        width: 45%;
    }
}
</style>
