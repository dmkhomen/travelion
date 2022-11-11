import axios from "axios";

const URL = ""; //TODO get rapidapi url

const options = {
  //TODO dynamic coordinates
  params: {
    bl_latitude: "11.888888",
    tr_latitude: "12.888888",
    bl_longitude: "110.888888",
    tr_longitude: "111.888888",
  },
  headers: {
    "x-rapidapi-key": "", // TODO get rapidapi key
    "x-rapidapi-host": "", // TODO get rapidapi host
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
