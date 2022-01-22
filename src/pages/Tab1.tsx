import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star } from 'ionicons/icons';
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
            <IonTitle size="large">Hi! Let's start walking.</IonTitle>
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

// import React from 'react';

// import { IonButton, IonIcon, IonContent } from '@ionic/react';
// import { star } from 'ionicons/icons';

// export const ButtonExample: React.FC = () => (
//   <IonContent>
//     {/*-- Default --*/}
//     <IonButton>Default</IonButton>

//     {/*-- Anchor --*/}
//     <IonButton href="#">Anchor</IonButton>

//     {/*-- Colors --*/}
//     <IonButton color="primary">Primary</IonButton>
//     <IonButton color="secondary">Secondary</IonButton>
//     <IonButton color="tertiary">Tertiary</IonButton>
//     <IonButton color="success">Success</IonButton>
//     <IonButton color="warning">Warning</IonButton>
//     <IonButton color="danger">Danger</IonButton>
//     <IonButton color="light">Light</IonButton>
//     <IonButton color="medium">Medium</IonButton>
//     <IonButton color="dark">Dark</IonButton>

//     {/*-- Expand --*/}
//     <IonButton expand="full">Full Button</IonButton>
//     <IonButton expand="block">Block Button</IonButton>

//     {/*-- Round --*/}
//     <IonButton shape="round">Round Button</IonButton>

//     {/*-- Fill --*/}
//     <IonButton expand="full" fill="outline">Outline + Full</IonButton>
//     <IonButton expand="block" fill="outline">Outline + Block</IonButton>
//     <IonButton shape="round" fill="outline">Outline + Round</IonButton>

//     {/*-- Icons --*/}
//     <IonButton>
//       <IonIcon slot="start" icon={star} />
//       Left Icon
//     </IonButton>

//     <IonButton>
//       Right Icon
//       <IonIcon slot="end" icon={star} />
//     </IonButton>

//     <IonButton>
//       <IonIcon slot="icon-only" icon={star} />
//     </IonButton>

//     {/*-- Sizes --*/}
//     <IonButton size="large">Large</IonButton>
//     <IonButton>Default</IonButton>
//     <IonButton size="small">Small</IonButton>
//   </IonContent>
// );

export default Tab1;
