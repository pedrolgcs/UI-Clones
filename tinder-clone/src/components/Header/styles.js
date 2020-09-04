import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);

  > img {
    height: 40px;
  }

  > svg {
    cursor: pointer;
  }
`;
