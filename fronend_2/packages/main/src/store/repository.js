const axios = require("axios");

let baseDomain = "";

if (process.env.NODE_ENV == "production") {
    baseDomain = "http://localhost:8000/";
    console.log("Welcome to Pro");
} else {
    baseDomain = "http://localhost:8000/";
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
                response.data["status"] = 200;
                return response.data;
            })
            .catch((err) => {
                return err;
            });
    },

    get(url) {
        return instance
            .get(url)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err.response.data);
                return err;
            });
    },

    delete(url) {
        return instance
            .delete(url)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err.response);
                return err;
            });
    },

    patch(url, data) {
        return instance
            .patch(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err.response.data);
                return err;
            });
    },

    put(url, data) {
        return instance
            .put(url, data)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err.response.data);
                return err;
            });
    },
};