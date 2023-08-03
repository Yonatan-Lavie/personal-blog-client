// containers/UserProfile/UserProfile.tsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateUserProfilePicture } from '../features/user/userThunks';
import UserProfileForm from '../forms/UserProfileForm';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.user);

  const handleProfilePictureUpdate = (photoData: string) => {
    dispatch(updateUserProfilePicture(photoData));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {user && (
        <div>
          <h2>User Profile</h2>
          {/* Display user information */}
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          {/* Display user profile picture */}
          <img src={user.photo} alt="Profile" width="150" />
          {/* Implement form for updating user profile */}
          <UserProfileForm onProfilePictureUpdate={handleProfilePictureUpdate} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
