import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Hi Mia!</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton expand = "block" shape ="round" size = "large">
            Your walks
        </IonButton>
        <br />
        <IonButton expand = "block" shape ="round" size = "large">
            Add friend
        </IonButton>
        <br />
        <IonButton expand = "block" shape ="round" size = "large">
            Edit profile
        </IonButton>
        <br />
        <IonButton expand = "block" shape ="round" size = "large">
            Settings
        </IonButton>
        <br />
        <IonButton expand = "block" fill = "outline" shape ="round" size = "large">
            Log out
        </IonButton>
        <br />


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
