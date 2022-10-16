import React from "react";
const Section = ({ id, children }) => {
  return (
    <section className="mt-10" id={id}>
      {children}
    </section>
  );
};

export default Section;
