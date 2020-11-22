import React from "react";
import { IonApp } from "@ionic/react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import DesktopMenuComponent from "./components/menu/DesktopMenuComponent";
import MobileMenuComponent from "./components/menu/MobileMenuComponent";
import ModalContextProvider from "./store/ModalContext";
import { ModalComponent } from "./components/shared/ModalConponent";
import { useWindowSize } from "./components/shared/windowResize";
import ToastContextProvider from "./store/ToastContext";
import { ToastComponent } from "./components/shared/ToastComponent";

export const App: React.FC = () => {
  const [width] = useWindowSize();
  const user = useTracker(() => Meteor.user());

  console.log(user);
  return (
    <IonApp>
      <ModalContextProvider>
        <ToastContextProvider>
          <ToastComponent />
          <ModalComponent />
          {width > 700 ? <DesktopMenuComponent /> : <MobileMenuComponent />}
        </ToastContextProvider>
      </ModalContextProvider>
    </IonApp>
  );
};
