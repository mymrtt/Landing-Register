import React from 'react';

//Components
import Header from './components/header/Header';

//Style
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_content">
        <div className="App_signin">
          <h1 className="App_signin-title">Welcome Back!</h1>
          <p className="App_signin-paragraph">Hi! Login with your info :)</p>
          <button className="button">Sign in</button>
        </div>
        <div className="App_signup">
          <h2 className="App_title">Create Account</h2>
          {/* <div className="social_media">
            <p className="social_media-items">f</p>
            <p className="social_media-items">G+</p>
            <p className="social_media-items">in</p>
          </div> */}
          <form>
            <label>
              <input type="name" placeholder="Name" required/>
            </label>
            <label>
              <input type="email" placeholder="Email" required/>
            </label>
            <label>
              <input type="Password" placeholder="Password" required/>
            </label>
            <button className="button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
