import React from 'react';
import { NavLink } from 'react-router-dom';
import { signInWithGoogle, signOutUser, useUserState } from '../firebase';

const Navbar = () => {
  const [user, loading] = useUserState();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink
              to="/"
              className={({ isActive }) => `navbar-brand d-flex align-items-center ${isActive ? 'active' : ''}`}
              role="button"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-dribbble me-2"
                viewBox="0 0 16 16"
            >
              <path
                  fillRule="evenodd"
                  d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"
              />
            </svg>
            NYSL
          </NavLink>

          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`} end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/games" className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`}>
                  Game Information
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              {loading ? (
                  <span className="text-light">Loading...</span>
              ) : user ? (
                  <div className="d-flex align-items-center">
                    <span className="text-light me-3">{user.email}</span>
                    <button onClick={handleSignOut} className="btn btn-outline-light">
                      Sign Out
                    </button>
                  </div>
              ) : (
                  <button onClick={handleSignIn} className="btn btn-outline-light">
                    Sign in with Google
                  </button>
              )}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;