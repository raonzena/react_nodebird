const initialState = {
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'raonzena',
    },
    content: 'first post',
    img: 'https://newsimg.sedaily.com/2019/01/23/1VE5F3W5WP_18.png',
  }],
  imagePaths: []
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
  type: ADD_POST
};
const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: 'raonzena'
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      }
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}