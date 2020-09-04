import styled, { css } from 'styled-components';

import { Chat, Favorite, Rocketseat } from '../../styles/Icons';

export const Container = styled.div`
  max-width: 100%;
  padding: 14px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.outline};

  display: flex;
  flex-direction: column;
`;

export const Retweeted = styled.div`
  font-size: 13px;
  color: ${(props) => props.theme.colors.gray};

  display: flex;
  align-items: center;
`;

export const RocketseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: ${(props) => props.theme.colors.gray};
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.gray};

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2px;
  padding-left: 60px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: 15px;
  white-space: nowrap;

  display: flex;
  align-items: center;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: ${(props) => props.theme.colors.gray};
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  margin: 0 10px;
  background: ${(props) => props.theme.colors.gray};
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: min(285px, max(175px, 41vw));
  margin-top: 12px;
  background: ${(props) => props.theme.colors.outline};
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  width: 100%;
  margin: 11px auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  font-size: 14px;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: ${(props) => props.theme.colors.gray};
    }
  }

  &:nth-child(2) {
    color: ${(props) => props.theme.colors.retweet};
    > svg path {
      fill: ${(props) => props.theme.colors.retweet};
    }
  }

  &:nth-child(3) {
    color: ${(props) => props.theme.colors.like};
    > svg {
      fill: ${(props) => props.theme.colors.like};
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Rocketseat)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
