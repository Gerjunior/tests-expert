# Creating stubs

```shell
mkdir mocks

// const withoutStub = await service.makeRequest(<https://swapi.dev/api/planets/1/>)
// console.log(withoutStub)

$ node src/service.test.js > mocks/tatooine.json

// const withoutStub = await service.makeRequest(<https://swapi.dev/api/planets/2/>)
// console.log(withoutStub)

$ node src/service.test.js > mocks/alderaan.json
```
