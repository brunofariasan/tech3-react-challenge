import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 40px 20px 0px 20px;
  min-height: 50px;
`;

export const PostCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  border-bottom: 1px solid #2a2a2a;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  cursor: pointer;

  &:first-child {
    border-top: 1px solid #2a2a2a;
  }

  &:hover {
    background-color: #e8e3e3;
    border: 1px solid #e8e3e3;
    border-radius: 10px;
  }
`;

export const PageContainer = styled.div`
  padding: 0px auto;
  padding: 0 20px;
  min-height: 50px;
`;
