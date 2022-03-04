const initialData = {
  list: []
}
const statusReducers = (state = initialData, action) => {
  console.log("Reducer:", state, action)
  switch (action.type) {
    case "ADD_STATUS":
      const { data } = action.payload;
      return {
        ...state,
        list: [...state.list, data]
      }
    case "REMOVE_STATUS":
      const { removedData } = action.payload;
      return {
        ...state,
        list: [removedData]
      }
    default: return state;

  }
}
export default statusReducers;