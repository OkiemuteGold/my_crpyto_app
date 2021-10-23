<template>
    <div
        class="col-12 col-md-6 col-lg-4 feature_item"
        v-if="assetProfile || defaultKeyStatistics"
    >
        <div class="card shadow-sm">
            <img
                src="../assets/images/samp1.jpg"
                class="card-img-top"
                alt="..."
                width="100%"
                height="200"
                role="img"
                aria-label="Placeholder: Thumbnail"
                focusable="false"
            />

            <div class="card-body">
                <h5 class="card-title">
                    <a :href="`${assetProfile.website}`" target="_blank">
                        {{ assetProfile.sector }}
                    </a>
                    <span class="small_text">{{ assetProfile.sector }}</span>
                </h5>

                <p class="card-text">
                    <span class="desc">
                        {{ assetProfile.longBusinessSummary }}
                    </span>
                    <a :href="`${assetProfile.website}`" target="_blank"
                        >Read More</a
                    >
                </p>

                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-danger me-2"
                        >
                            <i class="fas fa-heart"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-primary me-2"
                        >
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                    <small class="text-muted">
                        <span class="time">9</span> mins ago
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["info"],
    computed: {
        assetProfile() {
            return this.info.assetProfile;
        },
        defaultKeyStatistics() {
            return this.info.defaultKeyStatistics;
        },
    },

    mounted() {
        console.log(this.info);
    },
};
</script>

<style scoped>
.card img {
    object-fit: cover;
    object-position: 80%;
    padding: 5px;
    border-radius: 8px 8px 0 0;
}

.card-body {
    background: #f8f8f8 !important;
}

h5.card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.9375rem;
}

h5 a {
    all: inherit;
    margin-bottom: 0;
}

h5 a:hover {
    color: #0d6efd;
    cursor: pointer;
}

button {
    padding: 0px;
    height: 32px;
    width: 32px;
    line-height: 32px;
    border-radius: 50rem !important;
}

button i {
    line-height: inherit;
}

.small_text {
    font-size: 0.75rem;
    background: #eee;
    padding: 5px;
    line-height: 1;
    border-radius: 0 10px 0 10px;
}

.card-text {
    margin-bottom: 1rem;
}

.card-text .desc {
    /* min-height: 80px; */
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    padding-right: 5px;
    margin-bottom: 10px;
    transition: 0.3s linear;
}

.card-text:hover .desc {
    overflow-y: scroll;
}
</style>