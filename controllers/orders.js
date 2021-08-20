import orders from '../models/orders.js'

export const checkout = async (req, res) => {
  try {
    await orders.create({
      user: req.user._id,
      products: req.body.products,
      date: new Date()
    })
    res.status(200).send({ success: true, message: '' })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getOrders = async (req, res) => {
  try {
    const result = await orders.find({ user: req.user._id }).populate('products', 'name price')
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const getallOrders = async (req, res) => {
  if (req.user.role !== 1) {
    res.status(403).send({ success: false, message: '沒有權限' })
    return
  }
  try {
    // .populate(使用 ref 的欄位, 要取那些欄位)
    const result = await orders.find().populate('user', 'account').populate('products', 'name price').lean()
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}
