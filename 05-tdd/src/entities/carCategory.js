import Base from './base/base.js'

export default class Customer extends Base {
  constructor({ id, name, carIds, price }) {
    super({ id, name })

    this.carIds = carIds
    this.price = price
  }
}