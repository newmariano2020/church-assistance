import axios from "axios";
import { baseUrl } from ".";

export async function searchAssists(assistanceType, date) {
  const response = await axios.get(`${baseUrl}/assists`, {
    params: {
      assistanceType,
      date,
    },
  });

  return response.data;
}

export async function saveAssistance(data) {
  const response = await axios.post(`${baseUrl}/assists`, data);

  return response.data;
}
