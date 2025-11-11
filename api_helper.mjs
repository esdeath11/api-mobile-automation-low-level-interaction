import axios from "axios";

axios.interceptors.request.use(function (config){
    config.metadata = {startTime: new Date()};
    return config;
}, function (error){
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    response.duration = 0;
    response.config.metadata.endTime = new Date();
    response.duration = response.config.metadata.endTime - response.config.metadata.startTime;
    return response;
}, function(error){
    return Promise.reject(error);
});

export async function sendPost({url, body, header, auth}){
    let response;
    try {
        response = await axios.post(url, body, {headers: header, auth: auth});
        return response;
    } catch (error) {
        // console.log('error check', error)
        response = error.response;
        return response;
    }
}

export async function sendPut({url, body, header, auth}){
    let response;
    try {
        // console.log('im here 2')
        response = await axios.put(url, body, {headers: header, auth: auth});
        // console.log(response);
        return response;
    } catch (error) {
        console.log('error check', error)
        response = error.response;
        return response;
    }
}

export async function sendGet({url, header, auth}){
    let response;
    try {
        response = await axios.get(url, {headers: header, auth: auth});
        return response;
    } catch (error) {
        console.log('error check', error)
        response = error.response;
        return response;
    }
}

export async function sendPatch({url, body, header, auth}){
    let response;
    try {
        response = await axios.patch(url, body, {headers: header, auth});
        return response;
    } catch (error) {
        console.log('error check', error)
        response = error.response;
        return response;
    }
}

export async function sendDelete({url, body, header, auth}){
    let response
    try {
        response = await axios.delete(url, {headers:header, data: body, auth: auth});
        return response;
    } catch (error) {
        console.log('error check', error)
        response = error.response;
        return response;
    }
}
