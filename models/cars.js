import mongoose from 'mongoose'
import validator from 'validator'

const Schema = mongoose.Schema

const CarSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  address: {
    type: String,
    required: [true, '地址不能為空']
  },
  items: [{
    type: String,
    enum: ['汽車', '機車'],
    required: [true, '品項不能為空']
  }],
  freetime: {
    day: {
      type: String,
      enum: ['平日', '假日', '平日及假日'],
      required: [true, '時段不能為空']
    },
    time: {
      type: String,
      enum: ['上午', '下午', '上午及下午'],
      required: [true, '時段不能為空']
    }
  },
  tel: {
    type: String,
    required: [true, '手機不能為空'],
    validate: {
      validator: (tel) => {
        return validator.isMobilePhone(tel, 'zh-TW')
      },
      message: '手機格式不正確'
    }
  },
  done: {
    type: Boolean,
    defalut: false
  },
  date: {
    type: Date,
    required: [true, '缺少訂單日期']
  }
}, { versionKey: false })

export default mongoose.model('cars', CarSchema)
