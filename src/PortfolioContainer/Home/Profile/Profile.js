import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/your-profile">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://mail.google.com/">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="https://twitter.com/">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
            <span className="primary-text">
              {' '}
                Hello, I'M <span className="highlighted-text">Chak</span>
            </span>
                    </div>
                    <div className="profile-details-role">
            <span className="primary-text">
              {' '}
                <h1>
                {' '}
                    <div loop={Infinity} steps={['Ethusiastic Dev ', 1000, 'Full Stack Developer', 1000, 'MERN Stack Dev', 1000, 'Cross Platform Dev', 1000, 'React/React Native Dev', 1000]}></div>
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end operations.
              </span>
            </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">Hire Me</button>
                        <a href="/#" download="Chak_resum.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
