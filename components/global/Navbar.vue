<template>
    <nav class="bg-black flex justify-between items-center p-4">
        <h1 class="text-primary font-bold text-xl">NETFLIX</h1>
        <ul class="flex justify-center items-center flex-grow">
            <li v-for="{ path, name } in menu" :key="path" class="mx-2 hover:bg-gray-800 p-2 rounded">
                <NuxtLink :to="path" class="text-white hover:text-gray-300 transition-colors duration-300">{{ name }}
                </NuxtLink>
            </li>
        </ul>
        <div class="w-24"><!-- spacer to align NETFLIX and buttons --></div>
    </nav>
</template>

<script setup>
const menu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Movies', path: '/movies' },
]
</script>

<style scoped>
.router-link-exact-active {
    @apply text-primary;
}
</style>
