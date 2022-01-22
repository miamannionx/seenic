import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './CreateWalk.css';

const CreateWalk: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>New walk</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lets go for a stroll.</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default CreateWalk;