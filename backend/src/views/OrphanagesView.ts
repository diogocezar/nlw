import Orphanage from '../models/Orphanage'
import ImagesView from './ImagesView'

export default class OrphanagesView {
  render(orphanage: Orphanage) {
    const ImagesViewInstance = new ImagesView()
    return {
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: ImagesViewInstance.renderMany(orphanage.images),
    }
  }
  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage))
  }
}
