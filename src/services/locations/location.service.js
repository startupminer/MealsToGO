import camelize from "camelize";
import { locations } from "./locations.mock";

// Mock Request for location data
export const locationRequest = (searchKey) => {
  return new Promise((resolve, reject) => {
    const locationMockData = locations[searchKey];
    if (!locationMockData) {
      return "Not found";
    }
    resolve(locationMockData);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
