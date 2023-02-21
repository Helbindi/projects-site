import React from "react";

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile-title">Andy Zhu</h2>
      <ul className="profile-list">
        <li>Location: Sacramento, CA</li>
        <li>College: Sacramento State</li>
        <li>Degree: Computer Science</li>
        <li>
          <p>Github: </p>
          <a
            href="https://github.com/Helbindi/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Ficons8-github-squared-64.png?alt=media"
              alt="github-icon"
            />
          </a>
        </li>
      </ul>
      {/* <img
        className="profile-img"
        src="https://cdn.frankerfacez.com/emoticon/162146/2"
        alt="AYAYA"
      /> */}
    </div>
  );
}

export default Profile;
