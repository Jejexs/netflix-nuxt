<template>

    <h1 class="text-4xl tracking-widest text-snow text-center uppercase font-bold my-4 mb-8">HOME</h1>
    <hr>
    <div class="space-x-0 flex justify-center -translate-y-4">

    </div>
    <p class="text-snow">News</p>
    <Wrapper display="carrousel">
        <MoviesCard :movie="movie" v-for="movie in movies" />
    </Wrapper>
    <p class="text-snow">cinema</p>
    <Wrapper display="grid">
        <MoviesCard :movie="movie" v-for="movie in movies" />
    </Wrapper>
    <Wrapper display="list">
        <MoviesCard :movie="movie" v-for="movie in movies" />
    </Wrapper>


</template>

<script setup>


const { getMovies } = useTmdb()



const movies = ref([]);

const menu = [
    { params: "upcoming", label: 'Bientot' },
    { params: "popular", label: 'Populaire' },
    { params: "top_rated", label: 'Top' },
    { params: "now_playing", label: "A l'affiche" }
]

async function refineMovies(params) {
    movies.value = await getMovies(params)
}

onMounted(() => {
    refineMovies("upcoming")
})


</script>