const axios = require("axios");
const FileDownload = require("js-file-download");

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

    downloadReport(url) {
        return instance
            .get(url, {
                responseType: "blob",
            })
            .then((response) => {
                FileDownload(response.data, "FinalHost.csv");
                response = { status: true };
                return response;
            })
            .catch((err) => {
                console.error(err.response.data);
                return err.response.data;
            });
    },
};