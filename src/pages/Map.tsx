import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Map.css';

const Map: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">View map</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton class = "mainButton" shape ="round" size = "large">
            Will contain map 
            <br /> 
            with top most popular walking 
            <br /> 
            routes around current location
        </IonButton>
        <br />

      </IonContent>
    </IonPage>
  );
};

export default Map;
