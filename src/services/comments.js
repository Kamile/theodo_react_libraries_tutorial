import axios from "axios";

const commentEndpoint = "http://localhost:8000/comments";

export const addComment = async ({ comment }) => {
  const response = await axios({
    method: "post",
    url: `${commentEndpoint}/addComment`,
    data: comment
  });
  return response.data;
};

export const getComments = async () => {
  const response = await axios({
    method: "get",
    url: `${commentEndpoint}/get`
  });
  return response.data;
};
