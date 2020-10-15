import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import '../styles/pages/orphanages-map.css'

import mapMarkerImg from '../images/marker.svg'
import mapIcon from '../objects/MapIcon'

import api from '../services/api'

import OrphanageInterface from '../interfaces/OrphanageInterface'

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<OrphanageInterface[]>([])

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy Logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita.</p>
        </header>
        <footer>
          <strong>Londrina</strong>
          <p>Paraná</p>
        </footer>
      </aside>

      <Map
        center={[-23.3154561, -51.1850698]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
