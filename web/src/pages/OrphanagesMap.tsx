import React from 'react'

import mapMarkerImg from '../images/marker.svg'

import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanages-map.css'

import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy Logo"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita.</p>
        </header>
        <footer>
          <strong>Londrina</strong>
          <p>Paraná</p>
        </footer>
      </aside>

      <Map
        center={[-23.3154561,-51.1850698]}
        zoom={13}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap