import osmtogeojson from "osmtogeojson";

let convertOSMToGeoJSON = (osm) => {
  return osmtogeojson(osm);
};

export default convertOSMToGeoJSON;
