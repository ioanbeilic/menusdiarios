import React from "react";
import { IonApp } from "@ionic/react";

import { useWindowSize } from "./components/utils/windowResize";
import DesktopMenuComponent from "./components/menu/DesktopMenuComponent";
import MobileMenuComponent from "./components/menu/MobileMenuComponent";
import LoginModalComponent from "./components/login/LoginModalComponent";

export const App: React.FC = () => {
  const [width] = useWindowSize();

  return (
    <IonApp>
      <LoginModalComponent />
      {width > 500 ? <DesktopMenuComponent /> : <MobileMenuComponent />}
    </IonApp>
  );
};
