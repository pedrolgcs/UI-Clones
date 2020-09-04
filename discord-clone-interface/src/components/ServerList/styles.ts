import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  padding: 11px 0;
  overflow-y: scroll;

  background-color: var(--tertiary);

  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;
