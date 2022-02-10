<template>
    <div
        class="
            d-flex
            flex-column
            justify-content-center
            align-items-center
            text-center
            border
            w-50
            mx-auto
            p-4
            rounded
        "
    >
        <h5>No Data Found!</h5>
        <p class="mb-0">{{ msg }}</p>
    </div>
</template>

<script>
export default {
    props: ["msg"],
};
</script>

<style>
</style>