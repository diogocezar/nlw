export default interface OrphanageInterface {
  id: number
  latitude: number
  longitude: number
  name: string
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: string
  images: {
    path: string
    id: number
  }[]
}
