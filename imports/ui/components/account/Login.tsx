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
import { ToastContext } from "../../store/ToastContext";

export const Login: React.FC = () => {
  const { toastState, setToastState } = useContext(ToastContext);
  const { modalState, setModalState } = useContext(ModalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = () => {
    // user exist login

    Meteor.call("user.login", { email, password }, (err: any) => {
      if (err) {
        setToastState({
          isOpen: true,
          // @ts-ignore
          message: err.reason,
          position: "bottom",
          duration: 1000,
          color: "danger",
        });
      } else {
        Meteor.loginWithPassword(email, password, (err) => {
          if (err) {
            setToastState({
              isOpen: true,
              // @ts-ignore
              message: err.reason,
              position: "bottom",
              duration: 1000,
              color: "danger",
            });
          }
        });
        setModalState({ state: false, component: null });
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
