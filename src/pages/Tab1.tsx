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
        <IonButton class = "mainButtonLeft" shape ="round" size = "large">
          Go on a walk
        </IonButton>
        <br /> 
        <IonButton class = "mainButtonRight" shape ="round" size = "large">
          View 
          <br /> 
          popular 
          <br /> 
          walks
        </IonButton>
        <br /> 
        <IonButton class = "mainButtonLeft" shape ="round" size = "large">
          View 
          <br /> 
          community 
          <br /> 
          events
        </IonButton>
        <ExploreContainer name="Hello." />
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
