import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Map.css';
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};
  
function MyComponent() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDfylAbGmWYsTqo46xDaBnQHgr4dDFwbh0"
    })
  
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={map => {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
        }}
        onUnmount={map => {
          // do your stuff before map is unmounted
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    ): <></>
}


export default React.memo(MyComponent);


// const Map: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Map</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">erm</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <ExploreContainer name="insert map here" />
//       </IonContent>
//     </IonPage>


//   );
// };

// export default Map;
