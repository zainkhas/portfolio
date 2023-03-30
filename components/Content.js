import React from "react";
const Content = ({ children }) => {
  return (
    <div className="my-2 font-normal md:text-xl text-base md:leading-10 leading-9 text-primary dark:text-primary-dark">
      {children}
    </div>
  );
};

export default Content;
