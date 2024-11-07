import axios from "./axios";

export function getIpData(userID, callback) {
    axios
        .post(`/getIPInfo`, {
            userID: userID,
        })
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            return error;
        });
}

export function getSearchData(userID, callback) {
    axios
        .post(`/getSearchData`, {
            userID: userID,
        })
        .then((response) => {
            callback(response);
        })
        .catch((error) => {
            return error;
        });
}

export function postSearch(userID, ipAddress, callback) {
    axios
        .post(`/postSearch`, {
            userID: userID,
            ipAddress: ipAddress,
        })
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            return error;
        });
}
