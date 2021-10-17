import { useEffect, useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoid2VuZGVyc29uYmVsa28iLCJhIjoiY2t1dWhxMHF4MXdtZTJ2cGdpZ3N4bDh3YyJ9.1t8pHWDf6pQYLnv5UkeApg'
  });

  const polygonPaint = {
    'fill-color': '#6F788A',
    'fill-opacity': 0.7
  };

  return (
    <div className='portfolio-item'>
      <Map
        center={[-0.481747846041145, 51.3233379650232]}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15', 'fill-color': '#ff0000' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer> */}

        <Marker
          coordinates={[-0.481747846041145, 51.3233379650232]}
          anchor="bottom">
          <img width="50" height="50" src="https://www.irmasclarissas.org.br/wp-content/uploads/2015/08/Map-Marker-PNG-File.png"/>
        </Marker>
        <Marker
          coordinates={[-0.481747846041145, 51.3000000000032]}
          anchor="bottom">
          <img width="50" height="50" src="https://www.irmasclarissas.org.br/wp-content/uploads/2015/08/Map-Marker-PNG-File.png"/>
        </Marker>
      </Map>;
    </div>
  )
}