<template>
    <div class="col-12 mb-5">
        <form class="stock_search_form" @submit.prevent="searchStock">
            <div class="form-group">
                <input
                    type="text"
                    class="form-control"
                    id="stockSearchInput"
                    autocomplete="off"
                    aria-label="stock search input field"
                    required
                    v-model="stockSymbol"
                />

                <label for="stockSearchInput" class="stock_search_label">
                    Enter stock symbol
                </label>

                <button
                    type="submit"
                    class="btn btn-secondary"
                    id="search_button"
                    :disabled="invalidInput"
                >
                    Search
                </button>
            </div>
        </form>

        <div class="profile_container mx-auto mt-md-5" v-if="searchStock">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link active"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Profile
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="financials-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#financials"
                        type="button"
                        role="tab"
                        aria-controls="financials"
                        aria-selected="true"
                    >
                        Financials
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="earnings-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#earnings"
                        type="button"
                        role="tab"
                        aria-controls="earnings"
                        aria-selected="true"
                    >
                        Earnings
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="recomTrend-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#recomTrend"
                        type="button"
                        role="tab"
                        aria-controls="recomTrend"
                        aria-selected="false"
                    >
                        <abbr title="Recommendation">Recom</abbr> Trend
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link"
                        id="udGradeHistory-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#udGradeHistory"
                        type="button"
                        role="tab"
                        aria-controls="udGradeHistory"
                        aria-selected="false"
                    >
                        <abbr title="Upgrade &amp; Downgrage">UDGrade</abbr>
                        History
                    </button>
                </li>
            </ul>

            <div
                class="tab-content"
                id="myTabContent"
                v-if="
                    assetProfile ||
                    defaultKeyStatistics ||
                    summaryDetail ||
                    financialData ||
                    earningsHistory ||
                    calendarEvents ||
                    recommendationTrend ||
                    upgradeDowngradeHistory
                "
            >
                <!-- profile tab -->
                <div
                    class="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    <!-- show preloader if name is entered -->
                    <div
                        class="
                            loading_container
                            d-flex
                            justify-content-center
                            align-items-center
                            mt-4
                        "
                        v-if="name && loading"
                    >
                        <h6 class="mb-0">Fetching Data...</h6>

                        <span
                            class="spinner-border text-primary"
                            role="status"
                        ></span>
                        <span class="visually-hidden"
                            >Fetching Data, Please Wait...</span
                        >
                    </div>

                    <!-- if done loading -->
                    <span v-if="!loading">
                        <div class="info_item">
                            <h6>
                                Symbol:
                                <span class="text">{{ name }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Sector:
                                <span class="text">{{
                                    assetProfile.sector
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Industry:
                                <span class="text">{{
                                    assetProfile.industry
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Company Officers:
                                <span class="text">{{
                                    assetProfile.companyOfficers.length
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                {{ assetProfile.companyOfficers[0].title }}:
                                <span class="text">{{
                                    assetProfile.companyOfficers[0].name
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Fulltime Employees:
                                <span class="text">{{
                                    assetProfile.fullTimeEmployees
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Business Summary:
                                <span class="text">{{
                                    assetProfile.longBusinessSummary
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Address:
                                <span class="text">{{
                                    `${assetProfile.address1}, ${assetProfile.city}, ${assetProfile.state}, ${assetProfile.country}`
                                }}</span>
                            </h6>
                        </div>
                        <div class="info_item">
                            <h6>
                                Website:
                                <span class="text">
                                    <a
                                        :href="`${assetProfile.website}`"
                                        target="_blank"
                                    >
                                        {{ assetProfile.website }}
                                    </a>
                                </span>
                            </h6>
                        </div>
                    </span>
                </div>

                <!-- financials tab -->
                <div
                    class="tab-pane fade"
                    id="financials"
                    role="tabpanel"
                    aria-labelledby="financials-tab"
                >
                    <div class="row">
                        <!-- left -->
                        <div class="col-12 col-md-6">
                            <div class="info_item">
                                <h6>
                                    Current Price:
                                    <span class="text">{{
                                        financialData.currentPrice.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Previous Close:
                                    <span class="text">{{
                                        summaryDetail.previousClose.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Open:
                                    <span class="text">{{
                                        summaryDetail.open.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Day High:
                                    <span class="text">{{
                                        summaryDetail.dayHigh.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Day Low:
                                    <span class="text">{{
                                        summaryDetail.dayLow.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="Highest price at which a security e.g. stock, has traded during the time period of 1 year"
                                >
                                    52 Wk High:
                                    <span class="text">{{
                                        summaryDetail.fiftyTwoWeekHigh.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="Lowest price at which a security e.g. stock, has traded during the time period of 1 year"
                                >
                                    52 Wk Low:
                                    <span class="text">{{
                                        summaryDetail.fiftyTwoWeekLow.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="It's the first line of support in an uptrend or the first line of resistance in a downtrend"
                                >
                                    50 Day Average:
                                    <span class="text">{{
                                        summaryDetail.fiftyDayAverage.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="Covers roughly 40 weeks of trading, and is commonly used to determine the general market trend"
                                >
                                    200 Day Average:
                                    <span class="text">{{
                                        summaryDetail.twoHundredDayAverage.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Target High Price:
                                    <span class="text">{{
                                        financialData.targetHighPrice.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Target Low Price:
                                    <span class="text">{{
                                        financialData.targetLowPrice.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Target Mean Price:
                                    <span class="text">{{
                                        financialData.targetMeanPrice.fmt
                                    }}</span>
                                </h6>
                            </div>
                        </div>

                        <!-- right -->
                        <div class="col-12 col-md-6">
                            <div class="info_item">
                                <h6
                                    title="Higher trade volumes for a stock mean higher liquidity, better order execution and a more active market for connecting a buyer and seller"
                                >
                                    Volume:
                                    <span class="text">
                                        {{ summaryDetail.volume.fmt }}
                                    </span>
                                </h6>
                                <h6>
                                    Average Volume:
                                    <span class="text">{{
                                        summaryDetail.averageVolume.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="The amount of an asset or security that changes hands over some period of 10 days"
                                >
                                    Average Volume 10days:
                                    <span class="text">{{
                                        summaryDetail.averageVolume10days.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Market Cap:
                                    <span
                                        class="text"
                                        :title="`${summaryDetail.marketCap.longFmt}`"
                                        >{{ summaryDetail.marketCap.fmt }}</span
                                    >
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Revenue Growth:
                                    <span class="text">{{
                                        financialData.revenueGrowth.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Total Revenue:
                                    <span class="text">{{
                                        financialData.totalRevenue.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Total Cash:
                                    <span class="text">{{
                                        financialData.totalCash.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Total Debt:
                                    <span class="text">{{
                                        financialData.totalDebt.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Operating Cash flow:
                                    <span class="text">
                                        {{
                                            financialData.operatingCashflow.fmt
                                        }}
                                    </span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Ex Dividend Date:
                                    <span class="text">
                                        <time
                                            :datetime="`${summaryDetail.exDividendDate.fmt}`"
                                            >{{
                                                summaryDetail.exDividendDate.fmt
                                            }}
                                        </time>
                                    </span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="financial ratio (dividend/price) that shows how much a company pays out in dividends each year relative to its stock price"
                                >
                                    Div/Yield:
                                    <span class="text">{{
                                        summaryDetail.dividendYield.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="Actual dividend payments relative to the share price over the previous 12 months"
                                >
                                    Trailing Annual Div/Yield:
                                    <span class="text">{{
                                        summaryDetail
                                            .trailingAnnualDividendYield.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6
                                    title="Actual dividend payments relative to the share price over the previous 12 months"
                                >
                                    5 Year Avg Div/Yield:
                                    <span class="text">{{
                                        summaryDetail.fiveYearAvgDividendYield
                                            .fmt
                                    }}</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- earnings  and earnings history tab -->
                <div
                    class="tab-pane fade"
                    id="earnings"
                    role="tabpanel"
                    aria-labelledby="earnings-tab"
                >
                    <div class="row">
                        <!-- left -->
                        <div class="col-12 col-md-6">
                            <span
                                v-for="(
                                    history, index
                                ) in earningsHistory.history"
                                :key="index"
                            >
                                <div class="info_item">
                                    <h6>
                                        <abbr title="Earnings Per Share"
                                            >EPS</abbr
                                        >
                                        Actual:
                                        <span class="text">{{
                                            history.epsActual.fmt
                                        }}</span>
                                    </h6>
                                    <h6>
                                        <abbr title="Earnings Per Share"
                                            >EPS</abbr
                                        >
                                        Estimate:
                                        <span class="text">{{
                                            history.epsEstimate.fmt
                                        }}</span>
                                    </h6>
                                    <h6>
                                        <abbr title="Earnings Per Share"
                                            >EPS</abbr
                                        >
                                        Difference:
                                        <span class="text">{{
                                            history.epsDifference.fmt
                                        }}</span>
                                    </h6>
                                    <h6>
                                        Period (Quarter):
                                        <span class="text">
                                            {{
                                                history.period
                                                    | removeTrailingMinus
                                            }}
                                            (
                                            <time
                                                :datetime="`${history.quarter.fmt}`"
                                                >{{ history.quarter.fmt }}</time
                                            >
                                            )
                                        </span>
                                    </h6>
                                </div>
                            </span>
                        </div>

                        <!-- right -->
                        <div class="col-12 col-md-6">
                            <div class="info_item">
                                <h6>
                                    Earnings Growth:
                                    <span class="text">{{
                                        financialData.earningsGrowth.fmt
                                    }}</span>
                                </h6>
                                <span
                                    v-for="(date, index) in calendarEvents
                                        .earnings.earningsDate"
                                    :key="index"
                                >
                                    <h6>
                                        Earnings Date:
                                        <span class="text">
                                            <time :datetime="`${date.fmt}`">{{
                                                date.fmt
                                            }}</time>
                                        </span>
                                    </h6>
                                </span>
                                <h6>
                                    Earnings High:
                                    <span class="text">{{
                                        calendarEvents.earnings.earningsHigh.fmt
                                    }}</span>
                                </h6>
                                <h6>
                                    Earnings Low:
                                    <span class="text">{{
                                        calendarEvents.earnings.earningsLow.fmt
                                    }}</span>
                                </h6>
                                <h6>
                                    Earnings Average:
                                    <span class="text">{{
                                        calendarEvents.earnings.earningsAverage
                                            .fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Revenue High:
                                    <span class="text">{{
                                        calendarEvents.earnings.revenueHigh.fmt
                                    }}</span>
                                </h6>
                                <h6>
                                    Revenue Low:
                                    <span class="text">{{
                                        calendarEvents.earnings.revenueLow.fmt
                                    }}</span>
                                </h6>
                                <h6>
                                    Revenue Average:
                                    <span class="text">{{
                                        calendarEvents.earnings.revenueAverage
                                            .fmt
                                    }}</span>
                                </h6>
                            </div>
                            <!-- <div class="info_item">
                                <h6 title="Estimates a company's likely earnings per share for the next 12 months">
                                    Forward P/E:
                                    <span class="text">
                                        {{ summaryDetail.forwardPE.fmt }}
                                    </span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6 title="Calculated based on actual performance statistics rather than expected future performance (estimate)">
                                    Trailing P/E:
                                    <span class="text">
                                        {{ summaryDetail.trailingPE.fmt }}
                                    </span>
                                </h6>
                            </div> -->
                            <div class="info_item">
                                <h6>
                                    Gross Profits:
                                    <span class="text">{{
                                        financialData.grossProfits.fmt
                                    }}</span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Profit Margins:
                                    <span class="text">
                                        {{ financialData.profitMargins.fmt }}
                                        ({{ financialData.profitMargins.raw }})
                                    </span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Return On Equity:
                                    <span class="text">
                                        {{ financialData.returnOnEquity.fmt }}
                                    </span>
                                </h6>
                            </div>
                            <div class="info_item">
                                <h6>
                                    Return On Assets:
                                    <span class="text">
                                        {{ financialData.returnOnAssets.fmt }}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- recommendations  and recommendation trends tab -->
                <div
                    class="tab-pane fade"
                    id="recomTrend"
                    role="tabpanel"
                    aria-labelledby="recomTrend-tab"
                >
                    <!-- summarized recommendation -->
                    <div class="info_item">
                        <h6>
                            Recommendation:
                            <span class="text">
                                {{
                                    financialData.recommendationKey
                                        | capitalized
                                }}
                            </span>
                        </h6>
                        <h6>
                            Recommendation Mean:
                            <span class="text">
                                {{ financialData.recommendationMean.fmt }}
                            </span>
                        </h6>
                        <h6>
                            Number Of Analyst Opinions:
                            <span class="text">
                                {{ financialData.numberOfAnalystOpinions.fmt }}
                            </span>
                        </h6>
                    </div>

                    <!-- comprehensive recommendation -->
                    <div class="row">
                        <h6 class="mt-2 mb-3 text-underlined">
                            Recommendation Trends
                        </h6>

                        <div
                            v-for="(
                                recommendation, index
                            ) in recommendationTrend.trend"
                            :key="index"
                            class="col-12 col-md-6 col-lg-4 mt-1"
                        >
                            <div class="info_item">
                                <h6>
                                    Period:
                                    <span class="text">
                                        {{
                                            recommendation.period
                                                | removeTrailingMinus
                                        }}th ago
                                    </span>
                                </h6>
                                <h6>
                                    Buy:
                                    <span class="text">
                                        {{ recommendation.buy }}
                                    </span>
                                </h6>
                                <h6>
                                    Hold:
                                    <span class="text">
                                        {{ recommendation.hold }}
                                    </span>
                                </h6>
                                <h6>
                                    Sell:
                                    <span class="text">
                                        {{ recommendation.sell }}
                                    </span>
                                </h6>
                                <h6>
                                    Strong Buy:
                                    <span class="text">
                                        {{ recommendation.strongBuy }}
                                    </span>
                                </h6>
                                <h6>
                                    Strong Sell:
                                    <span class="text">
                                        {{ recommendation.strongSell }}
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- upgrade and downgrade history tab -->
                <div
                    class="tab-pane fade"
                    id="udGradeHistory"
                    role="tabpanel"
                    aria-labelledby="udGradeHistory-tab"
                >
                    <div class="row">
                        <div
                            class="
                                d-flex
                                flex-column flex-md-row
                                justify-content-md-between
                            "
                        >
                            <!-- all firm names option for filtering recommendations -->
                            <div class="info_item mb-4">
                                <h6 class="d-inline">Filter By Name:</h6>
                                <select
                                    name="udGradeSelectName"
                                    id="udGradeSelectName"
                                    class="selectField"
                                    v-model="selectedFirmName"
                                >
                                    <option value="" disabled>
                                        Select Firm
                                    </option>
                                    <option
                                        v-for="(
                                            firmName, index
                                        ) in eliminateDuplicateNames"
                                        :key="index"
                                        :value="firmName"
                                    >
                                        {{ firmName }}
                                    </option>
                                </select>
                            </div>

                            <div
                                class="
                                    info_item
                                    flex-row
                                    justify-content-start
                                    align-items-center
                                    mb-4
                                "
                            >
                                <!-- <h6 class="d-inline mb-0">Sort By Date:</h6>
                                <button
                                    class="btn btn-primary text"
                                    @click="sortHistory"
                                >
                                    Sort
                                </button> -->

                                <button
                                    class="btn btn-primary text"
                                    @click="prevTwentyHistory"
                                >
                                    <abbr title="Previous">Prev</abbr> 20
                                </button>
                                <button
                                    class="btn btn-primary text"
                                    @click="nextTwentyHistory"
                                >
                                    Next 20
                                </button>
                            </div>
                        </div>

                        <div
                            class="
                                d-flex
                                flex-column flex-md-row
                                justify-content-md-end
                            "
                        >
                            <div class="info_item px-md-5 mb-0 mb-md-3">
                                <h6>
                                    Page:
                                    <span class="text">
                                        {{ page }} of {{ totalPageNumber }}
                                    </span>
                                </h6>
                            </div>
                            <div class="info_item px-md-5 mb-0 mb-md-3">
                                <h6>
                                    Showing result:
                                    <span class="text">
                                        {{ filteredByName.length }} of
                                        {{ upgradeDowngradeHistory.length }}
                                    </span>
                                    <br />
                                    <span class="text" v-if="selectedFirmName">
                                        {{ selectedFirmName }}:
                                        <!-- {{ allUdGradeHistoryTotal }} -->
                                    </span>
                                </h6>
                            </div>
                        </div>

                        <div class="mt-2 mb-3">
                            <hr />
                        </div>

                        <!-- all filtered firm recommendations -->
                        <div
                            v-for="(udGradeHistory, index) in filteredByName"
                            :key="index"
                            class="col-12 col-md-6 col-lg-4 mt-2"
                        >
                            <div class="info_item">
                                <h6>
                                    S/N:
                                    <span class="text">
                                        {{ index + 1 }}
                                    </span>
                                </h6>
                                <h6>
                                    Firm:
                                    <span class="text">
                                        {{ udGradeHistory.firm }}
                                    </span>
                                </h6>
                                <h6>
                                    From Grade:
                                    <span class="text">
                                        {{ udGradeHistory.fromGrade }}
                                    </span>
                                </h6>
                                <h6>
                                    To Grade:
                                    <span class="text">
                                        {{ udGradeHistory.toGrade }}
                                    </span>
                                </h6>
                                <h6>
                                    Action:
                                    <span class="text">
                                        {{
                                            udGradeHistory.action | capitalized
                                        }}
                                    </span>
                                </h6>
                                <h6>
                                    Date:
                                    <span class="text">
                                        <time
                                            :datetime="
                                                udGradeHistory.epochGradeDate
                                                    | convertEpochToJsDate
                                            "
                                        >
                                            {{
                                                udGradeHistory.epochGradeDate
                                                    | convertEpochToJsDate
                                            }}
                                        </time>
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div v-if="showErrorMessage" class="text-center">
                <p>Quote not found for ticker symbol: {{ name }}</p>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ["info"],

    data() {
        return {
            stockSymbol: "",
            name: "",
            loading: true,
            selectedFirmName: "",
            page: 1,
            pageSize: 20,
            totalPageNumber: "",
            // allUdGradeHistoryTotal: "",
            // showErrorMessage: false,
        };
    },

    computed: {
        invalidInput() {
            return this.stockSymbol === "";
        },

        /* get all api result/data referenced from Main component */
        assetProfile() {
            return this.info.assetProfile;
        },
        defaultKeyStatistics() {
            return this.info.defaultKeyStatistics;
        },
        summaryDetail() {
            return this.info.summaryDetail;
        },
        financialData() {
            return this.info.financialData;
        },
        earningsHistory() {
            return this.info.earningsHistory;
        },
        recommendationTrend() {
            return this.info.recommendationTrend;
        },
        calendarEvents() {
            return this.info.calendarEvents;
        },

        /* sort history data by date in descending order */
        upgradeDowngradeHistory() {
            let array = this.info.upgradeDowngradeHistory.history;
            let newArray = array.sort(function (a, b) {
                return a.epochGradeDate > b.epochGradeDate ? -1 : 1;
            });

            return newArray;
        },

        /* get total page based on all total history and how many i want per page */
        totalPages() {
            return Math.ceil(
                this.upgradeDowngradeHistory.length / this.pageSize
            );
        },

        /* filter and get only first 20 */
        filteredByName() {
            let selectedItem = this.selectedFirmName;
            let filteredArray = [];

            /* Filter and get only first 20 for firm name selected, otherwise, show first 20 from All */
            if (selectedItem) {
                filteredArray = this.upgradeDowngradeHistory.filter((item) => {
                    // console.log(
                    //     item.firm.indexOf(selectedItem) > -1,
                    //     item.firm,
                    //     selectedItem
                    // );
                    return item.firm == selectedItem;
                });
                // this.allUdGradeHistoryTotal == filteredArray.length;
                this.selectedFirmName == "";

                /* current page */
                return filteredArray.slice(
                    (this.page - 1) * this.pageSize,
                    this.page * this.pageSize
                );
            } else {
                let filteredArray = this.upgradeDowngradeHistory;
                // this.allUdGradeHistoryTotal == filteredArray;
                // console.log(filteredArray.length, filteredArray.slice(0, 20));

                /* current page */
                return filteredArray.slice(
                    (this.page - 1) * this.pageSize,
                    this.page * this.pageSize
                );
            }
        },

        /* remove duplicate and return firm name once */
        eliminateDuplicateNames: function () {
            let arrValues = [];
            for (let i = 0; i < this.upgradeDowngradeHistory.length; i++) {
                if (
                    arrValues.indexOf(this.upgradeDowngradeHistory[i].firm) ===
                    -1
                ) {
                    arrValues.push(this.upgradeDowngradeHistory[i].firm);

                    arrValues = arrValues.sort((a, b) => {
                        // if (a < b) {
                        //     return -1;
                        // }
                        // if (a > b) {
                        //     return 1;
                        // }
                        // return 0;

                        return a < b ? -1 : 1;
                    });
                }
            }

            return arrValues;
        },
    },

    filters: {
        /* change to uppercase */
        upperCased: function (value) {
            return value.toUpperCase();
        },

        /* capitalize first letter */
        capitalized: function (value) {
            let firstLetter = value.charAt(0).toUpperCase();
            return firstLetter + value.slice(1);
        },

        /* remove - from before -2q dates */
        removeTrailingMinus: function (value) {
            let i,
                frags = value.split("-");

            for (i = 0; i < frags.length; i++) {
                frags[i] = frags[i].charAt(0) + frags[i].slice(1);
            }
            return frags.join(" ");
        },

        /* convert epoch date to js readable date */
        convertEpochToJsDate: function (value) {
            let timestamp = value;
            let date = new Date(timestamp * 1000);

            let year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

            return `${day}-${month}-${year} | ${hours}:${minutes}:${seconds}`;
        },
    },

    methods: {
        searchStock() {
            /* search if there is an input */
            if (!this.invalidInput) {
                setTimeout(() => {
                    this.loading = false;
                }, 1500);

                this.name = this.stockSymbol.toUpperCase();

                /* call fetchCompanyInfo from action using inputted name as argument */
                this.$store.dispatch("fetchCompanyInfo", this.name);

                // if (this.info == null) {
                //     this.showErrorMessage = true;
                // }
            }

            /* return all to origin state */
            this.stockSymbol = "";
            this.selectedFirmName = "";
            this.loading = true;
        },

        /* increment/decrement number of pages - get next and previous 20 items */
        nextTwentyHistory() {
            this.page = Math.min(this.page + 1, this.totalPages);
        },
        prevTwentyHistory() {
            this.page = Math.max(this.page - 1, 1);
        },
    },

    mounted() {
        // console.log(this.info);

        /* make total page display once mounted */
        this.totalPageNumber = this.totalPages;
    },

    created() {
        /* pass in default symbol and run search once to have default first time data */
        this.stockSymbol = "IDEX";
        this.searchStock();
    },
};
</script>

<style scoped>
.stock_search_form {
    max-width: 400px;
    margin: auto;
    position: relative;
}

.stock_search_label {
    position: absolute;
    left: 15px;
    top: 11px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 0.95rem;
    color: var(--textColor);
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    cursor: text;
}

.stock_search_form input {
    padding: 11px 15px;
    transition: 0.3s ease-in-out;
    font-size: 0.95rem;
    letter-spacing: 1px;
    color: var(--textColor);
    /* text-transform: uppercase; */
}

.stock_search_form input:hover {
    border-color: var(--textColor);
}

.stock_search_form input:valid {
    border-color: #0d6ef8;
}

.stock_search_form input:valid ~ .stock_search_label,
.stock_search_form input:focus ~ .stock_search_label {
    top: -11px;
    left: 5px;
    font-size: 0.825rem;
    background-color: #fff;
    color: #0d6ef8;
}

#search_button {
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 4px 15px;
}

.stock_search_form input:valid ~ #search_button {
    background-color: #0d6ef8;
    border-color: #0d6ef8;
}

.stock_search_form input:valid ~ #search_button:hover {
    background-color: #0b5ed7;
    border-color: #0b5ed7;
}

/* nav tabs ---------- */
.profile_container {
    max-width: 900px;
    margin-top: 40px;
}

.nav-tabs {
    border-bottom-width: 2px;
}

.tab-content {
    background-color: var(--customWhite);
    border: 2px solid var(--lightestGray);
    border-top: 0;
    border-radius: 0 0 4px 4px;
}

.nav-tabs .nav-link {
    font-family: var(--fontJosefin);
    font-size: 1.075rem;
    color: var(--textColor);
    border-bottom: 0 !important;
    margin-right: 2px;
    margin-bottom: -1.85px;
    padding-bottom: 4px;
}

.nav-tabs .nav-link:hover {
    border-color: var(--lightestGray);
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #0d6ef8;
    background-color: var(--customWhite);
    border-width: 2px;
}

.nav-tabs .nav-link.active {
    border-bottom-color: transparent;
}

.tab-content > .tab-pane {
    padding: 25px 25px 20px;
}

.tab-content > .tab-pane .loading_container h6 {
    font-size: 1.125rem;
    margin-right: 12px;
    letter-spacing: 1px;
    color: var(--textColor);
}

.tab-content > .tab-pane .info_item {
    margin-bottom: 0.9375rem;
}

.tab-content > .tab-pane .info_item h6 {
    line-height: 1.5rem;
}

.tab-content > .tab-pane .info_item .text {
    font-family: var(--fontNunito);
    font-size: var(--size14);
    font-weight: 400 !important;
    color: var(--textColor);
}

.tab-content > .tab-pane .info_item h6[title] {
    cursor: help;
}

.tab-content > .tab-pane .info_item .text a {
    text-decoration: none;
}

.tab-content > .tab-pane .info_item .text a:hover {
    text-decoration: underline;
}

#udGradeHistory .info_item button.text {
    color: #fff;
    min-width: 4.5rem;
}

#udGradeHistory .info_item button.text:not(:first-child) {
    margin-left: 8px;
}

#udGradeHistory hr {
    margin: 0.5rem 0 1rem;
}

.tab-content > .tab-pane .info_item .selectField {
    padding: 3px 8px 6px 6px;
    margin-left: 8px;
    border: 1px solid var(--lightestGray);
    color: var(--textColor);
    border-radius: 4px;
}

@media screen and (max-width: 541px) {
    .nav-tabs .nav-link {
        border-color: #eee;
        border-bottom: 1px solid #eee !important;
        margin-bottom: 2px;
    }

    .nav-tabs .nav-link.active {
        border-bottom-color: var(--lightestGray);
    }
}

@media screen and (max-width: 426px) {
    #udGradeHistory .info_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .tab-content > .tab-pane .info_item .selectField {
        margin-left: 0;
    }
}
</style>