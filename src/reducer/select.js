const select = (state, action) => {
  const { payload } = action;
  const { target } = payload;

  return {
    ...state,
    selected: target,
  };
};

export default select;
