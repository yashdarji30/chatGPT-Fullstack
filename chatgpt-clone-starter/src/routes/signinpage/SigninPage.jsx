import { SignIn } from '@clerk/clerk-react'
import "./signinPage.css";
import React from 'react'

const SigninPage = () => {
    <div className="signInPage">
    <SignIn
      path="/sign-in"
      signUpUrl="/sign-up"
      forceRedirectUrl="/dashboard"
    />
  </div>

};

export default SigninPage