import React, { useEffect, useState } from 'react'

const Request = () => {
    const controller = new AbortController();
    const [data, setData] = useState();


    // axios use say cacelation like fetch  
    useEffect(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: controller.signal })

        const d = await res.json()
        const x = JSON.stringify(d)
        console.log("helll")
        console.log(x.userId)

        // if we want to cacel request after 1sec
        setTimeout(() => controller.abort(), 1000);

        // we want to cancel request if compoent get unmounts
        return () => (
            controller.abort()
        )
    }, [])
    return (
        <div>

        </div>
    )
}

export default Request



