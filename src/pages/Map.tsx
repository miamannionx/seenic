import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
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
            <IonTitle size="large">Hi Mia!</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton shape ="round" size = "large">
            Will contain map with top most popular walking routes around current location
        </IonButton>
        <br />

      </IonContent>
    </IonPage>
  );
};

export default Map;
