import React, { useEffect, useMemo, useState } from "react";

const Memo = React.memo(({ count }) => {
  console.log("rendered : ", count);
  return <div></div>;
});

const MemoCode = () => {
  const [c, setC] = useState(0);
  return (
    <div>
      <Memo count={`count : ${c}`} />
      {/* will render if the count valuse changes*/}

      <Memo count={0} />
      {/* not render */}

      <Memo count={{ name: "age" }} />
      {/* since pure components like use Memo the prop is passed as reference since it object
      now it will render everytime so we use  
      aand also if we pass and function it will do the same so for function we use useCallBack for this problem */}
      <button onClick={() => setC((prev) => prev + 1)}>inc by 1</button>
      count {c}
    </div>
  );
};

export default MemoCode;
