import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  padding: 5px 3px;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: var(--symbol);
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  cursor: pointer;
  color: var(--symbol);
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

