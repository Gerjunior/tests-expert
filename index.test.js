import { error } from './src/constants.js'
import File from './src/file.js'
import { rejects, deepStrictEqual } from 'assert'
;(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }

  {
    const filePath = './mocks/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        name: 'Geraldo Júnior',
        id: 123,
        profession: 'Software Engineer',
        birthDay: 2000,
      },
      {
        name: 'Xuxa da Silva',
        id: 321,
        profession: 'Javascript Expert',
        birthDay: 1941,
      },
      {
        name: 'Joaozinho',
        id: 231,
        profession: 'Java Developer',
        birthDay: 1991,
      },
    ]

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()
