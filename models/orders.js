import mongoose from 'mongoose'

const Schema = mongoose.Schema

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  products: {
    type: Schema.Types.ObjectId,
    ref: 'products',
    required: [true, '缺少商品 ID']
  },
  date: {
    type: Date,
    required: [true, '缺少訂單日期']
  }
}, { versionKey: false })

export default mongoose.model('orders', OrderSchema)
