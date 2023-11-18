import React, { createContext } from "react";
// import {
//   restuarantsRequest,
//   restaurantTransform,
// } from "restuarant.services.js";

// create a global context with React
export const RestuarantContext = createContext();

// this is what wraps the app and provide certain state
export const RestuarantContextProvider = ({ children }) => {
  // Pass down children to all components this is wrapped around
  return (
    <RestuarantContext.Provider value={{ restuarants: [] }}>
      {children}
    </RestuarantContext.Provider>
  );
};
