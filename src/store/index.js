import { createStore } from "redux";

const INITIAL_STATE = {
  courses: [{ title: "ReactJS", teacher: "Gabriel M" }],
};

const course = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        courses: [
          ...state.courses,
          { title: action.title, teacher: action.teacher },
        ],
      };

    default:
      return state;
  }
};

const store = createStore(course);

export default store;
