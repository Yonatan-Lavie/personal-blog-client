// containers/UserProfile/UserProfile.tsx
import React, { useReducer } from 'react';
import { Button, Container } from '@mui/material';
import UserProfileComponent  from '../../components/User/UserProfile'
import UpdateUserProfileForm from '../../components/User/UpdateUserProfileForm';

type State = boolean;
type Action = { type: string; };

const initialState: State = false;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_MODE':
      return true;
    case 'VIEW_MODE':
      return false;
    default:
      return state;
  }
}

const UserProfile: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container maxWidth="sm">

      {
        state === true ? 
        <>
          <UpdateUserProfileForm />
          <Button variant="contained" onClick={() => dispatch({type: 'VIEW_MODE'})}>Cancel</Button>
        </>
        :
        <>
          <UserProfileComponent />
          <Button variant="contained" onClick={() => dispatch({type: 'UPDATE_MODE'})}>Update</Button>
        </>
      }
    </Container>
  );
};

export default UserProfile;
