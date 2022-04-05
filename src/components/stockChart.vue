<template>
    <div
        id="chart"
        v-if="chartInfo && (getTimestamp || getIndicators || getMeta)"
    >
        <apexchart
            type="area"
            height="350"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>

<script>
export default {
    props: ["name", "chartInfo"],

    data() {
        return {
            tickerName: this.name,
            series: [
                {
                    name: this.tickerName,
                    data: this.getIndicators(),
                },
            ],
            chartOptions: {
                chart: {
                    type: "area",
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: "x",
                        enabled: true,
                        autoScaleYaxis: true,
                    },
                    toolbar: {
                        autoSelected: "zoom",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                markers: {
                    size: 0,
                },
                title: {
                    text: `${this.tickerName} Stock Price Movement`,
                    align: "left",
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100],
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                    title: {
                        text: "Price",
                    },
                    // categories: this.getIndicators(),
                },
                xaxis: {
                    // type: "datetime",
                    categories: this.getTimestamp(),
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                },
            },
        };
    },

    methods: {
        /* convert epoch date to js readable date */
        getTimestamp: function () {
            let epochTime = this.chartInfo.timestamp;

            let allTimes = epochTime.map((time) => {
                let timestamp = time;
                let date = new Date(timestamp * 1000);
                let hours = date.getHours(),
                    minutes = date.getMinutes(),
                    seconds = date.getSeconds();

                return `${hours}:${minutes}:${seconds}`;
            });

            return allTimes;
        },

        getIndicators: function () {
            return this.chartInfo.indicators.quote[0].high;
        },

        getMeta() {
            return this.chartInfo.meta.validRanges.slice(0, 8);
        },
    },

    mounted() {
        console.log(this.getIndicators(), this.getMeta(), this.getTimestamp());
    },
};
</script>

<style scoped>
.apexcharts-text,
.apexcharts-yaxis-title-text,
.apexcharts-title-text {
    font-family: var(--fontNunito) !important;
}
</style>