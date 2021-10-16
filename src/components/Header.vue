<template>
    <header>
        <div class="bg-dark collapse" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="about col-sm-8 col-md-7 py-4">
                        <h4 class="text-white">About</h4>
                        <p class="text-muted">
                            Add some information about the album below, the
                            author, or any other background context. Make it a
                            few sentences long so folks can pick up some
                            informative tidbits. Then, link them off to some
                            social networking sites or contact information.
                        </p>
                    </div>
                    <div class="contact col-sm-4 offset-md-1 py-4">
                        <h4 class="text-white">Contact</h4>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#" class="text-white"
                                    >Follow on Twitter</a
                                >
                            </li>
                            <li>
                                <a href="#" class="text-white"
                                    >Like on Facebook</a
                                >
                            </li>
                            <li><a href="#" class="text-white">Email me</a></li>
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
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        @click.prevent="openDropdownMenu"
                    >
                        <span class="brand_title me-2">
                            <strong>Choose Platform</strong>
                        </span>
                    </a>

                    <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-cubes" aria-label="Stocks"></i>
                                Stocks
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                <i
                                    class="fab fa-bitcoin"
                                    aria-label="Crypto"
                                ></i>
                                Crypto
                            </a>
                        </li>
                    </ul>
                </div>

                <button
                    class="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="openNav"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import $ from "jquery";

export default {
    data() {
        return {};
    },
    methods: {
        openNav() {
            $(".collapse").toggle("show_nav_item");
        },
        openDropdownMenu() {
            $(".dropdown-menu").toggle("show_nav_item");
        },
    },
};
</script>

<style scoped>
header {
    position: sticky;
    width: 100%;
    top: 0;
}

.dropdown-toggle::after {
    vertical-align: 0.175em;
}

.dropdown-menu {
    position: absolute;
    top: 48px;
    right: 0;
    padding: 0.15rem;
    min-width: 7.5rem;
}

.dropdown-item {
    text-align: center;
    border-radius: 2px;
    font-size: 1rem;
}

.show_nav_item {
    display: block;
}

.about p {
    font-size: 0.875rem;
}

.contact a {
    font-size: 0.75rem;
}
</style>