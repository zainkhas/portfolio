import React from "react";
const Content = ({ children }) => {
  return (
    <div className="my-2 font-normal text-xl leading-10 text-primary">
      {children}
    </div>
  );
};

export default Content;
