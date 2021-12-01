<template>
    <div v-if="wlStock">
        <div class="card shadow-sm">
            <div class="card-body">
                <h5 class="card-title">
                    <u>{{ wlStock.displayName }} ({{ wlStock.symbol }})</u>
                </h5>

                <div class="card-text">
                    <div class="desc">
                        <div class="desc_item">
                            <h6>
                                <abbr title="Regular Market">RM</abbr> Previous
                                Close:
                                <span class="text">
                                    {{ wlStock.regularMarketPreviousClose }}
                                </span>
                            </h6>

                            <h6>
                                <abbr title="Regular Market">RM</abbr> Open:
                                <span class="text">
                                    {{ wlStock.regularMarketOpen }}
                                </span>
                            </h6>
                            <h6>
                                <abbr title="Regular Market">RM</abbr> Current
                                Price:
                                <span class="text">
                                    {{ wlStock.regularMarketPrice }}
                                </span>
                            </h6>
                            <h6>
                                <abbr title="Regular Market">RM</abbr> Day High:
                                <span class="text">
                                    {{ wlStock.regularMarketDayHigh }}
                                </span>
                            </h6>
                            <h6>
                                <abbr title="Regular Market">RM</abbr> Day Low:
                                <span class="text">
                                    {{ wlStock.regularMarketDayLow }}
                                </span>
                            </h6>

                            <h6>
                                Post Market Price (Change):
                                <span class="text">
                                    {{ wlStock.postMarketPrice }}
                                    ({{ wlStock.postMarketChange }})
                                </span>
                            </h6>
                            <h6>
                                Average Analyst Rating:
                                <span class="text">
                                    {{ wlStock.averageAnalystRating }}
                                </span>
                            </h6>
                            <h6>
                                Book Value:
                                <span class="text">
                                    {{ wlStock.bookValue }}
                                </span>
                            </h6>
                        </div>

                        <div class="desc_item">
                            <h6>
                                52 Week High (<abbr title="52 Week High Change"
                                    >Change</abbr
                                >):
                                <span class="text">
                                    {{ wlStock.fiftyTwoWeekHigh }}
                                    ({{ wlStock.fiftyTwoWeekHighChange }})
                                </span>
                            </h6>
                            <h6>
                                52 Week Low (<abbr title="52 Week Low Change"
                                    >Change</abbr
                                >):
                                <span class="text">
                                    {{ wlStock.fiftyTwoWeekLow }}
                                    ({{ wlStock.fiftyTwoWeekLowChange }})
                                </span>
                            </h6>

                            <h6>
                                50 Day Avg (<abbr title="50 Day Avg Change"
                                    >Change</abbr
                                >):
                                <span class="text">
                                    {{ wlStock.fiftyDayAverage }}
                                    ({{ wlStock.fiftyDayAverageChange }})
                                </span>
                            </h6>
                            <h6>
                                200 Day Avg (<abbr
                                    title="200 Day Average Change"
                                    >Change</abbr
                                >):
                                <span class="text">
                                    {{ wlStock.twoHundredDayAverage }}
                                    ({{ wlStock.twoHundredDayAverageChange }})
                                </span>
                            </h6>
                        </div>

                        <div class="desc_item">
                            <h6>
                                Short Name:
                                <span class="text">
                                    {{ wlStock.shortName }}
                                </span>
                            </h6>
                            <div v-if="wlStock.prevName">
                                <h6>
                                    Prev Name:
                                    <span class="text">
                                        {{ wlStock.prevName }}
                                    </span>
                                </h6>
                                <h6>
                                    Name Change Date:
                                    <span class="text">
                                        {{ wlStock.nameChangeDate }}
                                    </span>
                                </h6>
                            </div>
                            <h6>
                                First Trade Date:
                                <span class="text">
                                    {{ wlStock.firstTradeDateMilliseconds }}
                                </span>
                            </h6>
                        </div>

                        <div class="desc_item">
                            <h6>
                                Market Cap:
                                <span class="text">
                                    {{ wlStock.marketCap }}
                                </span>
                            </h6>

                            <h6>
                                <abbr title="Regular Market">RM</abbr> Volume:
                                <span class="text">
                                    {{ wlStock.regularMarketVolume }}
                                </span>
                            </h6>
                            <h6>
                                <abbr title="Average Daily Volume"
                                    >Avg Daily Vol</abbr
                                >
                                (10 Days):
                                <span class="text">
                                    {{ wlStock.averageDailyVolume10Day }}
                                </span>
                            </h6>
                            <h6>
                                <abbr title="Average Daily Volume"
                                    >Avg Daily Vol</abbr
                                >
                                (3 Months):
                                <span class="text">
                                    {{ wlStock.averageDailyVolume3Month }}
                                </span>
                            </h6>

                            <h6>
                                Shares Outstanding:
                                <span class="text">
                                    {{ wlStock.sharesOutstanding }}
                                </span>
                            </h6>
                            <h6>
                                Forward PE:
                                <span class="text">
                                    {{ wlStock.forwardPE }}
                                </span>
                            </h6>
                            <h6>
                                EPS Current Year:
                                <span class="text">
                                    {{ wlStock.epsCurrentYear }}
                                </span>
                            </h6>
                            <h6>
                                EPS Forward:
                                <span class="text">
                                    {{ wlStock.epsForward }}
                                </span>
                            </h6>
                            <h6>
                                Earnings Timestamp:
                                <span class="text">
                                    {{ wlStock.earningsTimestamp }}
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["wlStock"],

    // mounted() {
    //     console.log(this.wlStock);
    // },
};
</script>

<style scoped>
.card-body {
    background: var(--customWhite);
    /* padding: 1.25rem; */
    -o-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
}

.card-body:hover {
    background: #fff;
}

.card-title {
    margin-bottom: 1rem;
}

.card-text .desc {
    display: flex;
    flex-direction: column;
    height: 250px;
    overflow-y: hidden;
    -o-transition: 0.3s linear;
    -moz-transition: 0.3s linear;
    -webkit-transition: 0.3s linear;
    transition: 0.3s linear;
    cursor: ns-resize;
}

.card-text:hover .desc {
    overflow-y: scroll;
}

.card-text .desc_item:not(:last-of-type) {
    margin-bottom: 0.9375rem;
}

.card-text .desc h6 {
    line-height: 1.5rem;
}

.card-text .desc .text {
    font-family: var(--fontNunito);
    font-size: var(--size14);
    font-weight: 400;
    color: var(--textColor);
}
</style>