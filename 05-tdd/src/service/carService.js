import BaseRepository from '../repositories/base/baseRepository.js'

export default class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars })
  }

  getRandomPositionFromArray(list) {
    const listLength = list.length
    return Math.floor(
      Math.random() * (listLength)
    )
  }

  chooseRandomCar(carCategory) {
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds)
    const carId = carCategory.carIds[randomCarIndex]

    return carId
  }

  async getAvailableCar(carCategory) {
    const carId = this.chooseRandomCar(carCategory)
    
    return await this.carRepository.find(carId)
  }
}
