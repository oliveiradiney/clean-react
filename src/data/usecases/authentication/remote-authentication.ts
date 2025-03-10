import type { HttpPostClient } from '@/data/protocols/http'

export class RemoteAuthetication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    await this.httpPostClient.post({
      url: this.url
    })
  }
}
