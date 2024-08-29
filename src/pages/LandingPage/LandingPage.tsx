import React from 'react';
import { UserProvider } from '../../hooks/UserContext/useUserContext';
import UserList from '../../components/organism/UserList/UserList';

const LandingPage = () => {
  return (
    <UserProvider>
        <UserList />
    </UserProvider>
);
}

export default LandingPage