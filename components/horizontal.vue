<template>
    <section class="width-full border-t-2 bg-[#2d2418] flex justify-around border-amber-900 px-36 text-white">
        <div class="flex flex-col items-center justify-between text-center py-12 px-8">
            <div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
            <h2 class="text-2xl text-yellow-500 font-bold mb-4">Our Activities</h2>
            <p class="mb-4">
                There are a wide variety of outdoor activities in our colorful land. There are many
                activities that surely become beautiful memories and new experiences.
            </p>
            <a class="text-emerald-500 font-bold border-b-2 border-b-transparent hover:border-b-emerald-500 hover:border-b-2 transition-all" href="#">Learn More</a>
        </div>
        <div class="flex flex-col items-center content-center justify-between text-center py-12 px-8 bg-[#403322]">
            <div class="icon"><font-awesome-icon icon="fa-solid fa-kiwi-bird" /></div>
            <h2 class="text-2xl text-yellow-500 font-bold mb-4">New adventures in New Zealand</h2>
            <p class="mb-4">
                There are many adventures waiting for you in the lands of New Zealand. Visiting
                a vibrant and multicultural enviromnment is an opportunity to learn and experience new things
            </p>
            <a class="text-emerald-500 font-bold border-b-2 border-b-transparent hover:border-b-emerald-500 hover:border-b-2 transition-all" href="#">Learn More</a>
        </div>
        <div class="flex flex-col items-center content-center justify-between text-center py-12 px-8">
            <div class="icon"><font-awesome-icon icon="fa-solid fa-comment-dots" /></div>
            <h2 class="text-2xl text-yellow-500 font-bold mb-4">Improve your English</h2>
            <p class="mb-4">
                Being in an english speaking country is the ultimate way to learn and develop your
                english skills. Even better when having the support of experienced teachers to guide
                you through the experience.
            </p>
            <a class="text-emerald-500 font-bold border-b-2 border-b-transparent hover:border-b-emerald-500 hover:border-b-2 transition-all" href="#">Learn More</a>
        </div>
    </section>
</template>

<script lang="ts" setup>
    
</script>

<style scoped>
.icon {
    @apply rounded-full text-xl border h-12 w-12 border-yellow-500 p-1 text-yellow-500 flex items-center justify-center mb-8;
}
</style>
