import axios from "axios";
import {earthquaksFeedURL} from "../config/Config";

//redux can be used when there are complicated state management required..
export function fetchEarthquakesDetails() {
  let url = earthquaksFeedURL;
  return {
    type: "FETCH_EARTHQUAKES",
    payload: axios.get(url)
  }
}
