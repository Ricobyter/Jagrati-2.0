import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function Maps2() {
  return (
    <div className='h-[100vh]'>
<Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div>
 </InfoWindow>
</Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAL_RkcLV2yO03jJOgvPCK4GVzm9UTeHAc')
  })(Maps2)
