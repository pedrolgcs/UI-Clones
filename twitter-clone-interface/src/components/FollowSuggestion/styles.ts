import styled from 'styled-components';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const FollowButton = styled(Button)`
  padding: 6px 17px;
`;