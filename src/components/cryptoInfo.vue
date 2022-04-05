<template>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 my-3" v-if="crypto">
        <div class="card border-0">
            <!-- <img
                src="../assets/images/samp1.jpg"
                class="card-img-top"
                :alt="crypto.symbol"
                width="100%"
                height="100"
                role="img"
                aria-label="Placeholder: Thumbnail"
                focusable="false"
            /> -->

            <div class="card-body py-4">
                <h5 class="card-title">
                    <span class="small_text">{{ crypto.symbol }}</span>
                </h5>

                <h6 class="card-text">
                    Last Trade Price:
                    <span> $ {{ crypto.last_trade_price }} </span>
                </h6>

                <h6 class="card-text">
                    Price in 24hrs:
                    <span> $ {{ crypto.price_24h }} </span>
                </h6>

                <h6 class="card-text mb-0">
                    Volume in 24hrs:
                    <span>
                        {{ crypto.volume_24h }}
                    </span>
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["crypto"],

    mounted() {
        // console.log(this.crypto);
    },
};
</script>

<style scoped>
.card {
    background: var(--darkBlue);
    box-shadow: 0.125rem 0.35rem 0.75rem rgba(0, 0, 0, 0.2);
}

.card:hover {
    -o-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    box-shadow: 0.125rem 0.25rem 0.5rem -0.125rem rgba(0, 0, 0, 0.2);
}

.card img {
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 70%;
    object-position: 70%;
    padding: 5px;
    border-radius: 8px 8px 0 0;
}

h5.card-title {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem !important;
}

h6:not(:last-child) {
    margin-bottom: 10px !important;
}

.small_text {
    font-size: var(--size12);
    background: var(--textColor);
    padding: 5px 6px 3px;
    line-height: 1;
    border-radius: 0 8px 0 8px;
    letter-spacing: 1px;
}

.card-text {
    color: var(--textColor);
    font-family: var(--fontNunito);
}

/* .card-text span {
    font-size: var(--size14);
} */
</style>