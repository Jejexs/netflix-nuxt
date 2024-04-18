<template>
    <div :style="backgroundStyle" class="min-h-screen flex flex-col justify-center items-center">
        <div v-if="movie" class="py-10 sm:max-w-2xl sm:mx-auto">
            <div class="bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-6 flex space-x-6 h-full">
                <div class="overflow-visible w-2/5">
                    <img class="rounded-3xl shadow-lg" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
                        alt="Poster du film">
                </div>
                <div class="flex flex-col w-3/5 space-y-3 justify-between">
                    <div class="flex flex-col text-center">
                        <div class="flex justify-between items-start">
                            <h2 class="text-3xl font-bold">{{ movie.title }}</h2>
                            <div class="bg-primary text-white font-bold rounded-xl p-2">{{ movie.vote_average }}</div>
                        </div>
                        <div class="flex flex-grow items-center justify-center w-full p-5">
                            <p class="text-gray-400 text-sm text-center w-full" style="flex-grow: 1;">
                                {{ movie.overview }}
                            </p>
                        </div>
                        <a :href="youtubeLink" target="_blank"
                            class="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300 inline-block text-center mx-8 mt-7">
                            Regarder la bande-annonce
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-primary text-center">
            <p>Chargement...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useTmdb } from '/composables/useTmdb';

const { params } = useRoute();
const { getMoviesById } = useTmdb();
const movie = ref(null);
const youtubeLink = ref('');

onMounted(async () => {
    const data = await getMoviesById(params.id, 'videos');
    movie.value = data;
    youtubeLink.value = data.videos?.results.length > 0 ? `https://www.youtube.com/watch?v=${data.videos.results[0].key}` : '';
});

const backgroundStyle = computed(() => {
    return {
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.value?.backdrop_path}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
});
</script>

<style scoped>
.bg-white {
    background-color: rgba(255, 255, 255, 0.85);
}
</style>
