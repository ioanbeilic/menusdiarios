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

export const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = () => {
    let user = Accounts.findUserByEmail(email);
    console.log(user);
    if (!!user) {
      console.log("Email already exist");
    } else {
      // user not exist - creating
      Accounts.createUser({ email, password }, function (err) {
        if (err) {
          console.log("Create user error", err);
        }
      });
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

export default Register;
