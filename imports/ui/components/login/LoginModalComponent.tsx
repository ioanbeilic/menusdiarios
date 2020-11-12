import { IonModal, IonButton } from "@ionic/react";
import React, { useContext } from "react";
import Context from "../../store/context";
import LoginForm from "./LoginForm";

export const LoginModalComponent: React.FC = () => {
  const { state, actions } = useContext(Context);

  console.log(state);

  return (
    <IonModal
      isOpen={state.showModal}
      cssClass="my-custom-class"
      onDidDismiss={() =>
        actions({
          type: "setShowModal",
          payload: { ...state, showModal: false },
        })
      }
    >
      <LoginForm />
      <IonButton
        onClick={() =>
          actions({
            type: "setShowModal",
            payload: { ...state, showModal: false },
          })
        }
      >
        Close Modal
      </IonButton>
    </IonModal>
  );
};

export default LoginModalComponent;
