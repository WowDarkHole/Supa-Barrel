export const addStatusValueAction = (data) => {
  return {
    type: "ADD_STATUS",
    payload: {
      data: data,
    },
  }
}
export const removeStatusValueAction = (data) => {
  return {
    type: "REMOVE_STATUS",
    payload: {
      removedData: data,
    }
  }
}