import axios from "axios";

const URL = ""; //TODO get rapidapi url

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      //TODO dynamic coordinates
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": "", // TODO get rapidapi key
        "x-rapidapi-host": "", // TODO get rapidapi host
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
