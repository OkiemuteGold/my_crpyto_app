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

export default {
    components: { Header, Main },
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"); */

/* @import "https://fonts.googleapis.com/css?family=Just+Another+Hand"; */

@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i");
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

@import url(../public/css/typography.css);

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
    overflow-x: hidden;
    scroll-behavior: smooth;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* #nav a.router-link-exact-active {
    color: #42b983;
} */

@import "~bootstrap/dist/css/bootstrap.css";
</style>
