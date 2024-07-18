// projectReducers.js
const initialState = { projects: null };

const projectReducers = (state = null, action) => {
  console.log("Action received:", action);
  switch (action.type) {
    case "SET_PROJECTS":
      const newState = {
        ...state,
        projects: action.projects,
      };
      console.log("State before:", state);
      console.log("State after:", newState);
      return newState;
    case "SET_PROJECTS_NULL":
      const clearedState = {
        ...state,
        projects: null,
      };
      console.log("State before:", state);
      console.log("State after clearing projects:", clearedState);
      return clearedState;
    default:
      return state;
  }
};

export default projectReducers;
