// Returns a number of walks for user based on what they select.
// Distance will be a drop down selector of <1km, 1-2km, etc...
// The user, when creating the account and then on profile, will be able to add/remove "walk tags".
// "Walk tags" are just tags of interest. Whenever a user logs a walk, they will be able to add relevant tags to it.
// This is then recorded so following users who are interested in specific tags can go on walks with specified tags.
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

          <IonButton expand = "block" fill = "outline" shape ="round" size = "large">
            Select distance   
            <IonButton shape ="round" color = "tertiary">
                 select 
            </IonButton>
          </IonButton>
          
          <br />
          <IonButton expand = "block" fill = "outline" shape ="round" size = "large">
            Select walk tags
          </IonButton>
          <IonButton shape ="round" color = "secondary" size = "small">
            Coffee
          </IonButton>
          <IonButton shape ="round" color = "secondary" size = "small">
            Scenic
          </IonButton>
          <IonButton shape ="round" color = "secondary" size = "small">
            Park
          </IonButton>
          <IonButton shape ="round" color = "secondary" size = "small">
            Water
          </IonButton>

          <br />
          <IonButton expand = "block" fill = "outline" shape ="round" size = "large">
            Invite friends
          </IonButton>

          <br />
          <IonButton expand = "block" shape ="round" size = "large" color = "primary">
            Create my walk
          </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CreateWalk;