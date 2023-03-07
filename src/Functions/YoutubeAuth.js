import qs from "qs";
import axios from "axios";

const getSubscriptions = (setTokenYoutube) => {
  const client_id = process.env.REACT_APP_YOUTUBE_ID;
  const client_secret = process.env.REACT_APP_YOUTUBE_CLIENT_SECRET;
  const refresh_token = process.env.REACT_APP_YOUTUBE_REFRESH_TOKEN;

  const token_url = "https://oauth2.googleapis.com/token";

  const getNewAccessToken = async () => {
    try {
      const data = {
        client_id,
        client_secret,
        refresh_token,
        grant_type: "refresh_token",
      };

      const response = await axios.post(token_url, qs.stringify(data), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      return setTokenYoutube(response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  getNewAccessToken();
};

export default getSubscriptions;
