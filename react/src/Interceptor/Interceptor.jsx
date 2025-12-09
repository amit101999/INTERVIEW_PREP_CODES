import React from 'react'

const Interceptor = () => {
    // when we wnat to attach token while sending request
    // request interceptor
    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            console.log("➡️ Request:", config.url);
            return config; // MUST return config
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // response interceptor
    axios.interceptors.response.use(
        (response) => {
            console.log("⬅️ Response:", response.status);
            return response; // MUST return response
        },
        (error) => {
            console.error("API Error:", error.response?.status);
            return Promise.reject(error);
        }
    );

    return (
        <div>

        </div>
    )
}

export default Interceptor
const UnAuthroized401 = () => {
    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response.status === 401) {
                // refresh token logic
                const refreshToken = localStorage.getItem("refresh");

                // get new refersh token 
                const res = await axios.post("/auth/refresh", { refreshToken });

                const newToken = res.data.token;
                localStorage.setItem("token", newToken);

                // Retry original request with new token
                error.config.headers.Authorization = `Bearer ${newToken}`;
                return axios(error.config); // retry request
            }

            return Promise.reject(error);
        }
    );

    // here if the server reposonds referesh token expires then we again attach a new refersh token

    return (
        <>
            Hello
        </>
    )
}


const GlobalLogic = () => {
    // now here we are using redux state gloable loading  to set and update loading states
    axios.interceptors.request.use((config) => {
        store.dispatch(startLoading());
        return config;
    });

    axios.interceptors.response.use(
        (res) => {
            store.dispatch(stopLoading());
            return res;
        },
        (err) => {
            store.dispatch(stopLoading());
            return Promise.reject(err);
        }
    );

    return (
        <>
            global logic
        </>
    )
}

// now we can also converts data before we recive actual data from request
axios.interceptors.response.use((res) => {
    res.data = {
        status: res.status,
        payload: res.data,
        time: new Date(),
    };
    return res;
});

// debugging
axios.interceptors.request.use((config) => {
    console.log("Request:", config.method, config.url, config.data);
    return config;
});