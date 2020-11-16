import { IonButton, IonImg, IonTitle } from "@ionic/react";
import React, { useState } from "react";
import Login from "../components/account/Login";
import Register from "../components/account/Register";
import { StyledAuth } from "../elements/StyledAuth";

export const AuthPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showForgetPassword, setShowForgerPassword] = useState(false);

  return (
    <StyledAuth>
      <div className="logo">
        <IonImg src="https://picsum.photos/200" />
      </div>
      <IonTitle color="primary">{showLogin ? "Login" : "Register"}</IonTitle>

      {showLogin ? <Login /> : <Register />}

      <div className="buttons">
        <IonButton
          fill="clear"
          onClick={() => {
            setShowLogin(false);
            setShowForgerPassword(true);
          }}
          className="small-text"
        >
          Forgot Password?
        </IonButton>
        {showLogin ? (
          <IonButton
            onClick={() => {
              setShowLogin(false);
            }}
            fill="clear"
            className="small-text"
          >
            Register
          </IonButton>
        ) : (
          <IonButton
            onClick={() => {
              setShowLogin(true);
            }}
            fill="clear"
            className="small-text"
          >
            Login
          </IonButton>
        )}
      </div>
    </StyledAuth>
  );
};

export default AuthPage;
