<template>
    <div class="w-full">
        <header class="fixed top-0 w-full bg-emerald-800 bg-opacity-70 ">
            <nav class="flex h-24 w-5/6 m-auto p-4 justify-between">
                <div class="flex-none"><img src="/img/rainbow-land-logo.png" alt="Rainbow Land Logo"/></div>
                <ul class="list-none flex flex-auto items-stretch justify-around ml-24">
                    <NuxtLink to="/"><li>Home</li></NuxtLink>
                    <NuxtLink to="/about"><li>Info</li></NuxtLink>
                    <NuxtLink to="/location"><li>Location</li></NuxtLink>
                </ul>
            </nav>
        </header>
        <slot></slot>
        <footer></footer>
    </div>
</template>

<script>

</script>

<style scoped>
li {
    @apply flex items-stretch text-white font-bold text-xl;
}

ul {
    @apply max-w-lg;
}

ul > * {
    @apply flex-grow border-solid flex items-center justify-around text-center hover:bg-slate-200 hover:bg-opacity-30 transition duration-200 ease-in;
}

header {
    z-index: 10;
}

img {
    height: 100%;
    width: auto;
}
</style>