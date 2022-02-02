const axios = require("axios");

let baseDomain = "";

if (process.env.NODE_ENV == "production") {
    baseDomain = "http://localhost:8000/flowchart/";
    console.log("Welcome to Pro");
} else {
    baseDomain = "http://localhost:8000/flowchart/";
    console.log("Welcome to Dev");
}

const instance = axios.create({
    baseURL: baseDomain,
});


export default {

    post(url, data) {
        return instance
            .post(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    },

    get(url) {
        return instance
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    },

    delete(url) {
        return instance
            .delete(url)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    },

    patch(url, data) {
        return instance
            .patch(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    },

    put(url, data) {
        return instance
            .put(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    },
};