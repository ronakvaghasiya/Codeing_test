import ApiService from "../services/api";

export const FanUser = async (data) => {
  try {
    const Resultdata = await ApiService.Meta.FetchFanData(data);
    return Resultdata;
  } catch (error) {
    console.error(error);
  }
};

export const TelentUser = async (data) => {
  try {
    const Resultdata = await ApiService.Meta.FetchTelentData(data);
    return Resultdata;
  } catch (error) {
    console.error(error);
  }
};
