import {
  IonContent,
  IonButton,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

import React, { useState } from "react";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = () => {
    let user = Accounts.findUserByEmail(email);
    if (!!user) {
      // user exist login
      Meteor.loginWithPassword(email, password);
    } else {
      // user not exist - creating
    }
  };

  return (
    <IonContent>
      <form>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            required
            name="email"
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            onIonChange={(e) => setPassword(e.detail.value!)}
            type="password"
            required
          ></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton
              onClick={() => userHandler()}
              color="success"
              expand="block"
            >
              Sign In
            </IonButton>
            <a href="/forgot-password" className="small-text">
              Forgot Password?
            </a>
          </IonCol>
        </IonRow>
      </form>
    </IonContent>
  );
};

export default LoginForm;
