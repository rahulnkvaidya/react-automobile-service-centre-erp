import axios from "axios";
export const POST_LIST = "POST_LIST";
export const POST_DETAIL = "POST_DETAIL";
export const POST_ONCHANGE = "POST_ONCHANGE";
export const fetchPostlist = (company, postval) => {
  return async (dispatch) => {
    if (postval === undefined) {
      var post = null;
      dispatch({ type: POST_LIST, post: post });
    } else {
      axios
      .get(
        `https://www.employmentnewsinindia.com/api/v2/postsearch/` +
          company +
          `/` +
          postval
      )
      .then((res) => {
        const post = res.data;
        dispatch({ type: POST_LIST, post: post });
      });
    }
  };
};

export const fetchPostDetail = (id) => {
  return async (dispatch) => {
    axios
      .get(`https://www.employmentnewsinindia.com/api/v2/postdetail/` + id)
      .then((res) => {
        const post = res.data;
        dispatch({ type: POST_DETAIL, post: post });
      });
  };
};

export const fetchPostChange = (post) => {
  return async (dispatch) => {
    dispatch({ type: POST_ONCHANGE, postchange: post });
  };
};
