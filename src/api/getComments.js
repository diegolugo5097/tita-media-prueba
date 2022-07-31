import axios from "axios";

const getComments = (id, setResponse, setError) => {
  axios
    .get(`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "app-id": "62e22720e20c350e49136002",
      },
    })
    .then((res) => setResponse(res))
    .catch((err) => setError(err));
};

export default getComments;
