// Community page, contains upcoming community events.
// General mental wellbeing can be improved when interacting with nature and helping the local community.
// This section allows community events to do with green spaces, nature and the environment to be advertised.
// Clicking on an event will lead to a page with more information on it:
// Sign up forms, who to contact, description of event, etc.
// User can be prompted to add event to their mobile calendar.
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import './Community.css';

const Community: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Community events</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Upcoming events</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard class = "cardBorder" button = {true}>
          <IonCardHeader>
            <IonCardSubtitle>3rd Febuary</IonCardSubtitle>
            <IonCardTitle>Neighbourhood cleanup</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Participate in a community cleanup. Volunteer group will be going around the local area picking up any rubbish on the roads.
            Please contact for more details...
      </IonCardContent>
      </IonCard>

      <IonCard class = "cardBorder" button = {true}>
          <IonCardHeader>
            <IonCardSubtitle>12th Febuary</IonCardSubtitle>
            <IonCardTitle>5km Park Run</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            5km run taking place in local park... Enter at following link: www...
      </IonCardContent>
      </IonCard>

      <IonCard class = "cardBorder" button = {true}>
          <IonCardHeader>
            <IonCardSubtitle>23rd Febuary</IonCardSubtitle>
            <IonCardTitle>Community Garden event</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Group of volunteers will be tending to the public greenery spots. Click here to get involved...
      </IonCardContent>
      </IonCard>

      <IonCard class = "cardBorder" button = {true}>
          <IonCardHeader>
            <IonCardSubtitle>3rd March</IonCardSubtitle>
            <IonCardTitle>Community Garden event</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Event at the local community garden. Will be doing...
      </IonCardContent>
      </IonCard>

      <IonCard class = "cardBorder" button = {true}>
          <IonCardHeader>
            <IonCardSubtitle>4th Febuary</IonCardSubtitle>
            <IonCardTitle>Park Meet Up Event</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Group of volunteers will be tending to the public greenery spots. Click here to get involved...
      </IonCardContent>
      </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Community;