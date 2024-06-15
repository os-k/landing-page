import React from 'react';
import './InstructorProfile.css';

function InstructorProfile({ name, photo, biography, link }) {
  return (
    <div className="instructor-profile">
      <img src={photo} alt={name} className="instructor-photo" />
      <div className="instructor-details">
        <h3 className="instructor-name">{name}</h3>
        <p className="instructor-biography">{biography}</p>
      </div>
      <div className='social-icons'>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
  );
}

export default InstructorProfile;
