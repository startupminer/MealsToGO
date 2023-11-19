import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationProviderContext = ({ children }) => {
  //intialize state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("Virginia Beach");
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  // if keyword input is updated, then it will trigger the search
  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationProviderContext
      // Pass the values that we want to interact with
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationProviderContext>
  );
};
