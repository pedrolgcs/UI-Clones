import styled from 'styled-components';

export const Container = styled.div`
  padding: 3px 6px 0 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }

  grid-area: UL;
  display: flex;
  flex-direction: column;
`;

export const Role = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
  margin-top: 20px;
  text-transform: uppercase;
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }

  flex-shrink: 0;
`;
