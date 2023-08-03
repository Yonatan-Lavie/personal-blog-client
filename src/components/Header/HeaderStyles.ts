import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
  }

  li {
    font-size: 18px;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }

  a:hover {
    text-decoration: underline;
  }
`;
