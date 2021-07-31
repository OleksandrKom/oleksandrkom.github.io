const initionalState = 11;

const reducerCount = (state = initionalState, action) => {
  // console.log('reducer action >>>',action)

  switch (action.type) {
  case 'COUNTER1_PLUS2':
      return state + 2;
  case 'COUNTER1_MINUS5':
      return state - 5;
  default:
    return state;
  }
};

export default reducerCount;
