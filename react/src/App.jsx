import React from "react";
import MemoCode from "./USEMEMO-USECALLBACK/Callback";
import MyError from "./ERRORBOUNDARY/ErrorBoundary";
import Request from "./RequestCancelation/Request";
import Countter from "./counterQuestion/Counter";
import FetchingList from "./fetchingList/FethchingList";

const App = () => {
  return (
    <div>
      {/* <MyError>
        <MemoCode />
      </MyError> */}
      {/* <Request /> */}
      {/* <Countter /> */}
      <FetchingList />
    </div>
  );
};

export default App;
