import axios from "axios";

const getPostByTag = (tag, cbResponse, setError) => {
  axios
    .get(`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app-id": "62e22720e20c350e49136002",
      },
    })
    .then((res) => cbResponse(res))
    .catch((err) => setError(err));
};

export default getPostByTag;
