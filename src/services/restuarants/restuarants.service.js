import { mocks } from "./restuarants.context";
import camelize from "camelize";
// Get restuarants data from the mock service
export const restuarantsRequest = (location = "37.7749295,-122.4194155") => {
  console.log(mocks[location]);
  // Promise returns a function internally that has a resolve and reject function
  return new Promise((resolve, reject) => {
    const mocks = mocks[location];
    if (!mocks) {
      reject("No mocks for location");
    }
    // if we have the mock, then resolve
    resolve(mocks);
  });
};

const restaurantTransform = (result) => {
  // Camelize library transforms api response and recursively makes object fields camel case
  const mappedResults = result.map((restuarant) => {
    // return original restuarants data and add two new properties - isOpenNow and isClosedTemporarily
    return {
      ...restuarant,
      isOpenNow: restuarant.opening_hours && restuarant.opening_hours.isOpenNow,
      isClosedTemporarily: restuarant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
// This does not return immediately but sometime in the feature
// Chain of events when we make api request
restuarantsRequest()
  .then(restaurantTransform)
  .then((transformResponse) => {
    console.log(transformResponse);
  })
  .catch((err) => {
    console.log(err);
  });
