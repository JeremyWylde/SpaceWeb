import axios from "axios";

export const api = {
    getNews() {
        return axios.get('https://sweb.ru/export/turbojournal/')
    }
};
