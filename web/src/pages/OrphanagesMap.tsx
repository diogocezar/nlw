import React from 'react'

import mapMarkerImg from '../images/marker.svg'

import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanages-map.css'

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

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap