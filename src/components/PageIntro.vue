<template>
    <div class="col-12 col-md-6 feature_item text-center mx-auto mb-5">
        <div class="feature_image">
            <img
                :src="item.icon"
                :alt="`${item.title} Icon`"
                width="50"
                height="50"
            />

            <div class="description px-1 py-3 p-lg-4">
                <h2 class="card-title">
                    {{ item.title }}
                </h2>

                <p class="card-text">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
};
</script>

<style scoped>
.feature_item {
    max-width: 550px;
}

.description p {
    font-size: 0.95rem;
}
</style>