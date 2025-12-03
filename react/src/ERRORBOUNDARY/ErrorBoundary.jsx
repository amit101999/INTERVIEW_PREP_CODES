import React, { Children } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Fallback = ({ error, resetErrorBoundary }) => {
    return (
        <div>
            <p>Page not found </p>
            <p>page is not working right now</p>
            <button onClick={resetErrorBoundary}>try again</button>
        </div>
    )
}

export default function MyError({ children }) {
    return (
        <ErrorBoundary FallbackComponent={Fallback}
            onReset={() => console.log("redirect to home")}>
            {children}
        </ErrorBoundary>
    )
}

