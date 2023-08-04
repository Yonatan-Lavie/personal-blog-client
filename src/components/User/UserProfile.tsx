import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Stack } from '@mui/material';

const UserProfile: React.FC = () => {
  const { userProfile, loading, error } = useSelector((state: RootState) => state.user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {userProfile && (
        <Stack spacing={2}>
          <div>{userProfile.username}</div>
          <div>{userProfile.firstName}</div>
          <div>{userProfile.lastName}</div>
          <div>{userProfile.email}</div>
          <div>{userProfile.status}</div>
          <div>{userProfile.role}</div>
          <div>{userProfile.photo}</div>
        </Stack>
      )}
    </div>
  );
};

export default UserProfile;
