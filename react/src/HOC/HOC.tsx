import React from "react";

const Button = ({ children }) => {
  return <div>{children}</div>;
};

// now in here we can define the children in any format and then they is a wrapper that is
// HOC component Button as above
const RedBtn = () => {
  return <div>Red Button</div>;
};
const BlueBtn = () => {
  return <div>Blue Button</div>;
};

const HOC = () => {
  return (
    <>
      <Button>
        <RedBtn />
      </Button>
      <Button>
        <BlueBtn />
      </Button>
    </>
  );
};

export default HOC;
