import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <ion-button>Default</ion-button>
          <IonToolbar>
            <IonTitle size="large">Hi! Let's start walking.</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Hello." />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
