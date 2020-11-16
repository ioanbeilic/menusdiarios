import React, { CSSProperties, useContext } from "react";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { search, restaurant, heart, map, person } from "ionicons/icons";

import RouteComponent from "./RouteComponent";
import { ModalContext } from "../../store/ModalContext";
import AuthPage from "../../pages/AuthPage";

const MobileMenuComponent: React.FC = () => {
  const { modalState, setModalState } = useContext(ModalContext);

  const userBtn: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  };

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <RouteComponent />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Restaurant" href="/index">
            <IonIcon icon={restaurant} />
            <IonLabel>Restaurants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Favorite" href="/favorites">
            <IonIcon color="danger" icon={heart} />
            <IonLabel>Favorites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Search" href="/search">
            <IonIcon color="success" icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Map" href="/search">
            <IonIcon color="info" icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="#">
            <div
              className="button-inner"
              onClick={() =>
                setModalState({ state: true, component: <AuthPage /> })
              }
              style={userBtn}
            >
              <IonIcon
                style={{
                  fontSize: "2.7em",
                  marginBottom: "2px",
                  marginTop: "5px",
                }}
                color="dark"
                icon={person}
              />
              <IonLabel style={{ fontSize: "12px" }}>User</IonLabel>
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MobileMenuComponent;
