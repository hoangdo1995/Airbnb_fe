import React from "react";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const FacebookLoginButton: React.FC = ({  }) => {
  const handleFacebookResponse = (response: ReactFacebookLoginInfo) => {
    if (response.userID) {
      console.log(response);
      
      
    } else {
      console.log("Facebook login failed.");
    }
  };

  return (
    <div>
      <FacebookLogin
        appId="1472962336814271"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookResponse}
        render={renderProps => (
          <button className="facebook-login-btn" onClick={renderProps.onClick}><i className="fab fa-facebook me-3"></i>Continue with Facebook</button>
        )}
      />
    </div>
  );
};

export default FacebookLoginButton;