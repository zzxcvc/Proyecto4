import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapView = () => {
    return(

    <div className="container mt-2">
       <div className="row">
                <div className="col-md-6 mt-3 mb-3 text-center">
                <h1>COMUNÍQUESE<br />CON NOSOTROS</h1>
                <h2>Reservas</h2>
                        <p>Teléfono · +44 (0) 1844 278 881</p>
                        <p>Teléfono · +44 (0) 1844 278 882</p>
                        <p>Correo electrónico · reservas@laCucina.cl</p>
                        <p>Dirección · Av. Costanera Quilque Sur 1053</p>
                        <p>Los Angeles</p>
                </div>
                <div className="col-md-6 mt-3 mb-3" align="center" >
                        <MapContainer center={[-37.461844, -72.335151]} zoom={15} scrollWheelZoom={false}>
                              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                              <Marker position={[-37.461844, -72.335151]}>
                                    <Popup>
                                      LA CUCINA<br />
                                      Av. Costanera Quilque Sur 1053 <br /> Los Angeles
                                    </Popup>
                              </Marker>
                        </MapContainer>
                </div>
      </div>
    </div>
   
    )
}


export default MapView