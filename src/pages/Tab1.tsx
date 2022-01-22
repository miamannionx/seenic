import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from "react"
import { Link } from 'react-router-dom'
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Seenic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lets go for a stroll.</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Link to="/createwalk"> 
          <IonButton class = "mainButtonLeft" shape ="round" size = "large">
            Go on a walk 
          </IonButton>
        </Link>
        <br /> 
        <Link to="/map"> 
          <IonButton float-right class = "mainButtonRight" shape ="round" size = "large">
            View 
            <br /> 
            popular 
            <br /> 
            walks
          </IonButton>
        </Link>
        <br /> 
        <IonButton class = "mainButtonLeft" shape ="round" size = "large">
          View 
          <br /> 
          community 
          <br /> 
          events
        </IonButton>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
