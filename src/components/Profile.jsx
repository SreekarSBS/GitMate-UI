import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  
  // get the data on
  
  return user && (
    <div className='m-6'>
  
      <EditProfile user = {user} />
    </div>
  )
}

export default Profile
