import React, { useRef } from 'react'
import { useImperativeHandle } from 'react'
//useImperativeHandle is used for the passing state from child to parent

const chlild = ({ ref }) => {
    useImperativeHandle(ref, () => {
        console.log("any data here ...")
        console.log("we can pass any value also here and it will be get on the parent component")
    })
    return (
        <div>

        </div>
    )
}

const useImperative = () => {
    const childRef = useRef()
    return (
        <div>
            <chlild ref={childRef} />
        </div>
    )
}

export default useImperative
