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
        <footer class="bg-gray-900 text-white pt-16 px-8 pb-8 border-t-2 border-gray-300">
            <div class="mr-3 text-sm">
                <h3 class="text-xl font-bold">Rainbow Land</h3>
                <p>Something Street</p>
                <p>Something State</p>
                <p>New Zealand</p>
                <p>Postal Code - 000-0000</p>
            </div>
            <div class="mr-3">
                
            </div>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
li {
    @apply flex items-stretch font-bold text-xl;
}

ul {
    @apply max-w-lg text-white;
}

ul > * {
    @apply  border-x-transparent border-x flex-grow border-solid flex items-center justify-around text-center hover:bg-slate-200 hover:bg-opacity-30 hover:border-gray-200 transition duration-200 ease-in;
}

header {
    z-index: 30;
}

img {
    height: 100%;
    width: auto;
}
</style>