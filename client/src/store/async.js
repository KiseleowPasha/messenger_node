import { createActionLoadMessages } from './reduceMessages';

const url = '/get_messages';
export const fetchMessages = () => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((messages) => dispatch(createActionLoadMessages(messages)))
      .catch((error) => console.log(error));
  };
};
