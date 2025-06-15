import styled from 'styled-components';

export const Container = styled.nav`
  z-index: 1000;
  background: white;
  padding: 0.8rem 0rem;
  font-size: 1.4rem;
  display: flex;
  background-color: transparent;
`;

export const Crumb = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #555;
  }
`;

export const Separator = styled.span`
  margin: 0rem 0.8rem;
  color: #888;
`;
