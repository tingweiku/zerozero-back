import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LocationSchema = new Schema({
  name: {
    type: String,
    minlength: [1, '名稱不能為空'],
    required: [true, '名稱不能為空']
  },
  address: {
    type: String,
    minlength: [1, '地址不能為空'],
    required: [true, '地址不能為空']
  },
  local: {
    lat: { type: Number, required: [true, '經度不能為空'] },
    lng: { type: Number, required: [true, '緯度不能為空'] }
  }
}, { versionKey: false })

export default mongoose.model('locations', LocationSchema)
