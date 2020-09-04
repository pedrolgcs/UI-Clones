import styled from 'styled-components';
import TinderCard from 'react-tinder-card';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 5vh;
`;

export const Tinder = styled(TinderCard)`
  position: absolute;
`;

export const Card = styled.div`
  position: relative;
  width: 600px;
  max-width: 85vw;
  height: 50vh;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;

  h3 {
    position: absolute;
    bottom: 10px;
    color: #fff;
  }
`;
