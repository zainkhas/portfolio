import React from "react";
const Title = ({ children }) => {
  return (
    <h4 className="font-semibold text-primary dark:text-primary-dark  leading-10 md:text-2xl text-xl">
      {children}
    </h4>
  );
};

export default Title;
