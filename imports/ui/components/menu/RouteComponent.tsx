import React, { Fragment } from "react";
import { Redirect, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import { IonPage } from "@ionic/react";
import HeaderComponent from "../header/HeaderComponent";

const RouteComponent: React.FC = () => (
  <IonPage>
    <HeaderComponent title={"Main"} />
    <Route path="/index" component={MainPage} exact={true} />
    <Route path="/" render={() => <Redirect to="/index" />} exact={true} />
  </IonPage>
);

export default RouteComponent;
