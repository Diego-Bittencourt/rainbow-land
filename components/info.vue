<template>
    <div class="imgbg w-screen h-screen p-24 flex items-center justify-evenly text-white">
        <div class="shade-card mr-24">
            <h2 class="title">Blog</h2>
            <p class="mb-16">Get to know more about the adventures in the Rainbow Land.</p>
            <a class="link" href="#">Blog</a>
        </div>
        <div class="shade-card">
            <h2 class="title">Seasons</h2>
            <p class="mb-16">Choose the perfect timing to travel with your family and friends</p>
            <a class="link" href="#">Next Seasons</a>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.shade-card {
    @apply bg-gray-900 w-2/6 h-4/6 bg-opacity-30 p-12 hover:bg-opacity-60 transition-all;
    text-shadow: 2px 2px #2a2a2a;
}

.title {
    @apply mb-12 text-2xl;
}

.imgbg {
    background-image: url('../img/lakeview.jpeg');
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-repeat: none;
    background-attachment: fixed;
    background-position: center;
}

.link {
    @apply p-2 bg-cyan-500 shadow-black  mt-6 hover:bg-cyan-900 transition-all ;
}
</style>