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

import React, { useContext, useState } from "react";
import { ToastContext } from "../../store/ToastContext";

export const Register: React.FC = () => {
  const { toastState, setToastState } = useContext(ToastContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    // user not exist - creating

    const user = Accounts.findUserByEmail(email);

    if (user) {
      setToastState({
        isOpen: true,
        message: "Email already exist",
        position: "bottom",
        duration: 1000,
        color: "danger",
      });
    } else {
      Accounts.createUser({ email, password }, function (err) {
        if (err) {
          console.log("Create user error", err);
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
    }
  };

  return (
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
          <IonButton onClick={() => register()} color="success" expand="block">
            Register
          </IonButton>
        </IonCol>
      </IonRow>
    </form>
  );
};

export default Register;
