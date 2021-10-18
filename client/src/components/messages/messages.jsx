import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMessages } from '../../store/async';
import { Message } from '../message/message';
import './messages.css';

export const Messages = () => {
  const messages = useSelector((state) => state.messages.messages);
  const loaded = useSelector((state) => state.messages.loaded);
  const dispatch = useDispatch();
  const { chat } = useParams();
  const currentMessages = messages.filter((message) => message.chat === chat);
  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div className='messages'>
      {currentMessages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};
