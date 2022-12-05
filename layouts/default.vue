<template>
    <div class="w-full">
        <header class="fixed top-0 w-full bg-emerald-800 bg-opacity-70 ">
            <nav class="flex h-24 w-5/6 m-auto p-4 justify-between">
                <div class="flex-none"><img src="img/rainbow-land-logo.png" alt="Rainbow Land Logo"/></div>
                <ul class="list-none flex flex-auto items-stretch justify-around ml-24">
                    <NuxtLink to="/"><li>Home</li></NuxtLink>
                    <NuxtLink to="/about"><li>Info</li></NuxtLink>
                    <NuxtLink to="/location"><li>Location</li></NuxtLink>
                </ul>
            </nav>
        </header>
        <slot></slot>
        <footer class="bg-gray-900 text-white py-16 px-12 border-t-2 border-gray-300 flex items-center justify-between">
            <div class="mr-3 text-sm">
                <h3 class="text-xl font-bold">Rainbow Land</h3>
                <p>Something Street</p>
                <p>Something State</p>
                <p>New Zealand</p>
                <p><font-awesome-icon class="font-sm" icon="fa-solid fa-location-dot" /> Postal Code - 000-0000</p>
                <p><font-awesome-icon class="font-sm" icon="fa-solid fa-phone" /> Phone: 000-000-0000</p>
                <hr class="mt-4 mb-4"/>
                <h3 class="text-xl font-bold">Rainbow School</h3>
                <p>Something Street</p>
                <p>Aichi-Ken</p>
                <p>Japan</p>
                <p><font-awesome-icon class="font-sm" icon="fa-solid fa-location-dot" /> Postal Code - 000-0000</p>
                <p><font-awesome-icon class="font-sm" icon="fa-solid fa-phone" /> Phone: 090-123-1234</p>
            </div>
            <div class="mr-3 p4">
                <form class="focus-within:text-gray-300">
                    <h3 class="w-full my-4 font-bold text-2xl">Send us a message:</h3>
                    <label>Email</label>
                    <input type="email" class="w-full h-4 block p-4 mb-12 focus:outline-none focus:bg-blue-200 rounded-sm border-gray-400" />
                    <label class="block">Message</label>
                    <textarea class="w-full focus:outline-none focus:bg-blue-200 rounded-sm border-gray-400" rows="6"></textarea>
                    <button type="submit" class="border-gray-400 rounded-sm mt-8 bg-gray-500 py-2 px-4 transition hover:bg-gray-700">Send</button>
                </form>
            </div>
            <div class="mr-3">
                <div class="border-l-sky-200 border-r-sky-200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.877670347048!2d173.9598512920433!3d-35.21739212104256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2c200e17779687%3A0xb1d618e2756a4733!2sNova%20Zel%C3%A2ndia!5e0!3m2!1spt-BR!2sjp!4v1669963541216!5m2!1spt-BR!2sjp" 
                    width="400" 
                    height="300" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
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