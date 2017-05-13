//The idea of this file is to abstract out the details about how we retreive earthquake info.
//It would be nice to move reading earthquakes info from geojsonp and render that on Google maps into different components.
//That time we can replace this file implemention to provide info from components instead working on window object
import { baseApiUrl } from "./Config";

export function getAllEarthquakes() {
  const {earthquakes} = window.sandbox;
  return earthquakes;
}

export function getAllEarthquakesMarkers() {
  const {markers} = window.sandbox;
  return markers;
}

export function getAllEarthquakesPlaces() {
  const {earthquakePlaces} = window.sandbox;
  return earthquakePlaces;
}
export function getMagnitudeRange() {
  const {magnitudeRange} = window.sandbox;
  return magnitudeRange;
}

export function setMapCenter(lat, lng) {
  const latLng = new google.maps.LatLng(lat, lng);
  const {map} = window.sandbox;
  map.setCenter(latLng);

}

export function resetMapCenter() {
  const latLng = new google.maps.LatLng(2.8,-187.3);
  const {map} = window.sandbox;
  map.setCenter(latLng);
}
export function toDateTime(timestamp) {
  const date = new Date(timestamp);
  return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
}
