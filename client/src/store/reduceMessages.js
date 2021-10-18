const localState = {
  messages: [],
  loaded: false,
  changed: false,
  changedMessage: null,
};

const LOAD_MESSAGES = 'LOAD_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const CHANGED_MESSAGE = 'CHANGED_MESSAGE';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

export const reducerMessages = (state = localState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
        loaded: true,
      };
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    case CHANGED_MESSAGE:
      return { ...state, changed: true, changedMessage: action.payload };
    case CHANGE_MESSAGE: {
      const changedMessage = state.messages.find(
        (message) => message.id === action.payload.id
      );
      changedMessage.text = action.payload.text;
      return {
        ...state,
        changed: false,
        changedMessage: null,
        messages: [...state.messages],
      };
    }
    default:
      return state;
  }
};

export const createActionLoadMessages = (messages) => {
  return {
    type: LOAD_MESSAGES,
    payload: messages,
  };
};

export const createActionAddMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
};

export const createActionDeleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    payload: id,
  };
};

export const createActionChangedMessage = (id) => {
  return {
    type: CHANGED_MESSAGE,
    payload: id,
  };
};

export const createActionChangeMessage = (id, value) => {
  return {
    type: CHANGE_MESSAGE,
    payload: {
      id: id,
      text: value,
    },
  };
};
