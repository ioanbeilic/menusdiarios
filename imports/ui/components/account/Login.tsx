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

import React, { useState } from "react";
import { Meteor } from "meteor/meteor";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = () => {
    let user = Accounts.findUserByEmail(email);
    if (!!user) {
      // user exist login

      console.log(Accounts);
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(Meteor.userId());
        }
      });
    } else {
      // user not exist - creating
      console.log("The user does not exist");
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

export default Login;
