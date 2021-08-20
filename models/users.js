import mongoose from 'mongoose'
import md5 from 'md5'
import validator from 'validator'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須 4 個字以上'],
    maxlength: [20, '帳號必須 20 個字以內'],
    unique: true,
    required: [true, '帳號不能為空']
  },
  password: {
    type: String,
    minlength: [4, '密碼必須 4 個字以上'],
    maxlength: [20, '密碼必須 20 個字以內'],
    required: [true, '密碼不能為空']
  },
  email: {
    type: String,
    unique: true,
    required: [true, '信箱不能為空'],
    validate: {
      validator: (email) => {
        return validator.isEmail(email)
      },
      message: '信箱格式不正確'
    }
  },
  points: {
    type: Number,
    default: 100,
    required: [true, '沒有使用者點數']
  },
  role: {
    // 0 = 一般會員
    // 1 = 管理員
    type: Number,
    default: 0,
    required: [true, '沒有使用者分類']
  },
  tokens: {
    type: [String]
  }
}, { versionKey: false })

UserSchema.pre('save', function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = md5(user.password)
  }
  next()
})

export default mongoose.model('users', UserSchema)
