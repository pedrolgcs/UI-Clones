import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/Icons';

export const Container = styled.div`
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid ${(props) => props.theme.colors.outline};
    border-right: 1px solid ${(props) => props.theme.colors.outline};
  }

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.primary};
  padding: 8px 13px 9px 13px;
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.twitterDarkHover};
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: ${(props) => props.theme.colors.twitter};
`;

export const ProfileInfo = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const BottomMenu = styled.div`
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  z-index: 2;
  background: ${(props) => props.theme.colors.primary};
  border-top: 1px solid ${(props) => props.theme.colors.outline};
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }

  display: flex;
  justify-content: space-between;
`;

const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: ${(props) => props.theme.colors.gray};

  &:hover,
  &.active {
    fill: ${(props) => props.theme.colors.twitter};
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
