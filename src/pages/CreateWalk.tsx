import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
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

          <IonButton fill = "outline" shape ="round" size = "large">
            Select distance   
            <IonButton shape ="round" color = "tertiary">
                 select 
            </IonButton>
          </IonButton>
          
          <br />
          <IonButton fill = "outline" shape ="round" size = "large">
            Select walk tags
            <br />
            <IonButton shape ="round" color = "secondary">
                Coffee
            </IonButton>
            <IonButton shape ="round" color = "secondary">
                Park
            </IonButton>
            <IonButton shape ="round" color = "secondary">
                Scenic
            </IonButton>
          </IonButton>

          <br />
          <IonButton fill = "outline" shape ="round" size = "large">
            Invite friends
          </IonButton>

          <br />
          <IonButton shape ="round" size = "large" color = "primary">
            Create my walk
          </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CreateWalk;