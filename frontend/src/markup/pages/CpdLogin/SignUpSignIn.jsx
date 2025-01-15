import React, { useState } from "react";
import SignIn from "./SignIn"; // UserLogin component (for sign-in)
import SignUp from "./SignUp"; // SignUp component (for sign-up)
import classes from "./SignUpSignIn.module.css"; // Import CSS module

const SignUpSignIn = () => {
  const [view, setView] = useState("login");

  const handleSwitch = (newView) => {
    setView(newView);
  };

  return (
    <div className={classes.signup}>
      <div className={classes.signup__container}>
        <div className={classes.signup__form}>
          {view === "login" && <SignIn onSwitch={handleSwitch} />}
          {view === "signup" && <SignUp onSwitch={handleSwitch} />}
        </div>
        <div className={classes.login__about}>
          <p className={classes.about}>About Kidus Petros Hospital</p>
          <div className={classes.about__title}>
            <h1>Welcome to Our classic and Historical Hospital</h1>
          </div>
          <div className={classes.about__Description}>
            <p>
              Whether you're looking to schedule a checkup, consult a
              specialist, or manage your health records, our platform offers
              everything you need.
            </p>
            <p>
              Join our community of healthcare professionals, patients, and
              specialists to stay connected, share valuable insights, and
              receive personalized care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSignIn;
