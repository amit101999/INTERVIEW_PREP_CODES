import React, { useMemo, useState } from 'react'
// useMemo chaches the values of any state values
const UseMemo = () => {

    const [count, setCount] = useState(0)
    const data = useMemo(() => {
        // some calcualtion
    }, [count])

    // now if count values will be chached it will not recalculate again and again
    return (
        <div>
            Hello
        </div>
    )
}

export default UseMemo
