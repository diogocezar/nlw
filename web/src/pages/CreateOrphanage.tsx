import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { FiPlus } from 'react-icons/fi'
import { LeafletMouseEvent } from 'leaflet'
import { useHistory } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import mapIcon from '../objects/MapIcon'

import '../styles/pages/create-orphanage.css'
import api from '../services/api'

export default function CreateOrphanage() {
  const history = useHistory()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>()
  function handleMapClick(event: LeafletMouseEvent) {
    const { lat: latitude, lng: longitude } = event.latlng
    setPosition({
      latitude,
      longitude,
    })
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const { latitude, longitude } = position
    const formData = new FormData()
    formData.append('name', name)
    formData.append('about', about)
    formData.append('instructions', instructions)
    formData.append('latitude', String(latitude))
    formData.append('longitude', String(longitude))
    formData.append('open_on_weekends', String(open_on_weekends))
    formData.append('opening_hours', opening_hours)
    images.forEach((image) => {
      formData.append('images', image)
    })
    api.post('orphanages', formData).then(() => {
      alert('Cadastro efetuado com sucesso!')
      history.push('/app')
    })
  }
  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return
    const selectedImages = Array.from(event.target.files)
    setImages(selectedImages)
    const selectedImagesPreview = selectedImages.map((image) =>
      URL.createObjectURL(image),
    )
    setPreviewImages(selectedImagesPreview)
  }
  return (
    <div id="page-create-orphanage">
      <Sidebar />
      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.3154561, -51.1850698]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages?.map((image) => (
                  <img key={Math.random()} src={image} alt={name} />
                ))}
                <label className="new-image" htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleSelectImages}
                  id="image[]"
                ></input>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                maxLength={300}
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  )
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
