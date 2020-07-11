import { myUri } from './axios';

export const getConfig = () => {
    return {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
    }
};

export const getURL = (path) => {
    const uri = myUri + path;
    return uri;
};
