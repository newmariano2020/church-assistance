import axios from "axios";
import { baseUrl } from ".";

export async function getMembersFromApi(searchTerm) {
  const response = searchTerm
    ? await axios.get(`${baseUrl}/members?searchTerm=${searchTerm}`)
    : await axios.get(`${baseUrl}/members`);

  return response.data;
}

export async function saveMember(member) {
  const response = await axios.post(`${baseUrl}/members`, member);

  return response.data;
}
