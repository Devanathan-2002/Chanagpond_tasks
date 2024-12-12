import React from 'react';

import axios from 'axios';

const axiosHttp = axios.create({
    baseURL:window.location.hostname.includes("localhost")?"http://localhost:8000/Users":"http://www.hematitecorp.com"
});


//code for interceptor for request

axiosHttp.interceptors.request.use((config)=>{
    const token = !!sessionStorage.getItem("accessToken");
    return {
        ...config,
        headers:{
            ...axios(token && {'Authorization':`Bearer ${sessionStorage.getItem("accessToken")}`}),
            ...config.headers
        }
    }
},
(error)=>{
    return Promise.reject(error)
}
);



// create interceptor for response 
axiosHttp.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        return Promise.reject(error)
    }
)


// global request http request

export const GET = (url,header={})=>{
    return axiosHttp.get(url,{headers:header})
}

export const DELETE = (url,header={})=>{
    return axiosHttp.delete(url,{headers:header})
}

export const POST = (url,payload,header={})=>{
    return axiosHttp.post(url,payload,{headers:header})
}

export const PUT = (url,payload,header={})=>{
    return axiosHttp.put(url,payload,{headers:header})
}



 