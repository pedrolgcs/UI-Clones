import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: ${(props) => props.theme.colors.twitter};
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.gray};
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  position: relative;

  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: ${(props) => props.theme.colors.gray};
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.twitter};
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: ${(props) => props.theme.colors.gray};

      display: flex;
      align-items: center;

      > svg {
        fill: ${(props) => props.theme.colors.gray};
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.colors.gray};
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.gray};

    & + span {
      margin-left: 10px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 4vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
