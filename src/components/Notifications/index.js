import React from 'react';
import { useState } from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, Notification, NotificationList, Scroll } from './styles';

// import { Container } from './styles';

export default function Notifications() {

  const [ visible, setVisible ] = useState(false);


  function handleToggleVisible(){
    setVisible(!visible);
  }

  return (
    <Container >
      <Badge hasUnread onClick={handleToggleVisible}>
        <MdNotifications color="#7159c1" size={20}/>
      </Badge>
      <NotificationList visible={visible} >
      <Scroll>
        <Notification unread>
          <p>Você tem um novo agendamento</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você tem um novo agendamento</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você tem um novo agendamento</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você tem um novo agendamento</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        <Notification>
          <p>Você tem um novo agendamento</p>
          <time>há 2 dias</time>
          <button type="button">Marcar como lida</button>
        </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
