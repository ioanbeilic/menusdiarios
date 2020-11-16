import {
  IonButton,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
} from "@ionic/react";

import React, { useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import { StyledLogin } from "../../elements/StyledLogin";
import { ModalContext } from "../../store/ModalContext";

export const Login: React.FC = () => {
  const { modalState, setModalState } = useContext(ModalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(Meteor.userId());

  const userHandler = () => {
    // user exist login

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        console.log(err);
      } else {
        setModalState({ state: false, component: null });
        console.log(Meteor.userId());
      }
    });
  };

  return (
    <StyledLogin>
      <form>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            required
            name="email"
            autocomplete="off"
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            onIonChange={(e) => setPassword(e.detail.value!)}
            type="password"
            autocomplete="off"
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
          </IonCol>
        </IonRow>
      </form>
    </StyledLogin>
  );
};

export default Login;
