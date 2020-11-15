import { IonModal, IonButton, IonIcon } from "@ionic/react";
import React, { useContext } from "react";
import { StyledModal } from "../../elements/StyledModal";
import { ModalContext } from "../../store/ModalContext";
import { close } from "ionicons/icons";

export const ModalComponent: React.FC = () => {
  const { modalState, setModalState } = useContext(ModalContext);

  return (
    <IonModal
      isOpen={modalState?.state || false}
      cssClass="global-modal"
      onDidDismiss={() => setModalState({ state: false, component: null })}
    >
      <StyledModal>
        <div className="top">
          <IonButton
            fill="clear"
            color="default"
            onClick={() => setModalState({ state: false, component: null })}
          >
            <IonIcon slot="icon-only" icon={close} />
          </IonButton>
        </div>
        <div className="modal-content">{modalState.component}</div>
      </StyledModal>
    </IonModal>
  );
};

export default ModalComponent;
