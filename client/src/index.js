import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { Input } from './components/inputMessage/input';
import { Messages } from './components/messages/messages';
import { NavbarMessages } from './components/navbarMessages/navbarMessages';

export const App = () => {
  const messages = useSelector((state) => state.messages.messages);
  const loaded = useSelector((state) => state.messages.loaded);
  useEffect(() => {
    loaded
      ? fetch('/post_messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(messages),
        })
      : null;
  }, [messages]);
  return (
    <>
      <NavbarMessages />
      <Switch>
        <Route path={'/:chat'}>
          <Messages />
        </Route>
        <Redirect from='/' to='/work' />
      </Switch>
      <Input />
    </>
  );
};
