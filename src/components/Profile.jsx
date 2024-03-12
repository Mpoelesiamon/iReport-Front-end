import React, { useState } from 'react';
import './FormStyles.css'; // Import the external CSS file
import NavBar from './NavBar'; // Import the NavBar component

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle profile picture change
  const handleProfilePictureChange = (event) => {
    const newProfilePicture = event.target.files[0];
    setProfilePicture(newProfilePicture);
  };

  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <div className="wrapper">
        <h1>User Profile</h1>

        {/* Profile Picture */}
        <div className="input-box">
          <div className="profile-picture-container">
            {profilePicture && (
              <div className="circle">
                <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="profile-picture" />
              </div>
            )}
            {!profilePicture && (
              <div className="profile-picture-placeholder"></div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} className="file-input" />
        </div>

        {/* Buttons */}
        <div className="button-container">
          <div className="flex flex-col items-center">
            <button className="button">My Profile</button>
            <button className="button">My Reports</button>
            <button className="button">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
