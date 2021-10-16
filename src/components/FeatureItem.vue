<template>
    <div class="col-12 col-md-6 col-lg-4 feature_item">
        <div class="card shadow-sm">
            <img
                src="../assets/images/samp1.jpg"
                class="card-img-top"
                alt="..."
                width="100%"
                height="220"
                role="img"
                aria-label="Placeholder: Thumbnail"
                focusable="false"
            />

            <div class="card-body">
                <h5 class="card-title">
                    <a href="">Title</a>
                </h5>

                <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    <a href="">Read More</a>
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
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card img {
    object-fit: cover;
    object-position: 80%;
    padding: 5px;
    border-radius: 8px 8px 0 0;
}

h5 a {
    all: inherit;
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
</style>