import Service from './service.js'
import sinon from 'sinon'
import { deepStrictEqual } from 'assert'
import { BASE_URL_1, BASE_URL_2 } from './constants.js'

const parseImport = async (path) => {
  const result = await import(path)

  return Object.assign({}, result).default
}

const mocks = {
  tatooine: parseImport('../mocks/tatooine.json'),
  alderaan: parseImport('../mocks/alderaan.json'),
}

;(async () => {
  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)

  stub.withArgs(BASE_URL_1).resolves(mocks.tatooine)

  stub.withArgs(BASE_URL_2).resolves(mocks.alderaan)

  {
    const expected = {
      name: 'Tatooine',
      surfaceWater: '1',
      appearedIn: 5,
    }

    const results = await service.getPlanets(BASE_URL_1)

    console.log('results', results)
    deepStrictEqual(results, expected)
  }
  {
    const expected = {
      name: 'Alderaan',
      surfaceWater: '40',
      appearedIn: 2,
    }

    const results = await service.getPlanets(BASE_URL_2)
    console.log('results', results)

    deepStrictEqual(results, expected)

  }
})()
