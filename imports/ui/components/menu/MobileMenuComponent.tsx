import React, { useContext } from "react";
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
          <IonTabButton tab="user" href="">
            <div
              onClick={() =>
                setModalState({ state: true, component: <AuthPage /> })
              }
            >
              <IonIcon color="dark" icon={person} />
              <IonLabel>User</IonLabel>
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MobileMenuComponent;
