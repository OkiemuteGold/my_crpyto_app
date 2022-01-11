<template>
    <header>
        <div class="bg-dark collapse" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="about col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores, mollitia hic? Incidunt magnam
                            consequuntur harum, explicabo libero deserunt animi
                            eos?
                        </p>
                    </div>
                    <div class="contact col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">Contact</h4>
                        <ul class="list-unstyled">
                            <li>
                                <a
                                    href="https://github.com/OkiemuteGold"
                                    target="_blank"
                                    class="text-white"
                                    >Github</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/okiemute-gold"
                                    target="_blank"
                                    class="text-white"
                                    >LinkedIn</a
                                >
                            </li>
                            <li>
                                <a
                                    href="mailto: goldokiemute1@gmail.com"
                                    target="_blank"
                                    class="text-white"
                                    >Email me</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <div class="navbar-brand d-flex align-items-center dropdown">
                    <a
                        class="btn btn-secondary dropdown-toggle"
                        href="javascript: void()"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span class="brand_title me-1">
                            <strong>Select A Platform</strong>
                        </span>
                    </a>

                    <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <span
                                class="dropdown-item"
                                @click="showPlatform('Stocks')"
                            >
                                <i class="fas fa-cubes" aria-label="Stocks"></i>
                                Stocks
                            </span>
                        </li>
                        <li>
                            <span
                                class="dropdown-item"
                                @click="showPlatform('Crypto')"
                            >
                                <i
                                    class="fab fa-bitcoin"
                                    aria-label="Crypto"
                                ></i>
                                Crypto
                            </span>
                        </li>
                    </ul>
                </div>

                <button
                    id="navbar-collapse-x"
                    class="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
// import $ from "jquery";

export default {
    data() {
        return {};
    },
    methods: {
        // openNav() {
        //     $(".collapse").toggle("show_nav_item");
        // },
        // openDropdownMenu() {
        //     $(".dropdown-menu").toggle("show_nav_item");
        // },

        showPlatform(platform) {
            if (platform.toLowerCase() == "stocks") {
                console.log("Stocks clicked");

                this.$emit("stock", true);
                this.$emit("crypto", false);
            } else if (platform.toLowerCase() == "crypto") {
                console.log("Crypto clicked");

                this.$emit("stock", false);
                this.$emit("crypto", true);
            }
        },
    },
};
</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

.dropdown-toggle::after {
    vertical-align: 0.175em;
}

.dropdown-menu {
    position: absolute;
    top: 48px;
    right: 0;
    padding: 0.15rem;
    max-width: 5rem;
    margin-left: auto;
}

.dropdown-item {
    text-align: center;
    border-radius: 2px;
    font-size: 1rem;
    cursor: pointer;
}

/* .show_nav_item {
    display: block;
} */

.about p {
    font-size: var(--size14);
}

.contact a {
    font-size: 0.825rem;
    text-decoration: 1.5px underline var(--textColor);
}

.contact a:hover {
    text-decoration: none var(--textColor);
    color: var(--lightGray) !important;
}
</style>