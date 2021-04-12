import { FetchJson } from "../lib/Fetch";

const API = {
  getFeatures: data => FetchJson.get("/features", data)
};

export default API;
