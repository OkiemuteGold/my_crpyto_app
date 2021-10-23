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
                    :disabled="invalidIput"
                >
                    Search
                </button>
            </div>
        </form>

        <div
            class="profile_container mt-4 mx-auto p-0 p-md-4"
            v-if="searchStock"
        >
            <h3 class="mb-4">{{ stockSymbol | upperCased }}</h3>

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
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
                        class="nav-link active"
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
            <div class="tab-content" id="myTabContent">
                <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    ...
                </div>
                <div
                    class="tab-pane fade show active"
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
export default {
    props: ["item"],
    data() {
        return {
            stockSymbol: "",
        };
    },
    computed: {
        invalidIput() {
            return this.stockSymbol === "";
        },
    },
    methods: {
        searchStock() {
            if (this.stockSymbol !== "") {
                console.log(this.stockSymbol.toUpperCase());
            }
            this.stockSymbol = "";
        },
    },
    filters: {
        upperCased: function (value) {
            return value.toUpperCase();
        },
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
    color: #6c757d;
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    cursor: text;
}

.stock_search_form input {
    padding: 11px 15px;
    transition: 0.3s ease-in-out;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #6c757d;
    /* text-transform: uppercase; */
}

.stock_search_form input:hover {
    border-color: #6c757d;
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
    max-width: 800px;
}

/* nav tabs */
.nav-tabs {
    border-bottom-width: 2px;
}

.nav-tabs .nav-link {
    color: #6c757d;
    border-color: #eee;
    margin-right: 5px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #0d6ef8;
    background-color: #f8f8f8;
    border-width: 2px;
}

.tab-content > .tab-pane {
    padding: 5px 15px;
}
</style>