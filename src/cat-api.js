import axios from "axios";

const url = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common["x-api-key"] = "live_s71qm7HgSYUOPT7htQYja4LKWwIQBrnddCpXxJ8m6HQ27I6dW3ItLskFAbIx7x1D";

export function fetchBreeds() {
    return axios.get(`${url}/breeds`)
        .then(response => {
            return response.data;
        }).catch (error => {
            throw new Error(error.message);
        });       
};

export function fetchCatByBreed(breedId) {
    return axios.get(`${url}/images/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data;
        });  
};