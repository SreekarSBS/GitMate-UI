import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const user = useSelector((store) => store.user);
  const location = useLocation()
  if(location.pathname == "/profile")
  return user && (
    <div>
      Profile
      <EditProfile user = {user} />
    </div>
  )
}

export default Profile
