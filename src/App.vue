<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
    components: { Header },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i");
@import "https://fonts.googleapis.com/css?family=Just+Another+Hand";
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

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
    color: #55565b;
    color: #2c3e50;
    line-height: 2.1;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: "Josefin Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Josefin Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0 0 0.9375rem;
    font-weight: 500;
    line-height: 1.1;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
