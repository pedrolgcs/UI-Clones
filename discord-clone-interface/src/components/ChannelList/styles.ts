import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  padding: 24px 16px 0 16px;
  background-color: var(--secondary);

  grid-area: CL;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  margin-bottom: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  cursor: pointer;
  color: var(--symbol);
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
