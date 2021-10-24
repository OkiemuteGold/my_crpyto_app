<template>
    <div class="col-12 mb-5">
        <form class="stock_search_form" @submit.prevent="searchStock">
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    id="stockSearchInput"
                    autocomplete="off"
                    aria-label="stock search input field"
                    required
                    v-model="stockSymbol"
                    @keypress.enter="searchStock"
                />

                <label for="stockSearchInput" class="stock_search_label">
                    Enter stock symbol
                </label>

                <button
                    class="btn btn-secondary"
                    id="search_button"
                    @click="searchStock"
                    :disabled="invalidInput"
                >
                    Search
                </button>
            </div>
        </form>

        <div class="profile_container mx-auto mt-md-5" v-if="searchStock">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link active"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Profile
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="earnings-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#earnings"
                        type="button"
                        role="tab"
                        aria-controls="earnings"
                        aria-selected="true"
                    >
                        Earnings
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                    >
                        Contact
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="newsEvents-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#newsEvents"
                        type="button"
                        role="tab"
                        aria-controls="newsEvents"
                        aria-selected="false"
                    >
                        News &amp; Events
                    </button>
                </li>
            </ul>

            <div
                class="tab-content"
                id="myTabContent"
                v-if="assetProfile || defaultKeyStatistics"
            >
                <div
                    class="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    <div
                        class="
                            loading_container
                            d-flex
                            justify-content-center
                            align-items-center
                            mt-4
                        "
                        v-if="name && loading"
                    >
                        <h6 class="mb-0">Fetching Data...</h6>

                        <span
                            class="spinner-border text-primary"
                            role="status"
                        ></span>
                        <span class="visually-hidden"
                            >Fetching Data, Please Wait...</span
                        >
                    </div>

                    <span v-if="!loading">
                        <div class="info_item">
                            <h6>
                                Symbol:
                                <span class="text">{{ name }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Sector:
                                <span class="text">{{
                                    assetProfile.sector
                                }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Industry:
                                <span class="text">{{
                                    assetProfile.industry
                                }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Company Officers:
                                <span class="text">{{
                                    assetProfile.companyOfficers.length
                                }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Fulltime Employees:
                                <span class="text">{{
                                    assetProfile.fullTimeEmployees
                                }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Business Summary:
                                <span class="text">{{
                                    assetProfile.longBusinessSummary
                                }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Address:
                                <span class="text">{{
                                    `${assetProfile.address1}, ${assetProfile.city}, ${assetProfile.state}, ${assetProfile.country}`
                                }}</span>
                            </h6>
                        </div>

                        <div class="info_item">
                            <h6>
                                Website:
                                <span class="text">{{
                                    assetProfile.website
                                }}</span>
                            </h6>
                        </div>
                    </span>
                </div>
                <div
                    class="tab-pane fade"
                    id="earnings"
                    role="tabpanel"
                    aria-labelledby="earnings-tab"
                >
                    ...
                </div>
                <div
                    class="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                >
                    ...
                </div>
                <div
                    class="tab-pane fade"
                    id="newsEvents"
                    role="tabpanel"
                    aria-labelledby="newsEvents-tab"
                >
                    ...
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
    props: ["info"],

    computed: {
        // ...mapGetters(["stockDetails"]),

        assetProfile() {
            return this.info.assetProfile;
        },
        defaultKeyStatistics() {
            return this.info.defaultKeyStatistics;
        },
        invalidInput() {
            return this.stockSymbol === "";
        },
    },

    data() {
        return {
            stockSymbol: "",
            name: "",
            loading: true,
        };
    },

    filters: {
        upperCased: function (value) {
            return value.toUpperCase();
        },
    },

    methods: {
        searchStock() {
            if (!this.invalidInput) {
                setTimeout(() => {
                    this.loading = false;
                }, 1500);

                this.name = this.stockSymbol.toUpperCase();
            }
            this.stockSymbol = "";
            this.loading = true;
        },
    },

    mounted() {
        console.log(this.info);
    },
};
</script>

<style scoped>
.stock_search_form {
    max-width: 400px;
    margin: auto;
    position: relative;
}

.stock_search_label {
    position: absolute;
    left: 15px;
    top: 11px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 0.95rem;
    color: var(--textColor);
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    cursor: text;
}

.stock_search_form input {
    padding: 11px 15px;
    transition: 0.3s ease-in-out;
    font-size: 0.95rem;
    letter-spacing: 1px;
    color: var(--textColor);
    /* text-transform: uppercase; */
}

.stock_search_form input:hover {
    border-color: var(--textColor);
}

.stock_search_form input:valid {
    border-color: #0d6ef8;
}

.stock_search_form input:valid ~ .stock_search_label,
.stock_search_form input:focus ~ .stock_search_label {
    top: -11px;
    left: 5px;
    font-size: 0.825rem;
    background-color: #fff;
    color: #0d6ef8;
}

#search_button {
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 4px 15px;
}

.stock_search_form input:valid ~ #search_button {
    background-color: #0d6ef8;
    border-color: #0d6ef8;
}

.stock_search_form input:valid ~ #search_button:hover {
    background-color: #0b5ed7;
    border-color: #0b5ed7;
}

.profile_container {
    max-width: 900px;
    margin-top: 40px;
}

/* nav tabs */
.nav-tabs {
    border-bottom-width: 2px;
}

.tab-content {
    background-color: var(--customWhite);
}

.nav-tabs .nav-link {
    font-family: var(--fontJosefin);
    color: var(--textColor);
    /* border-color: #eee; */
    border-bottom-color: transparent !important;
    margin-right: 5px;
    margin-bottom: -1.85px;
}

.nav-tabs .nav-link:hover {
    border-color: #dee2e6;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #0d6ef8;
    background-color: var(--customWhite);
    border-width: 2px;
}

.nav-tabs .nav-link.active {
    border-bottom-color: transparent;
}

.tab-content > .tab-pane {
    padding: 20px;
}

.tab-content > .tab-pane .loading_container h6 {
    font-size: 1.125rem;
    margin-right: 12px;
    letter-spacing: 1px;
    color: var(--textColor);
}

.tab-content > .tab-pane .info_item {
    margin-bottom: 0.9375rem;
}

.tab-content > .tab-pane .info_item h6 {
    line-height: 1.5rem;
}

.tab-content > .tab-pane .info_item .text {
    font-family: var(--fontNunito);
    font-size: var(--size14);
    font-weight: 400 !important;
    color: var(--textColor);
}
</style>