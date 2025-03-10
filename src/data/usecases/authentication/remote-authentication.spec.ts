import { RemoteAuthetication } from './remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'

describe('Remote Authetication', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
