import { FetchJson } from "../lib/Fetch";

const API = {
  getFeatures: data => FetchJson.get("/features", data),
  getProductItems: data => FetchJson.get("/items", data)
};

export default API;
