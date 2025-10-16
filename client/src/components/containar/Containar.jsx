/* eslint-disable react/prop-types */
// import React from 'react'

const Containar = ({ children, className }) => {
  return (
    <div className={`xl:container mx-auto ${className} px-4 md:px-8 lg:px-12`}>
      {children}
    </div>
  );
};

export default Containar;
