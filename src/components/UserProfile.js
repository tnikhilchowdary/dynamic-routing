import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); 

  return (
    <div>
      <h2>User Profile</h2>
      <p>This is the profile page for user ID: {id}</p>
    </div>
  );
}

export default UserProfile;
