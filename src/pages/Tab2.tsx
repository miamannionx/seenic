import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {

  
    return (
      <IonPage>
  
        <IonHeader>
          <IonToolbar>
            <IonTitle>Your friends</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
  
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Your friends</IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <IonCard class = "cardBorder" button = {true}>
            <IonCardHeader>
              <IonCardSubtitle>16:20</IonCardSubtitle>
              <IonCardTitle>Anjalika's Walk</IonCardTitle>
            </IonCardHeader>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>350m away</IonLabel>
              <IonButton fill="outline" slot="end">VIEW WALK</IonButton>
            </IonItem>
  
            <IonCardContent>
              2km walk. Very nice walk through the park and stopped for coffee.
              Rating: 5 Stars
        </IonCardContent>
        </IonCard>
  
        <IonCard class = "cardBorder" button = {true}>
            <IonCardHeader>
              <IonCardSubtitle>8:30</IonCardSubtitle>
              <IonCardTitle>Samantha's Walk</IonCardTitle>
            </IonCardHeader>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>200m away</IonLabel>
              <IonButton fill="outline" slot="end">VIEW WALK</IonButton>
            </IonItem>
  
            <IonCardContent>
              3km walk. Beautiful walk through the part this morning with my dog.
              Rating: 4.5 Stars
        </IonCardContent>
        </IonCard>

        <IonCard class = "cardBorder" button = {true}>
            <IonCardHeader>
              <IonCardSubtitle>Yesterday, 20:00</IonCardSubtitle>
              <IonCardTitle>Holly's Walk</IonCardTitle>
            </IonCardHeader>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>2km away</IonLabel>
              <IonButton fill="outline" slot="end">VIEW WALK</IonButton>
            </IonItem>
  
            <IonCardContent>
              1km walk. Went for an evening stroll to clear my mind - this walk was very well lit and safe, would reccommend.
              Rating: 4.5 Stars
        </IonCardContent>
        </IonCard>
  
        <IonCard class = "cardBorder" button = {true}>
            <IonCardHeader>
              <IonCardSubtitle>Yesterday, 15:00</IonCardSubtitle>
              <IonCardTitle>Joe's Walk</IonCardTitle>
            </IonCardHeader>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>1km away</IonLabel>
              <IonButton fill="outline" slot="end">VIEW WALK</IonButton>
            </IonItem>
  
            <IonCardContent>
              5km walk. Afternoon stroll around campus, took the scenic route. Discovered a beautiful hidden bench, wonderful place to read.
              Rating: 4.5 Stars
        </IonCardContent>
        </IonCard>
  
        <IonCard class = "cardBorder" button = {true}>
            <IonCardHeader>
              <IonCardSubtitle>Yesterday, 10:00</IonCardSubtitle>
              <IonCardTitle>Dad's Walk</IonCardTitle>
            </IonCardHeader>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>3km away</IonLabel>
              <IonButton fill="outline" slot="end">VIEW WALK</IonButton>
            </IonItem>
  
            <IonCardContent>
              2km walk. Walked around the new park. A food stall is there on Saturdays, delicious burgers!
              Rating: 4 Stars
        </IonCardContent>
        </IonCard>
    
        </IonContent>
      </IonPage>
    );
  };

export default Tab2;
