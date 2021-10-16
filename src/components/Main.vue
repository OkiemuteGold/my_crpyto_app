<template>
    <main>
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Album example</h1>
                    <p class="lead text-muted">
                        Something short and leading about the collection
                        below—its contents, the creator, etc. Make it short and
                        sweet, but not too short so folks don’t simply skip over
                        it entirely.
                    </p>
                    <p>
                        <a href="#" class="btn btn-primary m-2"
                            >Main call to action</a
                        >
                        <a href="#" class="btn btn-secondary m-2"
                            >Secondary action</a
                        >
                    </p>
                </div>
            </div>
        </section>

        <div class="feature_container bg-light">
            <div class="inner_container">
                <div class="container">
                    <div class="row">
                        <FeatureItem />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import FeatureItem from "./FeatureItem.vue";
export default {
    name: "Home",
    components: { FeatureItem },
};
</script>

<style scoped>
.feature_container {
    padding-top: 80px;
    padding-bottom: 80px;
}

.feature_container .inner_container {
    max-width: 1200px;
    margin: auto;
}

.feature_item {
    margin-bottom: 20px;
}
</style>
