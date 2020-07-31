export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const incCount = () => {
  return {
    type: ACTIONS.INCREMENT,
  };
};

export const decCount = () => {
  return {
    type: ACTIONS.DECREMENT,
  };
};

// ASYNC CALLS

// export const addPost = (post, ownProps) => {
//     return (dispatch) => {
//       Axios.post(`${process.env.REACT_APP_NEST_APP_BACKEND_URL}/posts`, {
//         ...post,
//       })
//         .then((response) => {
//           dispatch(addPostToStore({ ...response.data }));
//           ownProps.history.push("/");
//         })
//         .catch((error) => {
//           console.log(error.message);
//         });
//     };
//   };
