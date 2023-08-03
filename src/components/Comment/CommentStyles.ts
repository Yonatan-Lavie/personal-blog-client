import styled from 'styled-components';

export const CommentContainer = styled.div`
  background-color: #f5f5f5;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const CommentText = styled.p`
  font-size: 16px;
  color: #333;
`;

export const CommentAuthor = styled.span`
  font-size: 14px;
  color: #666;
`;

export const CommentActions = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #007bff;
`;

export const ReplyButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #007bff;
`;

export const ReplyForm = styled.form`
  margin-top: 12px;
`;

export const ReplyInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;
