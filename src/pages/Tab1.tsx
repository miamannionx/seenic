import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from "react"
import { Link } from 'react-router-dom'
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
            <IonTitle size="large">Good morning Mia!</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Link to="/createwalk"> 
          <IonButton class = "mainButtonLeft" shape ="round" size = "large">
            Go on a walk 
          </IonButton>
        </Link>

        <br /> 
        <Link to="/map"> 
          <IonButton float-right class = "mainButtonRight" shape ="round" size = "large" >
            View 
            <br /> 
            popular 
            <br /> 
            walks
          </IonButton>
        </Link>

        <br /> 
        <Link to="/community"> 
          <IonButton class = "mainButtonLeft" shape ="round" size = "large">
            View 
            <br /> 
            community 
            <br /> 
            events
          </IonButton>
        </Link>

      </IonContent>
    </IonPage>
  );
};


export default Tab1;
