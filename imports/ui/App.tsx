import React from "react";
import { IonApp } from "@ionic/react";

import DesktopMenuComponent from "./components/menu/DesktopMenuComponent";
import MobileMenuComponent from "./components/menu/MobileMenuComponent";
import ModalContextProvider from "./store/ModalContext";
import { ModalComponent } from "./components/shared/ModalConponent";
import { useWindowSize } from "./components/shared/windowResize";

export const App: React.FC = () => {
  const [width] = useWindowSize();

  return (
    <ModalContextProvider>
      <IonApp>
        <ModalComponent />
        {width > 500 ? <DesktopMenuComponent /> : <MobileMenuComponent />}
      </IonApp>
    </ModalContextProvider>
  );
};
