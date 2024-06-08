import React from 'react';
import './InstructorProfile.css';

function InstructorProfile({ name, photo, biography }) {
  return (
    <div className="instructor-profile">
      <img src={photo} alt={`${name}'s photo`} className="instructor-photo" />
      <div className="instructor-details">
        <h2 className="instructor-name">{name}</h2>
        <p className="instructor-biography">{biography}</p>
      </div>
    </div>
  );
}

export default InstructorProfile;
