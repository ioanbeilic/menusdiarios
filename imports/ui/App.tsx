import React from "react";
import { IonApp, IonButton } from "@ionic/react";
import { useTracker, withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import DesktopMenuComponent from "./components/menu/DesktopMenuComponent";
import MobileMenuComponent from "./components/menu/MobileMenuComponent";
import ModalContextProvider from "./store/ModalContext";
import { ModalComponent } from "./components/shared/ModalConponent";
import { useWindowSize } from "./components/shared/windowResize";
import ToastContextProvider from "./store/ToastContext";
import { ToastComponent } from "./components/shared/ToastComponent";
import { LinksCollection } from "../api/links";

const App: React.FC = (props) => {
  const [width] = useWindowSize();
  const user = useTracker(() => Meteor.user());

  const btnPress = () => {
    Meteor.call(
      "links.insert",
      {
        title: "test",
        url: "http://test",
      },
      (err: any, res: any) => {
        if (err) {
          console.log(err);
          return;
        }
        // added
        console.log(res);
      }
    );
  };

  return (
    <IonApp>
      <ModalContextProvider>
        <ToastContextProvider>
          <ToastComponent />
          <ModalComponent />
          {width > 700 ? <DesktopMenuComponent /> : <MobileMenuComponent />}
          <IonButton onClick={() => btnPress()}>press</IonButton>
        </ToastContextProvider>
      </ModalContextProvider>
    </IonApp>
  );
};

export default withTracker(() => {
  Meteor.subscribe("links");
  return {
    links: LinksCollection.find({}).fetch(),
  };
})(App);
