import { reactive } from "vue";
export const store = reactive ({
    apiUrl: 'https://www.breakingbadapi.com/api/characters',
    title: 'Breaking Bad',
    CharactersData: [],
    CharactersDataLength: 0,
    isLoaded: false
}) 