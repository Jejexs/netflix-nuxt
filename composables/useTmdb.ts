export const useTmdb = () => {

    const config = useRuntimeConfig();

    const urlBase = 'https://api.themoviedb.org/3';
    const queryParams = '?language=fr-FR&page=1';
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${config.public.tmdbKey}`
        }
    };



    async function getMovies(params) {
        const response = await $fetch(urlBase + '/movie/' + params + queryParams, options);
        return response.results;
    }

    async function getMoviesById(id, append) {
        const response = await $fetch(urlBase + '/movie/' + id + queryParams + `&append_to_response=${append}`, options);
        return response;
    }

    return { getMovies, getMoviesById }


}