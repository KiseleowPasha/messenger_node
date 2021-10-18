const localState = {
  value: '',
};

const CHANGE_VALUE_IN_INPUT = 'CHANGE_VALUE_IN_INPUT';

export const reducerInput = (state = localState, action) => {
  switch (action.type) {
    case CHANGE_VALUE_IN_INPUT:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const createActionChangeValueInInput = (value) => {
  return {
    type: CHANGE_VALUE_IN_INPUT,
    payload: value,
  };
};
