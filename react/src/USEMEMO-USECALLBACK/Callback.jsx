import React, { useCallback, useEffect, useMemo, useState } from "react";

const Memo = React.memo(({ data, handler }) => {
  console.log("rendered : ", data, handler);
  return <div></div>;
});

const MemoCode = () => {
  const [c, setC] = useState(0);
  const data = useCallback(() => ({ age: 20 }), [])
  const handler = useCallback(() => { console.log("func is passed") }, []);
  return (
    <div>
      <Memo onClick={handler} data={data} />
      {/* now since we have memoized these values use use memo so we can it will not re render
      the MEMO component again and again */}
      <button onClick={() => setC((prev) => prev + 1)}>inc by 1</button>
      count {c}
    </div>
  );
};

export default MemoCode;
