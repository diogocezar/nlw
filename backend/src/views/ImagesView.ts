import Image from '../models/Image'

export default class ImagesView {
  render(image: Image) {
    return {
      id: image.id,
      path: `http://localhost:3333/uploads/${image.path}`,
    }
  }
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image))
  }
}
