import React from 'react'
import MemoCode from './USEMEMO-USECALLBACK/Callback'
import MyError from './ERRORBOUNDARY/ErrorBoundary'

const App = () => {
  return (
    <div>
      <MyError>
        <MemoCode />
      </MyError>
      asds
    </div>
  )
}

export default App
