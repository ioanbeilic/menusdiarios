import React, { useContext } from "react";
import { IonToast, IonContent } from "@ionic/react";
import { ToastContext } from "../../store/ToastContext";

export const ToastComponent: React.FC = () => {
  const { toastState, setToastState } = useContext(ToastContext);

  return (
    <IonContent>
      <IonToast
        isOpen={toastState.isOpen || false}
        onDidDismiss={() =>
          setToastState({
            isOpen: false,
            message: "",
            position: "bottom",
            duration: 500,
            color: "dark",
          })
        }
        color={toastState.color || "dark"}
        message={toastState.message || ""}
        duration={toastState.duration || 200}
      />
    </IonContent>
  );
};
