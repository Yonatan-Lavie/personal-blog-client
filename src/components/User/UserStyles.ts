import styled from 'styled-components';

export const UserContainer = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const UserProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled.h2`
  font-size: 24px;
  color: #333;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  color: #666;
`;
