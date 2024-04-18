<template>


    <ul
        class="hidden sm:flex sm:mx-auto sm:max-w-4xl text-sm font-medium text-center rounded-lg shadow-lg p-4 bg-secondary dark:bg-secondary">
        <li class="w-full" v-for="{ params, label } in menu" :key="params">
            <button
                class="w-3/4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:z-10 bg-third hover:bg-gray-200 dark:hover:bg-gray-700"
                @click="refineMovie(params)">
                {{ label }}
            </button>
        </li>
    </ul>




    <div class="col-span-3">
        <div class="p-4 bg-secondary rounded-lg shadow-lg">
            <div>
                <ul v-if="movies.length > 0" class="grid grid-cols-5 gap-4 p-3 rounded-lg bg-third">
                    <li v-for="movie in movies" :key="movie.id"
                        class="relative rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <NuxtLink :to="`/movies/${movie.id}`">
                            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt=""
                                class="w-full h-auto">
                            <div
                                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <div class="text-center text-white p-4">
                                    <p class="text-lg font-bold">{{ movie.title }}</p>
                                    <p
                                        class="text-base hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out">
                                        Voir les détails</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
                <p v-else class="text-white text-center">Problème de chargement</p>
            </div>
        </div>
    </div>




</template>

<script setup>

import { ref } from 'vue';

const { getMovies } = useTmdb();

const movies = ref([]);

const menu = [
    { params: "upcoming", label: "Bientot" },
    { params: "popular", label: "Populaire" },
    { params: "top_rated", label: "Top" },
    { params: "now_playing", label: "A l'affiche" }
];

async function refineMovie(params) {
    movies.value = await getMovies(params);
}

onMounted(async () => {
    await refineMovie("upcoming");
});

</script>

<style scoped></style>