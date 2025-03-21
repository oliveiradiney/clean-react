import type { HttpPostParams } from '../protocols/http'
import { faker } from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number()
  }
})
