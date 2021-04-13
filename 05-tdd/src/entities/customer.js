import Base from './base/base.js'

export default class Car extends Base {
  constructor({ id, name, age }) {
    super({ id, name })

    this.age = age
  }
}