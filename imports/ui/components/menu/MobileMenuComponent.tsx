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
import { Meteor } from "meteor/meteor";

const MobileMenuComponent: React.FC = () => {
  const { modalState, setModalState } = useContext(ModalContext);

  const userBtn: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  };

  console.log(Meteor.userId());

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <RouteComponent />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="restaurant" href="/index">
            <IonIcon icon={restaurant} />
            <IonLabel>Restaurants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="favorite" href="/favorites">
            <IonIcon color="danger" icon={heart} />
            <IonLabel>Favorites</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon color="success" icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map" href="/map">
            <IonIcon color="info" icon={map} />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          {!Meteor.userId() ? (
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
                    marginLeft: "10px",
                  }}
                  icon={person}
                />
                <IonLabel style={{ fontSize: "12px", textAlign: "center" }}>
                  Account
                </IonLabel>
              </div>
            </IonTabButton>
          ) : (
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          )}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MobileMenuComponent;
