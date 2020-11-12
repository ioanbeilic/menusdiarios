import React from "react";
import {
  IonButton,
  IonCol,
  IonHeader,
  IonRouterOutlet,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import RouteComponent from "./RouteComponent";
import { StyledDesktop } from "../../elements/StyledDesktop";
import LoginModalComponent from "../login/LoginModalComponent";

const DesktopMenuComponent: React.FC = () => (
  <IonReactRouter>
    <StyledDesktop>
      <IonRouterOutlet>
        <RouteComponent />
      </IonRouterOutlet>
      <IonHeader>
        <IonToolbar className="navbar">
          <IonRow className="ion-align-item-center">
            <IonCol size="2">
              <img
                src="https://picsum.photos/seed/picsum/100/75"
                className="logo ion-text-left"
              />
            </IonCol>
            <IonCol size="10">
              <div className="ion-text-right">
                <IonButton
                  fill="clear"
                  routerLink="/index"
                  routerDirection="root"
                  className="link"
                >
                  Main
                </IonButton>
                <LoginModalComponent />
              </div>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <div className="footer">footer</div>
    </StyledDesktop>
  </IonReactRouter>
);

export default DesktopMenuComponent;
