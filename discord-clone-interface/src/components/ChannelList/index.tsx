import React from 'react';

// styles
import { Container, Category, AddCategoryIcon } from './styles';

// components
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Chat Channel</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="nintendo" selected />
      <ChannelButton channelName="blizzard" />
      <ChannelButton channelName="LOL" />
    </Container>
  );
};

export default ChannelList;
