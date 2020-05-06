import axios from "axios";
export const POST_DETAIL = "POST_DETAIL";

export const fetchPostDetail = (id) => {
  return async (dispatch) => {
    axios
      .get(`https://www.employmentnewsinindia.com/api/v2/postdetail/` + id)
      .then((res) => {
        const post = res.data;
        console.log('action=',post)
        dispatch({ type: POST_DETAIL, postdetail: post });
      });
  };
};
