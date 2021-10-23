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
                        href="javascript: void()"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span class="brand_title me-1">
                            <strong>Choose Platform</strong>
                        </span>
                    </a>

                    <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <a class="dropdown-item" href="javascript: void()">
                                <i class="fas fa-cubes" aria-label="Stocks"></i>
                                Stocks
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="javascript: void()">
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
                    id="navbar-collapse-x"
                    class="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <!-- <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> -->
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
    },
};
</script>

<style scoped>
header {
    position: sticky;
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
}

/* .show_nav_item {
    display: block;
} */

.about p {
    font-size: 0.875rem;
}

.contact a {
    font-size: 0.75rem;
}

/* toggler */
/* .navbar-toggler .icon-bar {
    width: 22px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}

.navbar-toggler .icon-bar:nth-of-type(1) {
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 10% 10%;
    -ms-transform-origin: 10% 10%;
    transform-origin: 10% 10%;
}

.navbar-toggler .icon-bar:nth-of-type(2) {
    opacity: 0;
    filter: alpha(opacity=0);
}

.navbar-toggler .icon-bar:nth-of-type(3) {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 10% 90%;
    -ms-transform-origin: 10% 90%;
    transform-origin: 10% 90%;
}

.navbar-toggler.collapsed .icon-bar:nth-of-type(1) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
}

.navbar-toggler.collapsed .icon-bar:nth-of-type(2) {
    opacity: 1;
    filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .icon-bar:nth-of-type(3) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
} */
</style>