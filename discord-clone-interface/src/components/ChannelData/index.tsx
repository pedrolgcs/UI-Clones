import React, { useRef, useEffect } from 'react';

// styles
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

// components
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(() => (
          <ChannelMessage
            author="Diego."
            date="20/06/2020"
            content="Fala dev!"
          />
        ))}

        <ChannelMessage
          author="Diego."
          date="20/06/2020"
          content="Fala dev!"
          isBot
        />
        <ChannelMessage
          author="Pelizete"
          date="20/06/2020"
          hasMention
          content={
            <>
              <Mention>@Pedro H.</Mention>, Pedro
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #nintendo" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
