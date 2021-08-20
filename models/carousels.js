import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CarouselSchema = new Schema({
  image: {
    type: String
  },
  show: {
    type: Boolean,
    defalut: false
  }
}, { versionKey: false })

export default mongoose.model('carousels', CarouselSchema)
