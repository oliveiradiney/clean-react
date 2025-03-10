import { RemoteAuthetication } from './remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'

type SutTypes = {
  sut: RemoteAuthetication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthetication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('Remote Authetication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
