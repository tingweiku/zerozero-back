import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    minlength: [1, '品名不能為空'],
    required: [true, '品名不能為空']
  },
  price: {
    type: Number,
    min: [1, '價格格式不正確'],
    required: [true, '價格不能為空']
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  sell: {
    type: Boolean,
    defalut: false
  }
}, { versionKey: false })

export default mongoose.model('products', ProductSchema)
