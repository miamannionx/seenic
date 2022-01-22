// Empty for now, but will contain a map feature.
// The map displays walks near to user's current location.
// Clicking on walk will show pictures taken on the walk uploaded by other users,
// reviews of the walk, ratings, etc.
// Will also use mapping interface when user is given a walk or going on a walk and recording it.
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
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

        <IonCard class = "cardBorder">
            <IonCardHeader>
              <IonCardTitle>Will contain interactive map, with popular walking routes near to current location highlighted.</IonCardTitle>
            </IonCardHeader>
         </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Map;
