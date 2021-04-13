import { join } from 'path'
import { fileURLToPath } from 'url'
import faker from 'faker'
import { writeFile } from 'fs/promises'

import Car from '../src/entities/car.js'
import CarCategory from '../src/entities/carCategory.js'
import Customer from '../src/entities/customer.js'

const DIRNAME = fileURLToPath(import.meta.url)

const seederBaseFolder = join(DIRNAME, '../../', 'database')
const ITEMS_AMOUNT = 2

const carCategory = new CarCategory({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100),
})

const cars = []
const customers = []
for (let index = 0; index <= ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.datatype.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear(),
  })
  carCategory.carIds.push(car.id)
  cars.push(car)

  const customer = new Customer({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    age: faker.datatype.number({ min: 18, max: 50 }),
  })

  customers.push(customer)
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data))

;(async () => {
  await write('cars.json', cars)
  await write('carCategories.json', [carCategory])
  await write('customers.json', customers)

  console.log('cars', cars)
  console.log('carCategory', carCategory)
  console.log('customers', customers)
})()
