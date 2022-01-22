import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <IonButton shape ="round" size = "large">
          Go on walk
        </IonButton>
        <IonButton shape ="round" size = "large">
          View popular walks
        </IonButton>
        <IonButton shape ="round" size = "large">
          View community events
        </IonButton>
        <ExploreContainer name="Hello." />
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
