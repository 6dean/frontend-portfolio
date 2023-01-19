import axios from "axios";
import qs from "qs";
import { Buffer } from "buffer";

const client_id = "aa989ba7aa2243899f35f44ff371cb75";
const client_secret = "f643e3d86174433e8d580cbcf16b7596";
const auth_token = Buffer.from(
  `${client_id}:${client_secret}`,
  "utf-8"
).toString("base64");

const getAuth = async (setTokenSpotify) => {
  try {
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = "https://accounts.spotify.com/api/token";
    const data = qs.stringify({ grant_type: "client_credentials" });

    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${auth_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    //return access token
    return setTokenSpotify(response.data.access_token);
  } catch (error) {
    //on fail, log the error in console
    console.log(error);
  }
};

export default getAuth;
