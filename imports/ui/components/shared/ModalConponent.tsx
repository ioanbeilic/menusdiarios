import { IonModal, IonButton } from "@ionic/react";
import React, { useContext } from "react";
import { ModalContext } from "../../store/ModalContext";

export const ModalComponent: React.FC = () => {
  const { modalState, setModalState } = useContext(ModalContext);

  return (
    <IonModal
      isOpen={modalState?.state || false}
      cssClass="my-custom-class"
      onDidDismiss={() => setModalState({ state: false, component: null })}
    >
      {modalState?.component}
      <IonButton
        onClick={() => setModalState({ state: false, component: null })}
      >
        Close Modal
      </IonButton>
    </IonModal>
  );
};

export default ModalComponent;
