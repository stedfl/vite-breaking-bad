import { reactive } from "vue";
export const store = reactive ({
    apiUrl: 'https://www.breakingbadapi.com/api/characters',
    title: 'Breaking Bad',
    charactersData: [],
    filteredData: [],
    categorySearch: '',
    categoriesList: [],
    statusSearch: '',
    statusList: [],
    isLoaded: false
}) 