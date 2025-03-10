import type { HttpPostClient } from '@/data/protocols/http'
import type { AuthenticationParams } from '@/domain/usecases/authentication'

export class RemoteAuthetication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
