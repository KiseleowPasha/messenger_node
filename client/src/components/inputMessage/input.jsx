import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createActionAddMessage,
  createActionChangeMessage,
} from '../../store/reduceMessages';
import { createActionChangeValueInInput } from '../../store/reducerInput';
import { useLocation } from 'react-router';
import './input.css';

export const Input = () => {
  const valueInInput = useSelector((state) => state.input.value);
  const changed = useSelector((state) => state.messages.changed);
  const changedMessage = useSelector((state) => state.messages.changedMessage);
  const dispatch = useDispatch();

  const handlerChangeValueInInput = ({ target }) => {
    dispatch(createActionChangeValueInInput(target.value));
  };
  const chat = useLocation().pathname.slice(1);

  const handlerAddMessage = (event) => {
    event.preventDefault();
    if (valueInInput !== '') {
      dispatch(
        createActionAddMessage({
          id: Date.now(),
          chat: chat,
          author: 'Я',
          text: valueInInput,
        })
      );
      dispatch(createActionChangeValueInInput(''));
    }
  };

  const handlerChangeMessage = (event) => {
    event.preventDefault();
    if (valueInInput !== '') {
      dispatch(createActionChangeMessage(changedMessage, valueInInput));
      dispatch(createActionChangeValueInInput(''));
    }
  };
  return (
    <form className='message-form-input'>
      <textarea
        type='text'
        placeholder='Введите сообщение'
        value={valueInInput}
        onChange={handlerChangeValueInInput}
      />
      <button
        type='submit'
        onClick={changed ? handlerChangeMessage : handlerAddMessage}
      >
        {changed ? 'Изменить' : 'Отправить'}
      </button>
    </form>
  );
};
